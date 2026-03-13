export interface Testimonial {
  name: string;
  role: string;
  company: string;
  rating: number; // 1–5
  comment: string;
  avatar: string; // initials
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "CTO",
    company: "Spotify",
    rating: 5,
    comment:
      "Working with this team transformed our entire platform experience. Their attention to detail and technical expertise exceeded every expectation we had. Truly world-class delivery.",
    avatar: "SM",
    color: "green",
  },
  {
    name: "James Rodriguez",
    role: "Head of Product",
    company: "Stripe",
    rating: 5,
    comment:
      "From concept to launch, they delivered a product that our users love. The design quality and performance optimization were remarkable — our conversion rate jumped 40%.",
    avatar: "JR",
    color: "indigo",
  },
  {
    name: "Emily Chen",
    role: "VP Engineering",
    company: "Airbnb",
    rating: 5,
    comment:
      "They don't just build software — they craft experiences. Every interaction, every animation, every pixel was thoughtfully considered. A rare find in this industry.",
    avatar: "EC",
    color: "rose",
  },
  {
    name: "David Park",
    role: "Founder & CEO",
    company: "Notion",
    rating: 4,
    comment:
      "Exceptional communication throughout the project. They understood our vision instantly and translated it into a product that feels intuitive and polished.",
    avatar: "DP",
    color: "sky",
  },
  {
    name: "Aisha Mahmoud",
    role: "Director of Design",
    company: "Shopify",
    rating: 5,
    comment:
      "The team's creative problem-solving is unmatched. They brought ideas we hadn't even considered and delivered ahead of schedule. Our go-to partner for every new initiative.",
    avatar: "AM",
    color: "emerald",
  },
  {
    name: "Michael Torres",
    role: "Product Manager",
    company: "Slack",
    rating: 5,
    comment:
      "What impressed me most was their ability to balance stunning design with rock-solid engineering. The final product was flawless and our team couldn't be happier.",
    avatar: "MT",
    color: "purple",
  },
  {
    name: "Lena Brooks",
    role: "Lead Engineer",
    company: "Dropbox",
    rating: 5,
    comment:
      "Their engineering team integrated seamlessly with ours. The codebase they delivered was clean, scalable, and well-documented. A partnership we'll continue for years to come.",
    avatar: "LB",
    color: "cyan",
  },
];
