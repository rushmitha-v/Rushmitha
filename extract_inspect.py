import fitz # PyMuPDF
import os

pdf_dir = r"d:\SOFTWARE\ANTIGRAVITY\Rushmitha_Project\rushmitha\public\case-studies\pdf"
out_dir = r"d:\SOFTWARE\ANTIGRAVITY\Rushmitha_Project\rushmitha\public\figma-exports"
os.makedirs(out_dir, exist_ok=True)

print("Checking PDFs in:", pdf_dir)
for f in os.listdir(pdf_dir):
    if f.endswith(".pdf"):
        doc = fitz.open(os.path.join(pdf_dir, f))
        print(f"File: {f}, pages: {len(doc)}")
        for pno in range(len(doc)):
            page = doc[pno]
            img_list = page.get_images()
            print(f"  Page {pno+1} has {len(img_list)} images")

ui_proj_pdf = os.path.join(out_dir, "Rushmitha-UI-Projects.pdf")
if os.path.exists(ui_proj_pdf):
    doc = fitz.open(ui_proj_pdf)
    print(f"Rushmitha-UI-Projects.pdf has {len(doc)} pages")
    for pno in range(len(doc)):
        page = doc[pno]
        img_list = page.get_images()
        print(f"  Page {pno+1} has {len(img_list)} images")
