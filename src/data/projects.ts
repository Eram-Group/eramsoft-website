export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: "Manasik",
    category: "Mobile App",
    description:
      "A comprehensive Hajj & Umrah companion app guiding pilgrims through rituals, prayer times, reminders, and spiritual journey tracking with a beautiful Islamic design.",
    tech: ["Flutter", "Firebase", "Google Maps"],
    image: "/project-manasik.jpeg",
    year: "2026",
  },
  {
    title: "Weem",
    category: "E-Commerce App",
    description:
      "A grocery delivery platform connecting customers with local supermarkets, featuring real-time order tracking, discount coupons, and seamless payment integration.",
    tech: ["React Native", "Node.js", "Stripe"],
    image: "/project-weem.jpeg",
    year: "2025",
  },
  {
    title: "Dars",
    category: "E-Learning Platform",
    description:
      "An online academy platform offering live courses, instructor profiles, and a responsive storefront with limited-time promotions across web and mobile.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    image: "/image44.png",
    year: "2024",
  },
  {
    title: "1K Coffee",
    category: "Mobile App",
    description:
      "A coffee shop loyalty and ordering app with QR-based rewards, in-app ordering, point collection, and a seamless digital payment experience.",
    tech: ["Flutter", "Firebase", "QR Integration"],
    image: "/image.png",
    year: "2025",
  },
  {
    title: "Lexara",
    category: "AI Platform",
    description:
      "A legal document analysis tool powered by NLP that extracts key clauses, flags risks, and generates contract summaries.",
    tech: ["Python", "GPT-4", "Kubernetes"],
    image:
      "https://images.unsplash.com/photo-1655720828018-edd71de0e245?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
  },
];
