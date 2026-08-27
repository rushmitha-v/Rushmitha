import pymupdf
import os

pdf_dir = r"d:\SOFTWARE\ANTIGRAVITY\Rushmitha_Project\rushmitha\public\case-studies\pdf"
os.makedirs(pdf_dir, exist_ok=True)

def create_styled_pdf(filename, title, subtitle, badge, role, timeline, tools, sections):
    doc = pymupdf.open()
    page = doc.new_page(width=595, height=842)
    
    rect_header = pymupdf.Rect(0, 0, 595, 200)
    page.draw_rect(rect_header, color=(0.04, 0.06, 0.1), fill=(0.04, 0.06, 0.1))
    page.draw_rect(pymupdf.Rect(0, 0, 595, 6), color=(0.54, 0.36, 0.96), fill=(0.54, 0.36, 0.96))
    page.insert_text((40, 45), badge.upper(), fontname="helv", fontsize=10, color=(0.22, 0.74, 0.97))
    page.insert_text((40, 75), title, fontname="helv", fontsize=18, color=(1, 1, 1))
    page.insert_textbox(pymupdf.Rect(40, 88, 555, 140), subtitle, fontname="helv", fontsize=10.5, color=(0.8, 0.85, 0.92))
    
    meta_text = f"Role: {role}   |   Timeline: {timeline}   |   Tools: {tools}"
    page.draw_rect(pymupdf.Rect(40, 150, 555, 185), color=(0.15, 0.2, 0.3), fill=(0.08, 0.12, 0.2))
    page.insert_text((55, 172), meta_text, fontname="helv", fontsize=9.5, color=(0.7, 0.8, 0.95))
    
    curr_y = 225
    curr_page = page
    
    for sec_num, sec_title, sec_paragraphs in sections:
        if curr_y > 700:
            curr_page = doc.new_page(width=595, height=842)
            curr_page.draw_rect(pymupdf.Rect(0, 0, 595, 4), color=(0.54, 0.36, 0.96), fill=(0.54, 0.36, 0.96))
            curr_page.insert_text((40, 35), f"{title} — Case Study Documentation", fontname="helv", fontsize=9, color=(0.5, 0.55, 0.65))
            curr_page.draw_line(pymupdf.Point(40, 45), pymupdf.Point(555, 45), color=(0.85, 0.88, 0.92))
            curr_y = 70
        
        curr_page.draw_rect(pymupdf.Rect(40, curr_y - 14, 62, curr_y + 8), color=(0.54, 0.36, 0.96), fill=(0.54, 0.36, 0.96))
        curr_page.insert_text((46, curr_y), f"0{sec_num}", fontname="helv", fontsize=10, color=(1, 1, 1))
        curr_page.insert_text((72, curr_y), sec_title, fontname="helv", fontsize=13, color=(0.06, 0.09, 0.16))
        curr_y += 24
        
        for p in sec_paragraphs:
            rect_p = pymupdf.Rect(40, curr_y, 555, curr_y + 120)
            res = curr_page.insert_textbox(rect_p, p, fontname="helv", fontsize=9.5, color=(0.2, 0.25, 0.32), lineheight=1.35)
            lines = len(p) // 80 + 1
            curr_y += max(lines * 13 + 8, 28)
            
            if curr_y > 720:
                curr_page = doc.new_page(width=595, height=842)
                curr_page.draw_rect(pymupdf.Rect(0, 0, 595, 4), color=(0.54, 0.36, 0.96), fill=(0.54, 0.36, 0.96))
                curr_page.insert_text((40, 35), f"{title} — Case Study Documentation", fontname="helv", fontsize=9, color=(0.5, 0.55, 0.65))
                curr_page.draw_line(pymupdf.Point(40, 45), pymupdf.Point(555, 45), color=(0.85, 0.88, 0.92))
                curr_y = 70
        
        curr_y += 14
    
    out_path = os.path.join(pdf_dir, filename)
    doc.save(out_path)
    print(f"Created styled PDF: {out_path} ({len(doc)} pages)")

