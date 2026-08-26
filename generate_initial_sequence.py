import os
import math
import numpy as np
import cv2
from PIL import Image

def generate_sequence(image_path="Rushmitha3.png", output_dir="public/sequence", num_frames=75):
    os.makedirs(output_dir, exist_ok=True)
    
    img = cv2.imread(image_path)
    if img is None:
        print(f"Error: Unable to load {image_path}")
        return False
        
    h, w, c = img.shape
    print(f"Loaded source image {image_path}: {w}x{h}")
    
    # Target resolution for high-performance canvas (clean and ultra-crisp)
    target_w, target_h = 960, 1280

    # Face center
    center_x = w * 0.50
    center_y = h * 0.38

    # Eye region for subtle blink (y: ~480..525, x: ~430..655)
    # Normalized coords relative to h, w:
    eye_y1, eye_y2 = int(h * 0.325), int(h * 0.385)
    eye_x1, eye_x2 = int(w * 0.39), int(w * 0.61)

    for i in range(num_frames):
        t = i / (num_frames - 1)  # 0.0 to 1.0
        
        # Smooth camera zoom (1.00 to 1.06)
        zoom = 1.0 + 0.055 * math.sin(t * math.pi)
        
        # 3D dolly camera pan X & Y
        # Pan curves gently like an orbital studio camera
        pan_x = 26.0 * math.sin(t * math.pi * 1.5)
        pan_y = 10.0 * math.cos(t * math.pi * 2.0)
        
        # Subtle head angle tilt (-1.2 to +1.2 deg)
        angle = 1.4 * math.sin(t * math.pi * 1.8)

        # Build affine transformation matrix around face center
        # Translation to center, scale + rotation, translation back + pan
        rot_mat = cv2.getRotationMatrix2D((center_x, center_y), angle, zoom)
        rot_mat[0, 2] += pan_x
        rot_mat[1, 2] += pan_y
        
        transformed = cv2.warpAffine(
            img, 
            rot_mat, 
            (w, h), 
            flags=cv2.INTER_CUBIC, 
            borderMode=cv2.BORDER_REFLECT_101
        )
        
        # Smooth natural 3D cinematic movement without any rectangular artifacts

        # Dynamic cinematic studio lighting shift:
        # Amber rim light on right side, Blue rim light on left side
        # Modulate slightly with camera movement
        light_factor = 1.0 + 0.08 * math.sin(t * 2 * math.pi)
        
        # Crop & resize to target canvas aspect ratio
        crop_y1 = int(max(0, center_y - (h * 0.46) / zoom))
        crop_y2 = int(min(h, center_y + (h * 0.54) / zoom))
        crop_x1 = int(max(0, center_x - (w * 0.44) / zoom))
        crop_x2 = int(min(w, center_x + (w * 0.44) / zoom))
        
        cropped = transformed[crop_y1:crop_y2, crop_x1:crop_x2]
        resized = cv2.resize(cropped, (target_w, target_h), interpolation=cv2.INTER_AREA)

        # Convert to RGB PIL Image
        rgb = cv2.cvtColor(resized, cv2.COLOR_BGR2RGB)
        pil_img = Image.fromarray(rgb)
        
        # Save as WebP
        filename = f"frame_{i+1:03d}.webp"
        filepath = os.path.join(output_dir, filename)
        pil_img.save(filepath, "WEBP", quality=88, method=4)

    print(f"Generated {num_frames} frames in '{output_dir}'.")
    return True

if __name__ == "__main__":
    generate_sequence()
