export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  phase: string;
  description: string;
}

export interface ResultMetric {
  metric: string;
  label: string;
}

export interface Project {
  title: string;
  slug: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  year: string;
  tagline: string;
  platform: string;
  duration: string;
  teamSize: string;
  status: string;
  challenge: string;
  solution: string;
  client: {
    name: string;
    industry: string;
    location: string;
    services: string[];
  };
  features: ProjectFeature[];
  gallery: string[];
  process: ProcessStep[];
  results: ResultMetric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    title: "Manasik",
    slug: "manasik",
    category: "Mobile App",
    description:
      "A comprehensive Hajj & Umrah companion app guiding pilgrims through rituals, prayer times, reminders, and spiritual journey tracking with a beautiful Islamic design.",
    tech: ["Flutter", "Firebase", "Google Maps"],
    image: "/project-manasik.jpeg",
    year: "2026",
    tagline: "Guiding every step of the spiritual journey",
    platform: "iOS & Android",
    duration: "4 Months",
    teamSize: "5 Engineers",
    status: "Live",
    challenge:
      "Millions of pilgrims travel for Hajj and Umrah each year, yet most lack a reliable digital companion that provides step-by-step guidance through complex rituals, real-time prayer schedules, and location-aware reminders — all while working offline in crowded environments with limited connectivity.",
    solution:
      "We built a beautiful, offline-first mobile app with an intuitive ritual guide, GPS-powered navigation to holy sites, customizable prayer alerts, and a spiritual progress tracker. The app supports Arabic and English with a calligraphic UI that honors the sacred experience.",
    client: {
      name: "Manasik Foundation",
      industry: "Religious Tech",
      location: "Riyadh, Saudi Arabia",
      services: ["UI/UX Design", "Mobile Development", "QA Testing", "Cloud Infrastructure"],
    },
    features: [
      {
        icon: "compass",
        title: "Ritual Step-by-Step Guide",
        description: "Interactive walkthrough of every Hajj and Umrah ritual with audio narration and visual aids.",
      },
      {
        icon: "map",
        title: "Sacred Site Navigation",
        description: "GPS-powered maps with walking routes between holy sites, crowd density indicators, and offline support.",
      },
      {
        icon: "bell",
        title: "Smart Prayer Alerts",
        description: "Location-aware prayer time notifications with Qibla direction and nearby mosque finder.",
      },
      {
        icon: "chart",
        title: "Spiritual Progress Tracker",
        description: "Personal dashboard tracking completed rituals, daily prayers, and spiritual milestones.",
      },
      {
        icon: "globe",
        title: "Multilingual Support",
        description: "Full Arabic and English experience with authentic Islamic calligraphy and right-to-left layouts.",
      },
      {
        icon: "shield",
        title: "Offline-First Architecture",
        description: "Core features work without internet, syncing seamlessly when connectivity returns.",
      },
    ],
    gallery: [
      "/project-manasik.jpeg",
      "/project-manasik.jpeg",
      "/project-manasik.jpeg",
      "/project-manasik.jpeg",
    ],
    process: [
      {
        phase: "Discovery & Research",
        description: "Conducted field research with pilgrims and scholars to map the complete ritual journey and identify pain points.",
      },
      {
        phase: "UX Design & Prototyping",
        description: "Created culturally authentic wireframes and interactive prototypes, tested with diverse user groups.",
      },
      {
        phase: "Agile Development",
        description: "Built with Flutter for cross-platform consistency, Firebase for real-time sync, and Google Maps for navigation.",
      },
      {
        phase: "Quality Assurance",
        description: "Rigorous testing across 20+ devices, offline scenarios, and high-density crowd simulations.",
      },
      {
        phase: "Launch & Iteration",
        description: "Deployed to App Store and Google Play with continuous updates based on pilgrim feedback during Hajj season.",
      },
    ],
    results: [
      { metric: "25K+", label: "Downloads in first season" },
      { metric: "4.9", label: "App Store rating" },
      { metric: "98%", label: "Offline reliability score" },
    ],
    testimonial: {
      quote: "Manasik transformed the Hajj experience for our community. The step-by-step guidance gave pilgrims confidence and peace of mind throughout their sacred journey.",
      author: "Ahmed Al-Rashid",
      role: "Director, Manasik Foundation",
    },
  },
  {
    title: "Weem",
    slug: "weem",
    category: "E-Commerce App",
    description:
      "A grocery delivery platform connecting customers with local supermarkets, featuring real-time order tracking, discount coupons, and seamless payment integration.",
    tech: ["React Native", "Node.js", "Stripe"],
    image: "/project-weem.jpeg",
    year: "2025",
    tagline: "Fresh groceries delivered to your doorstep",
    platform: "iOS & Android",
    duration: "6 Months",
    teamSize: "7 Engineers",
    status: "Live",
    challenge:
      "Local supermarkets were losing customers to large delivery platforms but couldn't afford to build their own technology. They needed a white-label solution that preserved their brand identity while offering modern convenience features like real-time tracking and smart discounts.",
    solution:
      "We created a multi-vendor grocery marketplace with store-branded storefronts, intelligent route optimization for delivery drivers, a coupon engine with geo-targeted promotions, and Stripe-powered split payments that automatically distribute revenue between the platform and stores.",
    client: {
      name: "Weem Technologies",
      industry: "E-Commerce / Retail",
      location: "Dubai, UAE",
      services: ["Product Strategy", "Mobile Development", "Backend Architecture", "Payment Integration"],
    },
    features: [
      {
        icon: "truck",
        title: "Real-Time Order Tracking",
        description: "Live GPS tracking of delivery drivers with estimated arrival times and order status updates.",
      },
      {
        icon: "tag",
        title: "Smart Coupon Engine",
        description: "Geo-targeted promotions and personalized discount codes based on shopping history and location.",
      },
      {
        icon: "credit-card",
        title: "Split Payment System",
        description: "Stripe Connect integration for automatic revenue distribution between platform and vendors.",
      },
      {
        icon: "store",
        title: "Multi-Vendor Marketplace",
        description: "Each supermarket gets a branded storefront with custom inventory management and pricing.",
      },
      {
        icon: "zap",
        title: "Route Optimization",
        description: "AI-powered delivery routing that minimizes time and fuel costs across multiple orders.",
      },
      {
        icon: "repeat",
        title: "Smart Reordering",
        description: "One-tap reorder of previous baskets with automatic price and availability updates.",
      },
    ],
    gallery: [
      "/project-weem.jpeg",
      "/project-weem.jpeg",
      "/project-weem.jpeg",
      "/project-weem.jpeg",
    ],
    process: [
      {
        phase: "Market Analysis",
        description: "Researched local grocery delivery landscape, interviewed store owners and frequent shoppers.",
      },
      {
        phase: "System Architecture",
        description: "Designed scalable microservices architecture with real-time WebSocket communication.",
      },
      {
        phase: "Parallel Development",
        description: "Simultaneously built customer app, driver app, and vendor dashboard with shared API layer.",
      },
      {
        phase: "Integration Testing",
        description: "End-to-end testing of order flow, payment processing, and delivery tracking systems.",
      },
      {
        phase: "Staged Rollout",
        description: "Launched city by city, onboarding stores and training delivery teams at each stage.",
      },
    ],
    results: [
      { metric: "12K+", label: "Monthly active users" },
      { metric: "35%", label: "Increase in store revenue" },
      { metric: "18min", label: "Average delivery time" },
    ],
    testimonial: {
      quote: "Weem gave our supermarket the technology to compete with the big players. Our delivery orders tripled within three months of launching.",
      author: "Sara Khalil",
      role: "CEO, Weem Technologies",
    },
  },
  {
    title: "Dars",
    slug: "dars",
    category: "E-Learning Platform",
    description:
      "An online academy platform offering live courses, instructor profiles, and a responsive storefront with limited-time promotions across web and mobile.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    image: "/image44.png",
    year: "2024",
    tagline: "Where knowledge meets modern learning",
    platform: "Web & Mobile",
    duration: "5 Months",
    teamSize: "6 Engineers",
    status: "Live",
    challenge:
      "Traditional online learning platforms felt outdated and generic. The client wanted a premium, engaging academy experience that could host live interactive classes, manage instructor profiles, process course purchases, and deliver time-sensitive promotional campaigns — all with a modern, magazine-quality design.",
    solution:
      "We designed and built a full-stack e-learning platform with real-time video classrooms, an instructor dashboard for content management, a course storefront with countdown-driven promotions, progress tracking, and certificate generation — all wrapped in a sleek, responsive interface.",
    client: {
      name: "Dars Academy",
      industry: "Education Technology",
      location: "Amman, Jordan",
      services: ["UI/UX Design", "Full-Stack Development", "Video Integration", "DevOps"],
    },
    features: [
      {
        icon: "video",
        title: "Live Interactive Classes",
        description: "Real-time video classrooms with screen sharing, chat, hand-raising, and recording capabilities.",
      },
      {
        icon: "user",
        title: "Instructor Profiles",
        description: "Rich instructor pages with biography, credentials, course listings, and student reviews.",
      },
      {
        icon: "shopping-bag",
        title: "Course Storefront",
        description: "Beautiful course catalog with categories, search, and limited-time promotional pricing.",
      },
      {
        icon: "award",
        title: "Certificate Generation",
        description: "Automated PDF certificates with verification codes upon course completion.",
      },
      {
        icon: "bar-chart",
        title: "Learning Analytics",
        description: "Student dashboards showing progress, quiz scores, watch time, and completion rates.",
      },
      {
        icon: "clock",
        title: "Countdown Promotions",
        description: "Flash sale engine with countdown timers, bundle discounts, and referral rewards.",
      },
    ],
    gallery: [
      "/image44.png",
      "/image44.png",
      "/image44.png",
      "/image44.png",
    ],
    process: [
      {
        phase: "Curriculum Mapping",
        description: "Worked with educators to define course structures, assessment types, and learning paths.",
      },
      {
        phase: "Design System Creation",
        description: "Built a comprehensive component library with accessibility-first design principles.",
      },
      {
        phase: "Full-Stack Development",
        description: "Next.js frontend, Node.js API, PostgreSQL database, and WebRTC video integration.",
      },
      {
        phase: "Content Migration",
        description: "Migrated existing courses, student data, and instructor profiles from legacy systems.",
      },
      {
        phase: "Launch & Training",
        description: "Deployed platform and trained instructors on content management and live class tools.",
      },
    ],
    results: [
      { metric: "3K+", label: "Enrolled students" },
      { metric: "4.7", label: "Platform satisfaction score" },
      { metric: "85%", label: "Course completion rate" },
    ],
    testimonial: {
      quote: "Dars doesn't just look premium — it feels premium. Our instructors love the live class tools and students keep coming back for more courses.",
      author: "Lina Haddad",
      role: "Founder, Dars Academy",
    },
  },
  {
    title: "1K Coffee",
    slug: "1k-coffee",
    category: "Mobile App",
    description:
      "A coffee shop loyalty and ordering app with QR-based rewards, in-app ordering, point collection, and a seamless digital payment experience.",
    tech: ["Flutter", "Firebase", "QR Integration"],
    image: "/image.png",
    year: "2025",
    tagline: "Your favorite brew, one tap away",
    platform: "iOS & Android",
    duration: "3 Months",
    teamSize: "4 Engineers",
    status: "Live",
    challenge:
      "The coffee chain was losing repeat customers to competitors with digital loyalty programs. Paper punch cards were easily lost, and there was no way to push targeted promotions or analyze customer preferences. They needed a mobile-first solution that made ordering fast and loyalty rewarding.",
    solution:
      "We built a sleek mobile app with QR-based loyalty scanning, mobile ordering with customization, a points-to-rewards conversion system, push notification campaigns, and a barista-facing tablet dashboard for order management — all integrated with their existing POS system.",
    client: {
      name: "1K Coffee Co.",
      industry: "Food & Beverage",
      location: "Cairo, Egypt",
      services: ["Mobile Development", "UI/UX Design", "POS Integration", "Analytics Dashboard"],
    },
    features: [
      {
        icon: "qr-code",
        title: "QR Loyalty Scanning",
        description: "Scan at checkout to earn points — replaces paper punch cards with a digital rewards system.",
      },
      {
        icon: "coffee",
        title: "Mobile Ordering",
        description: "Browse the menu, customize drinks, and place orders ahead for express pickup.",
      },
      {
        icon: "gift",
        title: "Rewards & Redemption",
        description: "Earn points on every purchase, redeem for free drinks, upgrades, and exclusive merch.",
      },
      {
        icon: "bell",
        title: "Smart Notifications",
        description: "Personalized push notifications for happy hours, new menu items, and bonus point events.",
      },
      {
        icon: "tablet",
        title: "Barista Dashboard",
        description: "Tablet-optimized order management interface for baristas with queue and preparation tracking.",
      },
      {
        icon: "pie-chart",
        title: "Customer Insights",
        description: "Analytics dashboard showing popular items, peak hours, and customer retention metrics.",
      },
    ],
    gallery: [
      "/image.png",
      "/image.png",
      "/image.png",
      "/image.png",
    ],
    process: [
      {
        phase: "Brand Workshop",
        description: "Immersed in the coffee shop's brand identity to design an app that feels like an extension of their space.",
      },
      {
        phase: "Rapid Prototyping",
        description: "Delivered clickable prototypes within two weeks, iterated based on barista and customer feedback.",
      },
      {
        phase: "Flutter Development",
        description: "Built cross-platform app with Firebase backend, Stripe payments, and QR code scanning.",
      },
      {
        phase: "POS Integration",
        description: "Connected with existing point-of-sale system for seamless order and payment synchronization.",
      },
      {
        phase: "Soft Launch",
        description: "Piloted in 3 flagship locations, refined based on real-world usage before full chain rollout.",
      },
    ],
    results: [
      { metric: "40%", label: "Increase in repeat visits" },
      { metric: "8K+", label: "Loyalty members in 2 months" },
      { metric: "4.8", label: "App Store rating" },
    ],
    testimonial: {
      quote: "Our customers love the app. The QR loyalty system replaced our old punch cards overnight, and mobile ordering reduced our wait times dramatically.",
      author: "Omar Fayed",
      role: "Operations Manager, 1K Coffee Co.",
    },
  },
  {
    title: "Lexara",
    slug: "lexara",
    category: "AI Platform",
    description:
      "A legal document analysis tool powered by NLP that extracts key clauses, flags risks, and generates contract summaries.",
    tech: ["Python", "GPT-4", "Kubernetes"],
    image:
      "https://images.unsplash.com/photo-1655720828018-edd71de0e245?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
    tagline: "AI-powered legal intelligence at your fingertips",
    platform: "Web Application",
    duration: "8 Months",
    teamSize: "8 Engineers",
    status: "Live",
    challenge:
      "Law firms were spending thousands of hours manually reviewing contracts, often missing critical clauses or risk factors buried in dense legal language. They needed an AI solution that could understand legal context, extract actionable insights, and reduce review time without compromising accuracy.",
    solution:
      "We developed an AI-powered document analysis platform using fine-tuned GPT-4 models trained on legal corpora. The system extracts key clauses, flags risk indicators, generates plain-language summaries, and provides side-by-side contract comparisons — reducing review time by over 70%.",
    client: {
      name: "Lexara Legal Tech",
      industry: "Legal Technology",
      location: "London, United Kingdom",
      services: ["AI/ML Development", "Full-Stack Engineering", "Cloud Architecture", "Security Compliance"],
    },
    features: [
      {
        icon: "file-text",
        title: "Smart Clause Extraction",
        description: "AI identifies and categorizes key contractual clauses including indemnity, termination, and liability.",
      },
      {
        icon: "alert-triangle",
        title: "Risk Assessment Engine",
        description: "Automated risk scoring with highlighted problematic clauses and suggested amendments.",
      },
      {
        icon: "layers",
        title: "Contract Comparison",
        description: "Side-by-side document comparison highlighting differences, additions, and removed terms.",
      },
      {
        icon: "message-square",
        title: "Plain-Language Summaries",
        description: "AI-generated executive summaries translating complex legal terms into clear business language.",
      },
      {
        icon: "lock",
        title: "Enterprise Security",
        description: "SOC 2 Type II compliant with end-to-end encryption, role-based access, and audit trails.",
      },
      {
        icon: "database",
        title: "Clause Library",
        description: "Searchable repository of standard clauses with industry benchmarks and best practices.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1655720828018-edd71de0e245?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1655720828018-edd71de0e245?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1655720828018-edd71de0e245?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1655720828018-edd71de0e245?auto=format&fit=crop&w=1200&q=80",
    ],
    process: [
      {
        phase: "Legal Domain Research",
        description: "Partnered with practicing attorneys to understand contract review workflows and pain points.",
      },
      {
        phase: "AI Model Training",
        description: "Fine-tuned GPT-4 on proprietary legal datasets with attorney-validated training examples.",
      },
      {
        phase: "Platform Development",
        description: "Built scalable web platform with Python backend, React frontend, and Kubernetes orchestration.",
      },
      {
        phase: "Security & Compliance",
        description: "Achieved SOC 2 Type II certification, implemented encryption and access control systems.",
      },
      {
        phase: "Enterprise Onboarding",
        description: "Custom deployment for law firms with training, data migration, and ongoing support.",
      },
    ],
    results: [
      { metric: "70%", label: "Reduction in review time" },
      { metric: "15K+", label: "Documents analyzed monthly" },
      { metric: "99.2%", label: "Clause detection accuracy" },
    ],
    testimonial: {
      quote: "Lexara fundamentally changed how our firm reviews contracts. What used to take days now takes hours, with better accuracy than our manual process.",
      author: "James Whitfield",
      role: "Managing Partner, Whitfield & Associates",
    },
  },
];
