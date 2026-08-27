import pymupdf # PyMuPDF
import os

pdf_path = r"d:\SOFTWARE\ANTIGRAVITY\Rushmitha_Project\rushmitha\public\figma-exports\Rushmitha-UI-Projects.pdf"
out_dir = r"d:\SOFTWARE\ANTIGRAVITY\Rushmitha_Project\rushmitha\public\figma-exports"
os.makedirs(out_dir, exist_ok=True)

filenames = [
    "01-finflow-dashboard.png",
    "02-finflow-send-money.png",
    "03-verde-listing.png",
    "04-verde-detail.png",
    "05-pulse-dashboard.png",
    "06-pulse-workout.png",
    "07-nimbus-desktop.png",
    "08-nimbus-mobile.png",
    "09-wanderlust-explore.png",
    "10-wanderlust-detail.png",
    "11-nourish-home.png",
    "12-nourish-restaurant.png",
    "13-lumina-desktop.png",
    "14-lumina-mobile.png"
]

doc = pymupdf.open(pdf_path)
print(f"Extracting 14 high-resolution images from {pdf_path}...")

for i in range(min(len(doc), len(filenames))):
    page = doc[i]
    # Check if page has embedded image
    image_list = page.get_images(full=True)
    out_file = os.path.join(out_dir, filenames[i])
    
    if image_list:
        xref = image_list[0][0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        with open(out_file, "wb") as f:
            f.write(image_bytes)
        print(f"[Extracted Image] Page {i+1} -> {filenames[i]} ({len(image_bytes)} bytes)")
    else:
        # Render page at high DPI (300 DPI)
        pix = page.get_pixmap(dpi=300)
        pix.save(out_file)
        print(f"[Rendered Page] Page {i+1} -> {filenames[i]}")

print("All 14 Figma screens extracted successfully!")
