import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, useInView } from 'framer-motion';
import { 
  Sparkles, 
  BookOpen, 
  FileText, 
  Download, 
  ExternalLink, 
  Play, 
  CheckCircle2, 
  Eye, 
  X,
  Layers,
  Code2,
  Terminal,
  Cpu,
  BookmarkCheck,
  Smartphone,
  AppWindow,
  Compass,
  Box
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }
});

function CountUp({ end, suffix = '', duration = 1.5 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf, start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      setN(Math.round(end * p));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function Gauge({ value, unit, color, label }) {
  const r = 32;
  const circ = 2 * Math.PI * r;
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ position: 'relative', width: '82px', height: '82px', margin: '0 auto 8px' }}>
        <svg width="82" height="82" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="41" cy="41" r={r} fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="7" />
          <motion.circle
            cx="41" cy="41" r={r} fill="none" stroke={color} strokeWidth="7" strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ * (1 - value / 100) }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: '#f1f5f9' }}>
          {value}<span style={{ fontSize: '0.6rem', marginLeft: '1px' }}>{unit}</span>
        </div>
      </div>
      <div style={{ fontSize: '0.7rem', color: '#7c8aa0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
    </div>
  );
}

export default function CaseStudySection() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all'); // 'all', 'figma-ux', 'app-cs', 'industrial', 'demos'
  const [modalViewMode, setModalViewMode] = useState('html'); // 'html', 'pdf', 'figma'
  const { triggerConfetti } = useTheme();

  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCase]);

  const figmaEmbedUrl = "https://embed.figma.com/design/gLSdZYnvOQsSF4d8pKYrt4/Rushmitha-Varshini-%E2%80%94-Projects?node-id=41-229&embed-host=share";
  const figmaProtoUrl = "https://www.figma.com/proto/gLSdZYnvOQsSF4d8pKYrt4/Rushmitha-Varshini-%E2%80%94-Projects?node-id=41-229&t=UjdJPDZ7aVl0iAOd-1";
  const masterPdfUrl = "/case-studies/pdf/Rushmitha-UX-Case-Studies.pdf";

  // Comprehensive Case Studies Catalog (21 Items)
  const allCaseStudies = [
    // -------------------------------------------------------------
    // Category 1: Figma UX Case Studies (7 Projects)
    // -------------------------------------------------------------
    {
      id: 'finflow',
      num: '01',
      group: 'figma-ux',
      title: 'FinFlow — Mobile Banking & Smart Wealth',
      category: 'Fintech · Mobile UX',
      tagColor: '#3E63F0',
      badgeColor: '#38bdf8',
      image: '/figma-exports/01-finflow-dashboard.png',
      htmlUrl: '/case-studies/01-finflow.html',
      pdfUrl: '/case-studies/pdf/01-finflow.pdf',
      pdfName: '01-finflow.pdf',
      figmaProto: figmaProtoUrl,
      summary: 'Money management in seconds, not menus — clarity, speed and confidence for everyday mobile banking.',
      highlights: [
        'Transfer completion time reduced from 41s to under 18s in benchmark usability tests.',
        'Surface critical balance and spending trends above the fold to cut user anxiety.',
        'Multi-step security confirmation flows with clear recipient verification.'
      ],
      tags: ['Fintech', 'Mobile UX', 'User Research', 'Figma Prototyping', 'Usability Testing']
    },
    {
      id: 'verde',
      num: '02',
      group: 'figma-ux',
      title: 'Verdé — Sustainable Plant E-Commerce',
      category: 'E-commerce · Web + Mobile',
      tagColor: '#2E7D5B',
      badgeColor: '#10b981',
      image: '/figma-exports/03-verde-listing.png',
      htmlUrl: '/case-studies/02-verde.html',
      pdfUrl: '/case-studies/pdf/02-verde.pdf',
      pdfName: '02-verde.pdf',
      figmaProto: figmaProtoUrl,
      summary: 'Shopping plants sustainably, with confidence — matching people to the ideal plant for their space and light levels.',
      highlights: [
        'Care requirement filter matrix reducing plant return rates by 28%.',
        'Sticky cart and size selector optimized for one-handed mobile purchasing.',
        'Comprehensive responsive desktop listing with structured review filters.'
      ],
      tags: ['E-Commerce', 'Responsive Web', 'Design System', 'Figma', 'A/B Testing']
    },
    {
      id: 'pulse',
      num: '03',
      group: 'figma-ux',
      title: 'Pulse — Habit-Forming Movement & Fitness',
      category: 'Health & Fitness · Mobile',
      tagColor: '#F0574A',
      badgeColor: '#f43f5e',
      image: '/figma-exports/05-pulse-dashboard.png',
      htmlUrl: '/case-studies/03-pulse.html',
      pdfUrl: '/case-studies/pdf/03-pulse.pdf',
      pdfName: '03-pulse.pdf',
      figmaProto: figmaProtoUrl,
      summary: 'Turning daily movement into a sustainable habit — glanceable progress, forgiving streaks & motivating workouts.',
      highlights: [
        'Cognitive load reduction during active workout tracking with high-contrast UI.',
        'Forgiving streak architecture boosting 30-day user retention by 22%.',
        'Live heart-rate telemetry and recovery status dashboard.'
      ],
      tags: ['Healthtech', 'Mobile App', 'Behavioral UX', 'Micro-Interactions', 'Figma']
    },
    {
      id: 'nimbus',
      num: '04',
      group: 'figma-ux',
      title: 'Nimbus — Enterprise Analytics & KPI Suite',
      category: 'SaaS · Analytics & Web',
      tagColor: '#6366F1',
      badgeColor: '#8b5cf6',
      image: '/figma-exports/07-nimbus-desktop.png',
      htmlUrl: '/case-studies/04-nimbus.html',
      pdfUrl: '/case-studies/pdf/04-nimbus.pdf',
      pdfName: '04-nimbus.pdf',
      figmaProto: figmaProtoUrl,
      summary: 'Analytics that answer questions rather than overwhelming data — extract real signals in seconds without spreadsheets.',
      highlights: [
        'Modular dashboard widget system supporting rapid custom metric composition.',
        'Cross-platform companion layout on mobile for on-the-go revenue tracking.',
        'Accessible color-blind safe telemetry charts and high-density tables.'
      ],
      tags: ['SaaS Dashboard', 'Data Visualization', 'Enterprise UX', 'Figma Tokens']
    },
    {
      id: 'wanderlust',
      num: '05',
      group: 'figma-ux',
      title: 'Wanderlust — Effortless Travel Discovery',
      category: 'Travel & Booking · Mobile',
      tagColor: '#0EA5E9',
      badgeColor: '#06b6d4',
      image: '/figma-exports/09-wanderlust-explore.png',
      htmlUrl: '/case-studies/05-wanderlust.html',
      pdfUrl: '/case-studies/pdf/05-wanderlust.pdf',
      pdfName: '05-wanderlust.pdf',
      figmaProto: figmaProtoUrl,
      summary: 'From daydream to booked in a few taps — inspiring discovery paired with transparent, frictionless hotel booking.',
      highlights: [
        'Total price transparency upfront eliminating checkout abandonment drops.',
        'Visual moodboard discovery engine for serendipitous itinerary building.',
        'Seamless 3-tap checkout with integrated passport/loyalty autofill.'
      ],
      tags: ['Traveltech', 'Mobile Design', 'User Flows', 'Conversion Optimization']
    },
    {
      id: 'nourish',
      num: '06',
      group: 'figma-ux',
      title: 'Nourish — Frictionless Food Delivery',
      category: 'Food Delivery · Mobile',
      tagColor: '#F0592B',
      badgeColor: '#f97316',
      image: '/figma-exports/11-nourish-home.png',
      htmlUrl: '/case-studies/06-nourish.html',
      pdfUrl: '/case-studies/pdf/06-nourish.pdf',
      pdfName: '06-nourish.pdf',
      figmaProto: figmaProtoUrl,
      summary: 'From craving to checkout without chaos — rapid restaurant discovery, live tracking, and frictionless cart editing.',
      highlights: [
        'Visual ingredient customizer reducing order modification mistakes by 40%.',
        'Live courier map with real-time ETA confidence intervals.',
        'Group ordering flow with split-bill calculation in a single tap.'
      ],
      tags: ['FoodTech', 'Mobile UX', 'Micro-Interactions', 'Prototyping']
    },
    {
      id: 'lumina',
      num: '07',
      group: 'figma-ux',
      title: 'Lumina — Adaptive E-Learning Experience',
      category: 'E-learning · Web + Mobile',
      tagColor: '#5B5BF5',
      badgeColor: '#a855f7',
      image: '/figma-exports/13-lumina-desktop.png',
      htmlUrl: '/case-studies/07-lumina.html',
      pdfUrl: '/case-studies/pdf/07-lumina.pdf',
      pdfName: '07-lumina.pdf',
      figmaProto: figmaProtoUrl,
      summary: 'Helping learners actually finish their courses — effortless resume, visible bite-sized progress & motivating milestones.',
      highlights: [
        'One-click "Resume Lesson" hero card boosting daily course engagement by 34%.',
        'Interactive code sandbox & quiz checkpoint integration.',
        'Dynamic weekly goal tracker with streak reward animations.'
      ],
      tags: ['EdTech', 'Learning Systems', 'Design Tokens', 'Web & Mobile']
    },

    // -------------------------------------------------------------
    // Category 2: Digital Product & Mobile Apps (10 Case Studies)
    // -------------------------------------------------------------
    {
      id: 'app-focusmate',
      num: 'A1',
      group: 'app-cs',
      title: 'FocusMate — Productivity App for Remote Workers',
      category: 'Productivity & Remote Work · Cross-Platform',
      tagColor: '#8b5cf6',
      badgeColor: '#c4b5fd',
      image: '/figma-exports/07-nimbus-desktop.png',
      htmlUrl: '/app-case-studies/Case-Study-1-ProductivityApp/HTML-Designs/index.html',
      pdfUrl: '/case-studies/pdf/app-cs-01-focusmate.pdf',
      pdfName: 'app-cs-01-focusmate.pdf',
      figmaProto: null,
      summary: 'Smart task batching, circadian energy scheduling, and automated ambient focus intervals designed to combat remote work burnout.',
      highlights: [
        '42% decrease in self-reported end-of-day cognitive fatigue in user trials.',
        'Adaptive Pomodoro rhythms with automated Slack focus status sync.',
        'Single-key task capture minimizing context switching.'
      ],
      tags: ['Productivity', 'Remote Work', 'Energy Scheduling', 'Figma', 'React']
    },
    {
      id: 'app-mindful',
      num: 'A2',
      group: 'app-cs',
      title: 'Mindful — Mental Health & Emotional Support',
      category: 'Mental Health & Wellness · Mobile UX',
      tagColor: '#10b981',
      badgeColor: '#6ee7b7',
      image: '/projects/usability_study.jpg',
      htmlUrl: '/app-case-studies/Case-Study-2-MentalHealth/HTML-Designs/glassmorphism-checkin.html',
      pdfUrl: '/case-studies/pdf/app-cs-02-mindful.pdf',
      pdfName: 'app-cs-02-mindful.pdf',
      figmaProto: null,
      summary: 'Visceral non-judgmental mood check-ins, emergency somatic breathing guides, and encrypted therapist synchronization.',
      highlights: [
        '88% 30-day retention rate for daily somatic check-in routines.',
        'Emergency grounding haptic breathing tool reducing acute panic symptoms.',
        'Privacy-first biometric lock on personal journaling entries.'
      ],
      tags: ['Mental Health', 'HFI Frameworks', 'Haptic UX', 'Privacy', 'Wellness']
    },
    {
      id: 'app-bitesphere',
      num: 'A3',
      group: 'app-cs',
      title: 'BiteSphere — Local Food Delivery Marketplace',
      category: 'Food Delivery & Logistics · Mobile',
      tagColor: '#f97316',
      badgeColor: '#fdba74',
      image: '/figma-exports/11-nourish-home.png',
      htmlUrl: '/app-case-studies/Case-Study-3-FoodDelivery/HTML-Designs/index.html',
      pdfUrl: '/case-studies/pdf/app-cs-03-bitesphere.pdf',
      pdfName: 'app-cs-03-bitesphere.pdf',
      figmaProto: null,
      summary: 'Hyper-local restaurant discovery with transparent all-inclusive pricing, live kitchen stage tracking, and one-tap group bill splitting.',
      highlights: [
        'Checkout completion time reduced from 110s to 34s with upfront pricing.',
        'Group order link generation with real-time individual cart customization.',
        'Live driver telemetry with route weather adjustment.'
      ],
      tags: ['FoodTech', 'Marketplace', 'Group Ordering', 'Logistics', 'Mobile UX']
    },
    {
      id: 'app-fitpulse',
      num: 'A4',
      group: 'app-cs',
      title: 'FitPulse — Movement Habit Architecture',
      category: 'Health & Fitness · Cross-Platform',
      tagColor: '#ef4444',
      badgeColor: '#fca5a5',
      image: '/figma-exports/05-pulse-dashboard.png',
      htmlUrl: '/app-case-studies/Case-Study-4-FitnessApp/HTML-Designs/fitness-dashboard.html',
      pdfUrl: '/case-studies/pdf/app-cs-04-fitpulse.pdf',
      pdfName: 'app-cs-04-fitpulse.pdf',
      figmaProto: null,
      summary: 'Forgiving streak architecture, glanceable workout logging, and coach telemetry for sustainable habit formation.',
      highlights: [
        '60-day user retention increased by 31% with forgiving streak mechanics.',
        'Average set logging time under 4 seconds between high-intensity sets.',
        'Cross-platform sync with Apple Health & Google Fit.'
      ],
      tags: ['Fitness', 'Habit Loops', 'Telemetry', 'React Native', 'Chart.js']
    },
    {
      id: 'app-learnloop',
      num: 'A5',
      group: 'app-cs',
      title: 'LearnLoop — Micro-Learning Platform',
      category: 'EdTech & Professional Learning · Mobile',
      tagColor: '#6366f1',
      badgeColor: '#a5b4fc',
      image: '/figma-exports/13-lumina-desktop.png',
      htmlUrl: '/app-case-studies/Case-Study-5-ELearning/HTML-Designs/flashcards.html',
      pdfUrl: '/case-studies/pdf/app-cs-05-learnloop.pdf',
      pdfName: 'app-cs-05-learnloop.pdf',
      figmaProto: null,
      summary: 'Bite-sized skill modules, interactive swipeable flashcards, and verified credentialing engineered for 10-minute commutes.',
      highlights: [
        'Course completion rate increased from industry average of 12% to 64%.',
        '82% surge in daily engagement during morning transit hours.',
        'Instant quiz feedback with automated spaced repetition algorithms.'
      ],
      tags: ['EdTech', 'Spaced Repetition', 'Gamification', 'Mobile UX', 'Micro-Learning']
    },
    {
      id: 'app-wanderly',
      num: 'A6',
      group: 'app-cs',
      title: 'Wanderly — Weekend Trip Planner for Busy People',
      category: 'Travel & Booking · Mobile UX',
      tagColor: '#0ea5e9',
      badgeColor: '#7dd3fc',
      image: '/figma-exports/09-wanderlust-explore.png',
      htmlUrl: '/app-case-studies/Case-Study-6-TravelApp/HTML-Designs/explore-weekends.html',
      pdfUrl: '/case-studies/pdf/app-cs-06-wanderly.pdf',
      pdfName: 'app-cs-06-wanderly.pdf',
      figmaProto: null,
      summary: 'Curated 48-hour flight + hotel + activity bundles bookable in 3 taps with 100% offline GPS cached navigation.',
      highlights: [
        'Weekend getaway booking conversion rate reached 14.2% (vs 3% industry standard).',
        'Zero-connection offline itinerary viewer preventing travel anxiety.',
        'Collaborative trip board allowing friends to vote on destinations.'
      ],
      tags: ['Travel', 'Offline UX', 'Conversion Optimization', 'Trip Planning']
    },
    {
      id: 'app-pennywise',
      num: 'A7',
      group: 'app-cs',
      title: 'PennyWise — Modern Budgeting for First Salaries',
      category: 'Fintech & Personal Finance · Mobile',
      tagColor: '#3b82f6',
      badgeColor: '#93c5fd',
      image: '/figma-exports/01-finflow-dashboard.png',
      htmlUrl: '/app-case-studies/Case-Study-7-FinanceApp/HTML-Designs/bill-radar.html',
      pdfUrl: '/case-studies/pdf/app-cs-07-pennywise.pdf',
      pdfName: 'app-cs-07-pennywise.pdf',
      figmaProto: null,
      summary: 'Predictive bill radar, instant visual Safe-to-Spend gauge, and guilt-free automated saving buckets for young earners.',
      highlights: [
        'Users saved an average of $320 in their first month with automated buckets.',
        '74% reduction in overdraft occurrences across active beta cohort.',
        'Real-time affordability meter answering questions before major purchases.'
      ],
      tags: ['Fintech', 'Behavioral Economics', 'Predictive Bills', 'Personal Finance']
    },
    {
      id: 'app-stylehub',
      num: 'A8',
      group: 'app-cs',
      title: 'StyleHub — Fashion Discovery That Fits',
      category: 'E-Commerce & Fashion · Web + Mobile',
      tagColor: '#ec4899',
      badgeColor: '#f472b6',
      image: '/figma-exports/03-verde-listing.png',
      htmlUrl: '/app-case-studies/Case-Study-8-FashionEcom/HTML-Designs/fit-first-product.html',
      pdfUrl: '/case-studies/pdf/app-cs-08-stylehub.pdf',
      pdfName: 'app-cs-08-stylehub.pdf',
      figmaProto: null,
      summary: 'Body-silhouette mapping, crowd-sourced fabric stretch ratings, and 1-tap sustainable return workflows.',
      highlights: [
        'Size-related return rate slashed by 41% across 12,000 apparel orders.',
        'Mobile checkout conversion increased by 22% with sticky size-selector bars.',
        'Interactive fabric opacity and drape simulation previews.'
      ],
      tags: ['E-Commerce', 'FashionTech', 'Size Matrix', 'CRO', 'Mobile UX']
    },
    {
      id: 'app-medicare',
      num: 'A9',
      group: 'app-cs',
      title: 'MediCare+ — Doctor Appointments Without Waiting',
      category: 'Healthtech & Clinical Systems · Patient & Clinic',
      tagColor: '#14b8a6',
      badgeColor: '#5eead4',
      image: '/figma-exports/06-pulse-workout.png',
      htmlUrl: '/app-case-studies/Case-Study-9-HealthBooking/HTML-Designs/health-profile.html',
      pdfUrl: '/case-studies/pdf/app-cs-09-medicare.pdf',
      pdfName: 'app-cs-09-medicare.pdf',
      figmaProto: null,
      summary: 'Real-time clinic queue telemetry, instant e-prescriptions, and one-tap tele-consultations for patients and doctors.',
      highlights: [
        'Average physical waiting room time reduced from 48 mins to 8 mins.',
        '99.4% success rate for digital prescription transmission to local pharmacies.',
        'Accessible high-contrast triage view compliant with WCAG AAA.'
      ],
      tags: ['Healthcare', 'Queue Telemetry', 'E-Prescriptions', 'Clinical UX']
    },
    {
      id: 'app-waveplay',
      num: 'A10',
      group: 'app-cs',
      title: 'WavePlay — Spatial Audio & Podcast Ecosystem',
      category: 'Media & Streaming · Cross-Platform',
      tagColor: '#a855f7',
      badgeColor: '#d8b4fe',
      image: '/projects/scrollytelling_preview.webp',
      htmlUrl: '/app-case-studies/Case-Study-10-MusicApp/HTML-Designs/home-feed.html',
      pdfUrl: '/case-studies/pdf/app-cs-10-waveplay.pdf',
      pdfName: 'app-cs-10-waveplay.pdf',
      figmaProto: null,
      summary: 'Adaptive EQ curve switching, hum-to-search audio recognition, and interactive chapter timestamps for audiophiles.',
      highlights: [
        'Daily session listening time increased by 38 minutes per active listener.',
        'Hum-to-search query resolved 84% of obscured track searches.',
        'Dynamic wave visualization responding to ambient decibel levels.'
      ],
      tags: ['Audio UX', 'Streaming', 'Hum-to-Search', 'Micro-Interactions']
    },

    // -------------------------------------------------------------
    // Category 3: Industrial & Full-Stack Systems (4 Projects)
    // -------------------------------------------------------------
    {
      id: 'hydra-core',
      num: 'HMI',
      group: 'industrial',
      title: 'HYDRA-CORE v3.1: Industrial HMI & Telemetry',
      category: 'Industrial UX / Engineering',
      tagColor: '#06b6d4',
      badgeColor: '#06b6d4',
      image: '/projects/hydraulics_hmi.jpg',
      htmlUrl: '/industrial-case-studies/case-study-1.html',
      pdfUrl: '/case-studies/pdf/08-hydra-core.pdf',
      pdfName: '08-hydra-core.pdf',
      figmaProto: null,
      summary: 'High-precision operator control interface designed for heavy industrial hydraulic machinery, telemetry monitoring, and safety operations at GEE KAY VEE HYDRAULICS.',
      highlights: [
        'Designed touch-optimized layouts adhering to industrial plant lighting and glare.',
        'Created emergency alert indicators reducing operator response times by 35%.',
        'Built a scalable design system in Figma with 150+ reusable components and states.'
      ],
      tags: ['Industrial HMI', 'Figma Tokens', 'Ergonomics', 'Design System', 'Telemetry']
    },
    {
      id: 'strata-analytics',
      num: 'ENG',
      group: 'industrial',
      title: 'StrataAnalytics: Enterprise Intelligence Platform',
      category: 'Full-Stack Web & Data Visualization',
      tagColor: '#8b5cf6',
      badgeColor: '#8b5cf6',
      image: '/projects/analytics_dashboard.jpg',
      htmlUrl: '/industrial-case-studies/case-study-2.html',
      pdfUrl: '/case-studies/pdf/09-strata-analytics.pdf',
      pdfName: '09-strata-analytics.pdf',
      figmaProto: null,
      summary: 'Enterprise data visualization suite engineered with React.js and Python at Cognizant. Provides real-time revenue analytics and automated database querying.',
      highlights: [
        'Implemented accessible React dashboard components with smooth keyframe animations.',
        'Integrated Python data processing pipelines to generate automated summary metrics.',
        'Structured optimized MySQL database schemas supporting rapid querying.'
      ],
      tags: ['React.js', 'Python', 'MySQL', 'REST APIs', 'Data Visualization']
    },
    {
      id: 'meditate-ux',
      num: 'HFI',
      group: 'industrial',
      title: 'Meditate UX: Usability Research & Mobile Showcase',
      category: 'Certified Usability Analyst (HFI)',
      tagColor: '#10b981',
      badgeColor: '#10b981',
      image: '/projects/usability_study.jpg',
      htmlUrl: '/industrial-case-studies/case-study-3.html',
      pdfUrl: '/case-studies/pdf/10-meditate-ux.pdf',
      pdfName: '10-meditate-ux.pdf',
      figmaProto: null,
      summary: 'Complete user experience redesign backed by formal usability testing and cognitive walkthroughs based on Human Factors International (HFI) heuristics.',
      highlights: [
        'Conducted usability testing sessions achieving a 94% task completion rate.',
        'Created design guidelines covering typography, contrast ratios, and dark mode palette.',
        'Delivered high-fidelity Figma prototypes with micro-interactions and transitions.'
      ],
      tags: ['Usability Testing', 'Figma', 'HFI Heuristics', 'Design System']
    },
    {
      id: 'scrollytelling-cs',
      num: 'CANVAS',
      group: 'industrial',
      title: 'Scrollytelling Portfolio — 60FPS Canvas Animation',
      category: 'Creative Development · Canvas & React',
      tagColor: '#ec4899',
      badgeColor: '#f472b6',
      image: '/projects/scrollytelling_preview.webp',
      htmlUrl: '/industrial-case-studies/case-study-4.html',
      pdfUrl: '/case-studies/pdf/11-scrollytelling-portfolio.pdf',
      pdfName: '11-scrollytelling-portfolio.pdf',
      figmaProto: null,
      summary: 'Awwwards-inspired scrollytelling portfolio featuring HTML5 Canvas frame scrubbing, parallax typography overlays, and dual dark/light design tokens.',
      highlights: [
        '60 FPS constant frame rate during rapid inertial scrolling with 75 WebP frames.',
        'Initial bundle size under 85KB gzipped with sub-3-second load times on 3G.',
        'Full WCAG AA compliance with dynamic contrast adjustment across theme toggles.'
      ],
      tags: ['HTML5 Canvas', 'React 19', 'Vite', 'Framer Motion', 'Performance']
    },

    // -------------------------------------------------------------
    // Category 4: Interactive Design System Lab
    // -------------------------------------------------------------
    {
      id: 'design-system-lab',
      num: 'LAB',
      group: 'demos',
      title: 'Master Design System & Interactive Component Lab',
      category: 'Design Systems & Component Library',
      tagColor: '#38bdf8',
      badgeColor: '#38bdf8',
      image: '/projects/analytics_dashboard.jpg',
      htmlUrl: '/industrial-case-studies/demos/design-system.html',
      pdfUrl: '/case-studies/pdf/12-design-system-spec.pdf',
      pdfName: '12-design-system-spec.pdf',
      figmaProto: null,
      summary: 'Interactive Storybook-style design system explorer showcasing 523+ live components, typography scales, color matrices, and micro-interactions.',
      highlights: [
        '523+ production-grade component states, token mappings, and live previews.',
        'Accessible color-blind safe telemetry charts and high-density tables.',
        'Dynamic interactive state controls and code snippet generators.'
      ],
      tags: ['Design System', 'Tokens', 'Components', 'Storybook', 'Figma']
    }
  ];

  const filteredCaseStudies = allCaseStudies.filter(item => {
    if (activeCategory === 'all') return true;
    return item.group === activeCategory;
  });

  const openModal = (study, mode = 'html') => {
    setSelectedCase(study);
    setModalViewMode(mode);
  };

  // Industrial HMI Metadata
  const hmiMeta = ['Role · Designing Engineer', 'Client · GEE KAY VEE Hydraulics', 'Timeline · 2023–2025', 'Tools · Figma · Design Systems'];
  const hmiSteps = [
    { n: '01', h: 'Research', p: 'Contextual inquiry & usability reviews with plant operators.' },
    { n: '02', h: 'Wireframe', p: 'Task flows for diagnostics & cycle configuration.' },
    { n: '03', h: 'Design System', p: '150+ reusable Figma components, states & tokens.' },
    { n: '04', h: 'Validation', p: 'Testing against glare, lighting & response-time targets.' }
  ];
  const hmiMetrics = [
    { end: 35, suffix: '%', label: 'Faster operator response' },
    { end: 150, suffix: '+', label: 'Reusable components' },
    { end: 100, suffix: '%', label: 'Touch-optimized layouts' },
    { end: 3, suffix: '', label: 'Machine interfaces shipped' }
  ];

  return (
    <section id="case-study" className="portfolio-section">
      <div className="section-badge" style={{ background: 'rgba(6,182,212,0.14)', borderColor: 'rgba(6,182,212,0.3)', color: 'var(--color-secondary)' }}>
        <Sparkles size={14} />
        UX Research &amp; Product Case Studies
      </div>
      <h2 className="section-title">All UX &amp; Product Case Studies</h2>
      <p className="section-subtitle">
        Explore 21 end-to-end product design case studies across fintech, health, SaaS, travel, e-commerce, and industrial telemetry systems.
      </p>

      {/* ===================================================================== */}
      {/* Top Banner: Master UX Case Studies PDF Download & Portals             */}
      {/* ===================================================================== */}
      <div 
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '1200px',
          padding: '24px 28px',
          marginBottom: '32px',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.14) 0%, rgba(6, 182, 212, 0.1) 100%)',
          border: '1px solid rgba(139, 92, 246, 0.35)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '18px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            flexShrink: 0,
            boxShadow: '0 4px 18px rgba(139, 92, 246, 0.4)'
          }}>
            <BookOpen size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 4px 0' }}>
              Complete UX &amp; Product Case Studies Dossier
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>
              Full documentation covering user research, personas, wireframes, prototypes, and testing outcomes in a single consolidated PDF.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <a
            href={masterPdfUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => triggerConfetti({ particleCount: 75, spread: 80 })}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, var(--color-primary), #6366f1)',
              color: '#ffffff',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(139, 92, 246, 0.35)',
              transition: 'transform 0.2s ease'
            }}
          >
            <Download size={15} />
            <span>Download Master PDF (7.8MB)</span>
          </a>

          <a
            href="/app-case-studies/Portfolio-Site.html"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ padding: '10px 16px', fontSize: '0.85rem' }}
          >
            <span>Open App Case Studies Hub</span>
            <ExternalLink size={14} />
          </a>

          <a
            href="/industrial-case-studies/index.html"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ padding: '10px 16px', fontSize: '0.85rem' }}
          >
            <span>Industrial Engineering Hub</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* Category Filter Tabs                                                  */}
      {/* ===================================================================== */}
      <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        marginBottom: '28px',
        maxWidth: '1200px',
        width: '100%',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        paddingBottom: '6px'
      }}>
        {[
          { id: 'all', label: `All Case Studies (${allCaseStudies.length})` },
          { id: 'figma-ux', label: 'Figma UX Projects (7)' },
          { id: 'app-cs', label: 'Digital Product & Mobile Apps (10)' },
          { id: 'industrial', label: 'Industrial & Full-Stack (4)' },
          { id: 'demos', label: 'Design System Lab' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            style={{
              padding: '7px 16px',
              borderRadius: '9999px',
              background: activeCategory === tab.id ? 'linear-gradient(135deg, var(--color-primary), #6366f1)' : 'rgba(148,163,184,0.08)',
              border: activeCategory === tab.id ? '1px solid rgba(255,255,255,0.2)' : '1px solid var(--border-subtle)',
              color: activeCategory === tab.id ? '#ffffff' : 'var(--text-muted)',
              fontSize: '0.84rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'all 0.2s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ===================================================================== */}
      {/* Case Studies Grid (One by One High-Res Cards with Exact PDFs)         */}
      {/* ===================================================================== */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '26px',
        maxWidth: '1200px',
        width: '100%',
        marginBottom: '60px'
      }}>
        {filteredCaseStudies.map((item) => (
          <div 
            key={item.id}
            className="glass-card tilt-card"
            style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              borderTop: `3px solid ${item.tagColor}`,
              padding: 0
            }}
            onClick={() => openModal(item, 'html')}
          >
            {/* Visual Cover Header */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '180px',
              overflow: 'hidden',
              background: `linear-gradient(135deg, ${item.tagColor}33, rgba(14,18,27,0.95))`
            }}>
              <img
                src={item.image}
                alt={`${item.title} preview`}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
              />
              
              {/* Floating Badges */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  color: '#ffffff',
                  background: item.tagColor,
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  letterSpacing: '0.06em',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.5)'
                }}>
                  {item.num}
                </span>

                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  background: 'rgba(7, 9, 14, 0.75)',
                  backdropFilter: 'blur(6px)',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255,255,255,0.15)'
                }}>
                  {item.category}
                </span>
              </div>
            </div>

            {/* Card Content Body */}
            <div style={{ padding: '20px 22px 16px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 8px 0', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '14px' }}>
                  {item.summary}
                </p>

                {/* Key Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '16px' }}>
                  {item.highlights.slice(0, 2).map((hl, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                      <CheckCircle2 size={13} style={{ color: item.tagColor, flexShrink: 0, marginTop: '2px' }} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag-badge" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Interactive Action Bar */}
            <div style={{
              padding: '12px 20px',
              background: 'rgba(0, 0, 0, 0.22)',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px'
            }}>
              <button
                className="btn-primary"
                style={{
                  fontSize: '0.8rem',
                  padding: '7px 12px',
                  borderRadius: '8px',
                  flex: 1,
                  justifyContent: 'center'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(item, 'html');
                }}
              >
                <Eye size={13} />
                <span>Read Case Study</span>
              </button>

              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-pdf-badge"
                title={`Open official ${item.pdfName}`}
                onClick={(e) => e.stopPropagation()}
              >
                <FileText size={13} />
                <span>PDF</span>
              </a>

              {item.figmaProto && (
                <a
                  href={item.figmaProto}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-figma-badge"
                  title="Launch Prototype in Figma"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Play size={11} fill="currentColor" />
                  <span>Figma</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ===================================================================== */}
      {/* Featured UX & Technical Articles Hub                                 */}
      {/* ===================================================================== */}
      <div 
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '1200px',
          padding: '28px',
          marginBottom: '50px',
          border: '1px solid rgba(139, 92, 246, 0.35)',
          background: 'linear-gradient(145deg, rgba(14, 18, 27, 0.95), rgba(7, 9, 14, 0.98))'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '3px 10px',
              borderRadius: '9999px',
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.35)',
              color: '#c4b5fd',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '6px'
            }}>
              <BookmarkCheck size={12} />
              <span>Engineering &amp; UX Publications</span>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
              Design Engineering &amp; UX Research Articles
            </h3>
          </div>

          <a
            href="/industrial-case-studies/blog/index.html"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.84rem' }}
          >
            <span>Read All Articles</span>
            <ExternalLink size={14} />
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {[
            {
              title: "Accessibility Matters in Enterprise Design",
              desc: "WCAG AAA compliance in high-density enterprise software and industrial touchscreens.",
              url: "/industrial-case-studies/blog/accessibility-matters.html",
              tag: "Accessibility · Enterprise"
            },
            {
              title: "Industrial UX Lessons from the Factory Floor",
              desc: "Designing touch interfaces for heavy hydraulic machinery operators under extreme conditions.",
              url: "/industrial-case-studies/blog/industrial-ux-lessons.html",
              tag: "Industrial HMI · Safety"
            },
            {
              title: "Scrollytelling Deep Dive: 60FPS Canvas Animation",
              desc: "Technical deep-dive into HTML5 canvas frame scrubbing, requestAnimationFrame loops, and asset streaming.",
              url: "/industrial-case-studies/blog/scrollytelling-deep-dive.html",
              tag: "Canvas · Performance"
            }
          ].map((art, aIdx) => (
            <a
              key={aIdx}
              href={art.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'block',
                padding: '18px 20px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <span style={{ fontSize: '0.72rem', color: '#8b5cf6', fontWeight: 700, textTransform: 'uppercase' }}>
                {art.tag}
              </span>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', margin: '6px 0 8px 0', lineHeight: 1.3 }}>
                {art.title}
              </h4>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                {art.desc}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* Industrial HMI Console Deep Dive (HYDRA-CORE v3.1)                     */}
      {/* ===================================================================== */}
      <div style={{ width: '100%', maxWidth: '1200px', marginTop: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Industrial Telemetry Deep Dive
          </span>
        </div>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
          HYDRA-CORE v3.1 — High-Precision Operator HMI
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px', maxWidth: '800px' }}>
          Real-time operator interface designed for heavy hydraulic presses and plant equipment at GEE KAY VEE HYDRAULICS.
        </p>

        {/* Meta chips */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
          {hmiMeta.map((m, i) => <span key={i} className="tag-badge">{m}</span>)}
        </div>

        {/* Challenge / Approach + HMI console */}
        <div className="cs-grid" style={{ marginBottom: '30px' }}>
          <motion.div className="glass-card" style={{ padding: '28px' }} {...reveal(0)}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '9px' }}>
              <span style={{ width: '4px', height: '18px', borderRadius: '2px', background: 'linear-gradient(var(--color-primary), var(--color-secondary))' }} />
              The Challenge
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
              Plant operators needed to read complex pressure, flow-rate and temperature telemetry at a glance — under harsh industrial lighting and glare, with zero tolerance for input errors.
            </p>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '9px' }}>
              <span style={{ width: '4px', height: '18px', borderRadius: '2px', background: 'linear-gradient(var(--color-primary), var(--color-secondary))' }} />
              The Approach
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Contextual inquiry with operators, touch-optimized ergonomic layouts, high-contrast emergency states, and a scalable Figma design system of 150+ reusable components.
            </p>
          </motion.div>

          {/* HMI Console */}
          <motion.div style={{ padding: '22px', borderRadius: '18px', background: 'linear-gradient(160deg, #0d1420, #0a0f18)', border: '1px solid rgba(6,182,212,0.22)', boxShadow: '0 20px 50px -20px rgba(0,0,0,0.6)' }} {...reveal(0.12)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', letterSpacing: '0.1em', color: '#22d3ee', textTransform: 'uppercase' }}>HYDRA-CORE · Operator Console</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '0.68rem', color: '#4ade80', background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.35)', padding: '3px 10px', borderRadius: '9999px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
                SYSTEM NOMINAL
              </span>
            </div>
            <div className="cs-gauges" style={{ marginBottom: '16px' }}>
              <Gauge value={72} unit="bar" color="#38bdf8" label="Pressure" />
              <Gauge value={64} unit="L/m" color="#a78bfa" label="Flow Rate" />
              <Gauge value={48} unit="°C" color="#fbbf24" label="Temp" />
            </div>
            <div style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#7c8aa0', marginBottom: '6px' }}>
                <span>LIVE TELEMETRY</span><span style={{ color: '#4ade80' }}>▲ stable</span>
              </div>
              <svg width="100%" height="46" viewBox="0 0 320 46" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="cs-telemetry" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
                <polyline fill="none" stroke="url(#cs-telemetry)" strokeWidth="2" points="0,34 26,30 52,36 78,20 104,26 130,12 156,22 182,10 208,24 234,16 260,28 286,14 320,22" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Process steps */}
        <div className="cs-steps" style={{ marginBottom: '30px' }}>
          {hmiSteps.map((s, i) => (
            <motion.div key={i} className="glass-card" style={{ padding: '20px' }} {...reveal(Math.min(i * 0.08, 0.32))}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '10px' }}>{s.n}</div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>{s.h}</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{s.p}</p>
            </motion.div>
          ))}
        </div>

        {/* Outcome metrics */}
        <div className="cs-metrics">
          {hmiMetrics.map((m, i) => (
            <motion.div key={i} className="glass-card" style={{ padding: '22px', textAlign: 'center' }} {...reveal(Math.min(i * 0.08, 0.32))}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.3rem', fontWeight: 700, lineHeight: 1, background: 'linear-gradient(120deg, var(--color-primary), var(--color-secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                <CountUp end={m.end} suffix={m.suffix} />
              </div>
              <small style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '8px' }}>{m.label}</small>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* Top-Level Portal Modal Pop-Up Viewer (Escape Stacking Context)        */}
      {/* ===================================================================== */}
      {selectedCase && typeof document !== 'undefined' && createPortal(
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(16px)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }} 
          onClick={() => setSelectedCase(null)}
        >
          <div 
            className="glass-card" 
            style={{ 
              maxWidth: '1080px', 
              width: '100%', 
              height: '92vh', 
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden', 
              border: `1.5px solid ${selectedCase.tagColor}`,
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.95)',
              padding: 0
            }} 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header & Tab Navigation */}
            <div style={{
              padding: '14px 20px',
              background: 'rgba(13, 17, 26, 0.95)',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    background: selectedCase.tagColor,
                    padding: '2px 8px',
                    borderRadius: '9999px'
                  }}>
                    {selectedCase.num}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: selectedCase.badgeColor, fontWeight: 700 }}>
                    {selectedCase.category}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', margin: '2px 0 0 0' }}>
                  {selectedCase.title}
                </h3>
              </div>

              {/* View Mode Switcher */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={() => setModalViewMode('html')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: modalViewMode === 'html' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                    border: modalViewMode === 'html' ? '1px solid #8b5cf6' : '1px solid var(--border-subtle)',
                    color: modalViewMode === 'html' ? '#ffffff' : 'var(--text-muted)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <BookOpen size={13} />
                  <span>Interactive Case Study</span>
                </button>

                <button
                  onClick={() => setModalViewMode('pdf')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: modalViewMode === 'pdf' ? 'rgba(239, 68, 68, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                    border: modalViewMode === 'pdf' ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                    color: modalViewMode === 'pdf' ? '#ffffff' : 'var(--text-muted)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <FileText size={13} />
                  <span>{selectedCase.pdfName}</span>
                </button>

                {selectedCase.figmaProto && (
                  <button
                    onClick={() => setModalViewMode('figma')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      background: modalViewMode === 'figma' ? 'rgba(16, 185, 129, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                      border: modalViewMode === 'figma' ? '1px solid #10b981' : '1px solid var(--border-subtle)',
                      color: modalViewMode === 'figma' ? '#ffffff' : 'var(--text-muted)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    <Play size={12} fill="currentColor" />
                    <span>Figma Prototype</span>
                  </button>
                )}

                {/* Direct Open in New Tab */}
                <a
                  href={modalViewMode === 'html' ? selectedCase.htmlUrl : (modalViewMode === 'pdf' ? selectedCase.pdfUrl : selectedCase.figmaProto)}
                  target="_blank"
                  rel="noreferrer"
                  title="Open in Fullscreen Tab"
                  style={{
                    padding: '6px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                >
                  <ExternalLink size={16} />
                </a>

                {/* Close Modal Button */}
                <button 
                  onClick={() => setSelectedCase(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    color: 'var(--text-main)',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '4px'
                  }}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Modal Body: Active View Render */}
            <div style={{ flex: 1, position: 'relative', width: '100%', height: '100%', background: '#090d16' }}>
              {modalViewMode === 'html' && (
                <iframe
                  title={`${selectedCase.title} - Interactive Case Study`}
                  src={selectedCase.htmlUrl}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    background: '#ffffff'
                  }}
                />
              )}

              {modalViewMode === 'pdf' && (
                <iframe
                  title={`${selectedCase.title} - PDF Document`}
                  src={selectedCase.pdfUrl}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    background: '#1e293b'
                  }}
                />
              )}

              {modalViewMode === 'figma' && selectedCase.figmaProto && (
                <iframe
                  title={`${selectedCase.title} - Figma Prototype`}
                  src={figmaEmbedUrl}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    background: '#090d16'
                  }}
                  allowFullScreen
                />
              )}
            </div>

            {/* Modal Footer Quick Actions */}
            <div style={{
              padding: '12px 20px',
              background: 'rgba(13, 17, 26, 0.95)',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Showing document: <strong style={{ color: 'var(--text-main)' }}>{selectedCase.pdfName}</strong>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <a
                  href={selectedCase.pdfUrl}
                  download={selectedCase.pdfName}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <Download size={13} />
                  <span>Download {selectedCase.num} PDF</span>
                </a>

                {selectedCase.figmaProto && (
                  <a
                    href={selectedCase.figmaProto}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      color: '#ffffff',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textDecoration: 'none'
                    }}
                  >
                    <Play size={12} fill="#ffffff" />
                    <span>Launch Prototype</span>
                  </a>
                )}

                <button
                  className="btn-secondary"
                  style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                  onClick={() => setSelectedCase(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
