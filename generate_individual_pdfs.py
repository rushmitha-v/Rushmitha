import pymupdf
import os

pdf_dir = r"d:\SOFTWARE\ANTIGRAVITY\Rushmitha_Project\rushmitha\public\case-studies\pdf"
os.makedirs(pdf_dir, exist_ok=True)

def create_styled_pdf(filename, title, subtitle, badge, role, timeline, tools, sections):
    doc = pymupdf.open()
    
    # Page 1: Hero & Overview
    page = doc.new_page(width=595, height=842) # A4
    
    # Dark Header Box
    rect_header = pymupdf.Rect(0, 0, 595, 200)
    page.draw_rect(rect_header, color=(0.04, 0.06, 0.1), fill=(0.04, 0.06, 0.1))
    
    # Accent top line
    page.draw_rect(pymupdf.Rect(0, 0, 595, 6), color=(0.54, 0.36, 0.96), fill=(0.54, 0.36, 0.96))
    
    # Badge
    page.insert_text((40, 45), badge.upper(), fontname="helv", fontsize=10, color=(0.22, 0.74, 0.97))
    
    # Title
    page.insert_text((40, 75), title, fontname="helv", fontsize=20, color=(1, 1, 1))
    
    # Subtitle
    page.insert_textbox(pymupdf.Rect(40, 88, 555, 140), subtitle, fontname="helv", fontsize=11, color=(0.8, 0.85, 0.92))
    
    # Meta bar
    meta_text = f"Role: {role}   |   Timeline: {timeline}   |   Tools: {tools}"
    page.draw_rect(pymupdf.Rect(40, 150, 555, 185), color=(0.15, 0.2, 0.3), fill=(0.08, 0.12, 0.2))
    page.insert_text((55, 172), meta_text, fontname="helv", fontsize=10, color=(0.7, 0.8, 0.95))
    
    # Content sections on page 1 & subsequent pages
    curr_y = 225
    curr_page = page
    
    for sec_num, sec_title, sec_paragraphs in sections:
        if curr_y > 700:
            curr_page = doc.new_page(width=595, height=842)
            # Header on new page
            curr_page.draw_rect(pymupdf.Rect(0, 0, 595, 4), color=(0.54, 0.36, 0.96), fill=(0.54, 0.36, 0.96))
            curr_page.insert_text((40, 35), f"{title} — Case Study Documentation", fontname="helv", fontsize=9, color=(0.5, 0.55, 0.65))
            curr_page.draw_line(pymupdf.Point(40, 45), pymupdf.Point(555, 45), color=(0.85, 0.88, 0.92))
            curr_y = 70
        
        # Section Number & Title
        curr_page.draw_rect(pymupdf.Rect(40, curr_y - 14, 62, curr_y + 8), color=(0.54, 0.36, 0.96), fill=(0.54, 0.36, 0.96))
        curr_page.insert_text((46, curr_y), f"0{sec_num}", fontname="helv", fontsize=10, color=(1, 1, 1))
        curr_page.insert_text((72, curr_y), sec_title, fontname="helv", fontsize=14, color=(0.06, 0.09, 0.16))
        curr_y += 24
        
        for p in sec_paragraphs:
            rect_p = pymupdf.Rect(40, curr_y, 555, curr_y + 120)
            res = curr_page.insert_textbox(rect_p, p, fontname="helv", fontsize=10, color=(0.2, 0.25, 0.32), lineheight=1.4)
            # Approximate height used
            lines = len(p) // 80 + 1
            curr_y += max(lines * 14 + 10, 32)
            
            if curr_y > 720:
                curr_page = doc.new_page(width=595, height=842)
                curr_page.draw_rect(pymupdf.Rect(0, 0, 595, 4), color=(0.54, 0.36, 0.96), fill=(0.54, 0.36, 0.96))
                curr_page.insert_text((40, 35), f"{title} — Case Study Documentation", fontname="helv", fontsize=9, color=(0.5, 0.55, 0.65))
                curr_page.draw_line(pymupdf.Point(40, 45), pymupdf.Point(555, 45), color=(0.85, 0.88, 0.92))
                curr_y = 70
        
        curr_y += 18
    
    # Save PDF
    out_path = os.path.join(pdf_dir, filename)
    doc.save(out_path)
    print(f"Created styled PDF: {out_path} ({len(doc)} pages)")