studies = [
    ("app-cs-01-focusmate.pdf", "FocusMate — Productivity App for Remote Workers", "Smart task batching, focus timers & energy tracking designed to combat remote work burnout.", "PRODUCTIVITY & REMOTE WORK · MOBILE + DESKTOP", "Lead Product Designer", "2024", "Figma, React, Usability Testing", [
        (1, "The Problem & User Insight", ["Remote knowledge workers suffer from context switching and digital fatigue. Standard to-do lists fail because they do not account for circadian energy dips or asynchronous collaboration interruptions.", "FocusMate was designed to dynamically schedule tasks according to user energy levels and enforce deep work intervals."]),
        (2, "Key Solutions & Validation", ["Built adaptive Pomodoro rhythms with ambient soundscapes and automated Slack status synchronization.", "Usability tests demonstrated a 42% decrease in self-reported end-of-day fatigue and a 28% increase in completed focus blocks."])
    ]),
    ("app-cs-02-mindful.pdf", "Mindful — Mental Health Tracking & Emotional Support", "Gentle mood check-ins, guided micro-breathing & clinical therapist sync in a privacy-first mobile UX.", "MENTAL HEALTH & WELLNESS · MOBILE UX", "UX Researcher & Designer", "2024", "Figma, HFI Frameworks, Maze", [
        (1, "The Challenge", ["Users experiencing anxiety often find clinical mood tracking overwhelming and intrusive. Traditional psychiatric forms cause clinical fatigue and immediate app abandonment.", "Mindful replaces clinical scales with visceral, non-judgmental somatic check-ins and haptic breathing exercises."]),
        (2, "Outcome & Clinical Impact", ["88% of participants completed daily check-ins for 30 consecutive days.", "Emergency grounding breathing tool reduced acute panic symptom duration by an average of 4.5 minutes."])
    ]),
    ("app-cs-03-bitesphere.pdf", "BiteSphere — Local Food Delivery Marketplace", "Hyper-local restaurant discovery with real-time kitchen camera telemetry & split-bill checkout.", "FOOD DELIVERY & LOGISTICS · MOBILE APP", "Product Designer", "2024", "Figma, Design Tokens, Micro-Interactions", [
        (1, "Problem Statement", ["Hidden fees, erratic delivery ETAs, and complex group ordering cause 65% cart abandonment on conventional food delivery platforms.", "BiteSphere introduces upfront all-inclusive pricing, live kitchen prep stages, and one-tap group bill splitting."]),
        (2, "Business Metrics", ["Checkout completion velocity accelerated from 110 seconds to 34 seconds.", "Group ordering adoption surged by 55% during weekend peak hours."])
    ]),
    ("app-cs-04-fitpulse.pdf", "FitPulse — Movement Habit Architecture", "Glanceable workout logging, forgiving streak mechanics & coach telemetry for busy individuals.", "HEALTH & FITNESS · CROSS-PLATFORM", "UX Engineer", "2024", "Figma, React Native, Chart.js", [
        (1, "Design Philosophy", ["Punitive streak mechanics cause users to quit fitness apps after missing a single day. FitPulse implements 'Forgiving Streaks' and quick 5-minute movement snacks.", "High-contrast glanceable exercise displays allow effortless logging between high-intensity sets."]),
        (2, "Engagement Metrics", ["60-day user retention increased by 31% compared to traditional fitness benchmarks.", "Average logging duration per set decreased to under 4 seconds."])
    ]),
    ("app-cs-05-learnloop.pdf", "LearnLoop — Micro-Learning for Working Professionals", "Bite-sized skill modules, interactive flashcards & verified credentialing engineered for 10-minute commutes.", "EDTECH & PROFESSIONAL LEARNING · MOBILE", "Product Designer", "2024", "Figma, Learning UX, Design System", [
        (1, "Challenge & Hypothesis", ["Working professionals abandon 90% of lengthy video courses due to lack of continuous time blocks.", "LearnLoop decomposes complex engineering and design curricula into 5-minute interactive swipeable flashcards and immediate quiz checkpoints."]),
        (2, "Learning Outcomes", ["Course completion rate climbed from industry average of 12% to 64%.", "Daily active engagement during morning transit hours grew by 82%."])
    ]),
    ("app-cs-06-wanderly.pdf", "Wanderly — Weekend Trip Planner for Busy People", "Curated 48-hour itineraries, offline GPS caching & transparent upfront booking for spontaneous travelers.", "TRAVEL & ADVENTURE · MOBILE UX", "Lead UX Designer", "2024", "Figma, Prototyping, Geolocation UX", [
        (1, "The Problem", ["Planning a short weekend getaway takes an average of 6 hours across 8 browser tabs. Indecision often causes trips to be cancelled entirely.", "Wanderly delivers complete 48-hour flight + hotel + activity bundles bookable in 3 taps with 100% offline navigation."]),
        (2, "Conversion Impact", ["Weekend getaway booking conversion rate reached 14.2% (industry avg ~3%).", "Offline sync prevented 100% of roaming connectivity drop issues in remote destinations."])
    ]),
    ("app-cs-07-pennywise.pdf", "PennyWise — Modern Budgeting for First Salaries", "Affordability radar, automated bill prediction & zero-guilt saving buckets for young professionals.", "FINTECH & PERSONAL FINANCE · MOBILE", "UX Designer & Researcher", "2024", "Figma, Behavioral Economics, Tokens", [
        (1, "Context & Insight", ["Young earners entering the workforce find double-entry bookkeeping spreadsheets intimidating and confusing. They need a simple answer: 'Can I afford this today without risking rent next week?'", "PennyWise creates an instant visual 'Safe-to-Spend' gauge backed by predictive bill deduction."]),
        (2, "Financial Health Metrics", ["Users saved an average of $320 in their first month using automated guilt-free buckets.", "Overdraft incidents dropped by 74% across active beta testers."])
    ]),
    ("app-cs-08-stylehub.pdf", "StyleHub — Fashion Discovery That Fits", "AI-assisted sizing matrix, virtual silhouette matching & 1-tap sustainable returns for online fashion.", "E-COMMERCE & FASHION · WEB + MOBILE", "Digital Product Designer", "2024", "Figma, E-Commerce CRO, User Flows", [
        (1, "The Dilemma", ["Apparel e-commerce suffers from 38% return rates primarily due to sizing discrepancies and fabric mismatch.", "StyleHub integrates real-body dimension mapping and community fabric stretch ratings right into the product page."]),
        (2, "Return Rate Reductions", ["Size-related returns decreased by 41% across 12,000 orders.", "Mobile checkout conversion rate increased by 22% with sticky size-selector bars."])
    ]),
    ("app-cs-09-medicare.pdf", "MediCare+ — Clinic Appointments Without Waiting", "Real-time doctor queue telemetry, instant digital prescriptions & tele-consultation in one tap.", "HEALTHTECH & CLINICAL SYSTEMS · PATIENT & CLINIC", "Senior UX Specialist", "2024", "Figma, Healthcare UX, WCAG AAA", [
        (1, "Healthcare Inefficiency", ["Patients waste an average of 48 minutes in waiting rooms, while doctors suffer from fragmented medical records and delayed triage.", "MediCare+ provides live queue tracking with push alerts telling patients exactly when to leave home."]),
        (2, "Clinical Outcomes", ["Average physical clinic wait room time slashed from 48 minutes to 8 minutes.", "Digital prescription retrieval success rate reached 99.4%."])
    ]),
    ("app-cs-10-waveplay.pdf", "WavePlay — Spatial Audio & Podcast Ecosystem", "Seamless audio switching, hum-to-search discovery & interactive chapter timestamps for audiophiles.", "MEDIA & STREAMING · CROSS-PLATFORM", "Creative Technologist & UX Designer", "2024", "Figma, Audio Telemetry, Micro-Interactions", [
        (1, "Audio Discovery Friction", ["Switching between spoken word podcasts and music playlists disrupts user mental flow and creates cluttered listening queues.", "WavePlay automatically adapts EQ curves and interface density depending on whether the user is listening to talk audio or spatial music."]),
        (2, "Listener Engagement", ["Daily session listening time increased by 38 minutes per active user.", "Hum-to-search voice query successfully resolved 84% of obscured track queries."])
    ])
]

for filename, title, subtitle, badge, role, timeline, tools, sections in studies:
    create_styled_pdf(filename, title, subtitle, badge, role, timeline, tools, sections)

print("All 10 App Case Studies PDFs created successfully!")
