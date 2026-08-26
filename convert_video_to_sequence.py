import os
import sys
import cv2
from PIL import Image

def convert_video(video_path, output_dir="public/sequence", target_frames=75, target_fps=15):
    os.makedirs(output_dir, exist_ok=True)
    
    if not os.path.exists(video_path):
        print(f"Error: Video file '{video_path}' does not exist.")
        return False
        
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"Error: Could not open video '{video_path}'.")
        return False

    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    video_fps = cap.get(cv2.CAP_PROP_FPS) or 30.0
    duration = total_frames / video_fps if video_fps > 0 else 5.0
    
    print(f"Loaded video: {video_path}")
    print(f"Total frames: {total_frames}, FPS: {video_fps:.2f}, Duration: {duration:.2f}s")
    print(f"Targeting {target_frames} frames into '{output_dir}'...")

    # We want exactly target_frames extracted
    frame_indices = [int(i * (total_frames - 1) / (target_frames - 1)) for i in range(target_frames)]
    
    saved_count = 0
    for i, target_idx in enumerate(frame_indices):
        cap.set(cv2.CAP_PROP_POS_FRAMES, target_idx)
        ret, frame = cap.read()
        if not ret:
            print(f"Warning: could not read frame {target_idx}")
            continue

        # Convert BGR (OpenCV) to RGB (Pillow)
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        pil_img = Image.fromarray(rgb_frame)

        frame_filename = f"frame_{i+1:03d}.webp"
        out_path = os.path.join(output_dir, frame_filename)
        pil_img.save(out_path, "WEBP", quality=90, method=4)
        saved_count += 1

    cap.release()
    print(f"Successfully generated {saved_count} WebP frames in '{output_dir}'!")
    return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python convert_video_to_sequence.py <path_to_video.mp4> [output_dir]")
        print("Example: python convert_video_to_sequence.py downloaded_avatar.mp4")
    else:
        video = sys.argv[1]
        out = sys.argv[2] if len(sys.argv) > 2 else "public/sequence"
        convert_video(video, out)