# 08: HYDRA-CORE
create_styled_pdf(
    "08-hydra-core.pdf",
    "HYDRA-CORE v3.1 — Industrial HMI & Telemetry",
    "High-precision operator control interface designed for heavy industrial hydraulic machinery, telemetry monitoring, and safety operations.",
    "GEE KAY VEE HYDRAULICS · INDUSTRIAL UX",
    "Designing Engineer",
    "Jun 2023 – Jan 2025",
    "Figma, Industrial Research, Telemetry Design",
    [
        (1, "Executive Summary & Problem Statement", [
            "Heavy hydraulic machinery operators in manufacturing facilities encounter high cognitive load when operating multi-axis hydraulic presses and fluid power equipment. Harsh industrial lighting, factory vibrations, and dense analogue dials often delayed fault identification.",
            "The objective of HYDRA-CORE v3.1 was to replace fragmented hardware switches and dials with an intuitive, touch-optimized Human-Machine Interface (HMI) displaying live pressure, flow rate, temperature, and emergency states with zero ambiguity."
        ]),
        (2, "User Research & Factory Operator Inquiry", [
            "Conducted on-site contextual inquiries with 14 machine operators and plant maintenance engineers across multiple shift rotations.",
            "Key Finding 1: Operators need single-glance status recognition from up to 3 meters away under varying glare conditions.",
            "Key Finding 2: Critical alarm states must override routine parameter adjusting with high-contrast visual cues and haptic acknowledgement.",
            "Key Finding 3: Cycle parameter configuration needed to be condensed from 8 physical menus into a single touch workflow."
        ]),
        (3, "Design System & Ergonomic Visual Architecture", [
            "Built a comprehensive Figma component library containing 150+ reusable tokens, dial states, telemetry charts, and modal warnings.",
            "Applied WCAG AAA contrast guidelines specifically tailored for industrial TFT displays and anti-glare touchscreens.",
            "Designed touch target sizes adhering to DIN EN ISO 9241-110 standard (minimum 48x48px hit areas for gloved operator inputs)."
        ]),
        (4, "Validation & Quantitative Business Impact", [
            "35% reduction in operator emergency reaction times during simulated pressure anomaly tests.",
            "100% of operators successfully configured cycle routines without supervisor assistance on day one.",
            "Reduced training onboarding time for new machine operators from 3 weeks to 4 business days."
        ])
    ]
)

# 09: StrataAnalytics
create_styled_pdf(
    "09-strata-analytics.pdf",
    "StrataAnalytics — Enterprise Intelligence Platform",
    "Full-stack web application & interactive data visualization platform engineered with React.js, Python, and MySQL.",
    "COGNIZANT & FULL-STACK · ENTERPRISE PLATFORM",
    "Full-Stack Developer",
    "2022 – 2023",
    "React.js, Python, MySQL, REST APIs, Chart.js",
    [
        (1, "Project Overview & Problem Statement", [
            "Enterprise operations teams were struggling with scattered spreadsheet exports and delayed batch reports. Decision-makers lacked real-time visibility into revenue trajectories, user cohort churn, and regional sales performance.",
            "StrataAnalytics was engineered to unify distributed transactional databases into a real-time, responsive web intelligence dashboard with sub-second querying and dynamic charting."
        ]),
        (2, "Architecture & Technical Implementation", [
            "Frontend: Developed a modular React.js dashboard utilizing custom hooks for state management and SVG/Canvas data visualization.",
            "Backend: Designed lightweight Python data processing microservices to aggregate, filter, and calculate rolling window summary metrics.",
            "Database: Engineered normalized MySQL schemas with indexing on timestamp and categorical dimensions to ensure instant telemetry response."
        ]),
        (3, "User Experience & Data Visualization Design", [
            "Created clean, high-density analytics cards with toggleable time intervals (24h, 7d, 30d, 1y).",
            "Designed accessible color palettes with clear distinction between revenue growth, cost overruns, and projection baselines.",
            "Implemented smooth keyframe transitions when drilling down into granular cohort breakdowns."
        ]),
        (4, "Outcomes & Performance Benchmarks", [
            "Dashboard load times reduced by 60% compared to legacy reporting portal.",
            "Supported concurrent queries across 500,000+ transaction rows with median response latency under 120ms.",
            "Adopted by 4 regional business units for daily revenue forecasting and executive standups."
        ])
    ]
)

# 10: Meditate UX
create_styled_pdf(
    "10-meditate-ux.pdf",
    "Meditate UX — Usability Research & Mobile Showcase",
    "Human Factors International (HFI) certified usability study, heuristic evaluation, and high-fidelity mobile prototype.",
    "CERTIFIED USABILITY ANALYST (HFI) · MOBILE UX",
    "Certified Usability Analyst",
    "2023",
    "Figma, Usability Testing, Heuristic Review, Maze",
    [
        (1, "Context & Research Objective", [
            "Mindfulness and meditation applications often suffer from high initial drop-off due to onboarding fatigue and intrusive paywalls. The study aimed to evaluate user cognitive friction and design a serene, habit-forming experience.",
            "Applied formal Human Factors International (HFI) user-centered design methodologies to uncover subconscious barriers to daily practice."
        ]),
        (2, "Heuristic Evaluation & Usability Testing", [
            "Conducted cognitive walkthroughs and heuristic reviews evaluating navigation hierarchy, feedback loops, and error prevention.",
            "Recruited 12 participants across diverse experience levels for moderated task-based testing sessions.",
            "Identified that over-categorized audio libraries caused decision paralysis during the critical first 60 seconds."
        ]),
        (3, "Design Solutions & Wireframe Prototyping", [
            "Designed a simplified 'One-Tap Calming Session' home widget tailored to the user's immediate emotional state.",
            "Curated soothing color harmonies with soft ambient gradients and minimalist typography (Plus Jakarta Sans).",
            "Constructed interactive Figma prototypes featuring micro-interactions for breathing pacing and session completion."
        ]),
        (4, "Testing Results & Usability Metrics", [
            "Task completion rate increased from 71% (baseline) to 94% on the redesigned prototype.",
            "System Usability Scale (SUS) score improved to 88.5 (Grade A+ usability).",
            "Average time to start a meditation session decreased from 48 seconds to 12 seconds."
        ])
    ]
)

print("All individual PDF files generated successfully!")
