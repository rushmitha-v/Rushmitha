import os
import math
import numpy as np
import cv2
from PIL import Image, ImageEnhance

def generate_perfect_sequence(image_path="Rushmitha3.png", output_dir="public/sequence", num_frames=75):
    os.makedirs(output_dir, exist_ok=True)
    
    img = cv2.imread(image_path)
    if img is None:
        print(f"Error: Unable to load {image_path}")
        return False
        
    h, w, c = img.shape
    print(f"Loaded source image {image_path}: {w}x{h}")
    
    # Target resolution maintaining full portrait framing (900x1200, 3:4 aspect ratio)
    target_w, target_h = 900, 1200
    
    # Center of rotation/scale around eye level for natural camera motion
    center_x = w * 0.50
    center_y = h * 0.38
    
    # Pre-build coordinates for smooth lighting gradient overlay
    # X coordinates normalized across width
    x_coords = np.linspace(0, 1, w, dtype=np.float32)
    y_coords = np.linspace(0, 1, h, dtype=np.float32)
    xx, yy = np.meshgrid(x_coords, y_coords)
    
    # Amber rim light mask on right (x > 0.7)
    amber_mask = np.clip((xx - 0.65) / 0.35, 0, 1) ** 1.5
    amber_color = np.array([30, 140, 255], dtype=np.float32) # BGR for warm amber
    
    # Blue rim light mask on left (x < 0.35)
    blue_mask = np.clip((0.38 - xx) / 0.38, 0, 1) ** 1.5
    blue_color = np.array([255, 160, 40], dtype=np.float32) # BGR for cool electric blue
    
    for i in range(num_frames):
        t = i / (num_frames - 1)  # 0.0 to 1.0
        
        # Smooth sinusoidal cycle
        phase = t * 2.0 * math.pi
        
        # 1. Subtle camera breathing zoom (1.000 to 1.035) - keeps entire portrait safely in frame!
        zoom = 1.008 + 0.025 * (1.0 - math.cos(phase)) / 2.0
        
        # 2. Smooth 3D orbital camera pan (dx: -16px to +16px, dy: -8px to +8px)
        pan_x = 16.0 * math.sin(phase)
        pan_y = 7.0 * math.cos(phase * 0.5)
        
        # 3. Natural head tilt / angle (-1.0 deg to +1.0 deg)
        angle = 0.95 * math.sin(phase)
        
        # Build affine matrix
        rot_mat = cv2.getRotationMatrix2D((center_x, center_y), angle, zoom)
        rot_mat[0, 2] += pan_x
        rot_mat[1, 2] += pan_y
        
        # Warp with reflection padding to prevent black borders
        transformed = cv2.warpAffine(
            img, 
            rot_mat, 
            (w, h), 
            flags=cv2.INTER_CUBIC, 
            borderMode=cv2.BORDER_REFLECT_101
        )
        
        # 4. Dynamic studio lighting modulation:
        # Amber and blue rim lights gently pulse in sync with the orbital movement
        amber_intensity = 0.22 * (1.0 + math.sin(phase + 0.4))
        blue_intensity = 0.20 * (1.0 - math.sin(phase + 0.4))
        
        # Apply lighting modulation in float
        img_float = transformed.astype(np.float32)
        
        # Add amber glow on right
        for ch in range(3):
            img_float[:, :, ch] += amber_mask * (amber_color[ch] * amber_intensity * 0.4)
            img_float[:, :, ch] += blue_mask * (blue_color[ch] * blue_intensity * 0.4)
            
        img_lit = np.clip(img_float, 0, 255).astype(np.uint8)
        
        # 5. Crop to target 3:4 ratio while keeping FULL HEAD AND UPPER TORSO intact:
        # The source is 1086x1448 (ratio 1:1.3333 = 3:4 exactly!)
        # So we can scale directly to 900x1200 with zero cutoff!
        final_resized = cv2.resize(img_lit, (target_w, target_h), interpolation=cv2.INTER_AREA)
        
        # Convert to RGB PIL Image
        rgb = cv2.cvtColor(final_resized, cv2.COLOR_BGR2RGB)
        pil_img = Image.fromarray(rgb)
        
        # Save as WebP
        filename = f"frame_{i+1:03d}.webp"
        filepath = os.path.join(output_dir, filename)
        pil_img.save(filepath, "WEBP", quality=92, method=4)
        
    print(f"Successfully generated {num_frames} uncropped, high-res frames in '{output_dir}'.")
    return True

if __name__ == "__main__":
    generate_perfect_sequence()
