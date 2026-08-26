import os
import cv2
import numpy as np

SEQUENCE_DIR = "public/sequence"

def clean_watermark():
    files = sorted([f for f in os.listdir(SEQUENCE_DIR) if f.startswith("frame_") and f.endswith(".webp")])
    total = len(files)
    print(f"Cleaning watermark from {total} frames...")

    for idx, filename in enumerate(files, 1):
        filepath = os.path.join(SEQUENCE_DIR, filename)
        img = cv2.imread(filepath)
        if img is None:
            continue

        h, w, _ = img.shape

        # Watermark region is located around (w-160 to w-30, h-160 to h-30)
        mask = np.zeros((h, w), dtype=np.uint8)
        cv2.rectangle(mask, (w - 160, h - 160), (w - 30, h - 30), 255, -1)

        # Inpaint with Navier-Stokes method
        inpainted = cv2.inpaint(img, mask, 12, cv2.INPAINT_NS)

        # Smooth the patch to blend seamlessly with surrounding ambient gradient
        patch = inpainted[h-165:h-25, w-165:w-25]
        blurred = cv2.GaussianBlur(patch, (21, 21), 0)
        inpainted[h-165:h-25, w-165:w-25] = blurred

        # Overwrite with high quality WebP
        cv2.imwrite(filepath, inpainted, [cv2.IMWRITE_WEBP_QUALITY, 92])

        if idx % 15 == 0 or idx == total:
            print(f"Processed [{idx}/{total}] frames...")

    print("All frames cleaned successfully!")

if __name__ == "__main__":
    clean_watermark()
