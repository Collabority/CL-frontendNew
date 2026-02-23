import React from "react";
import { 
  Laptop, 
  Store, 
  Palette, 
  Video, 
  Eye, 
  Film, 
  Globe, 
  Laptop2, 
  PenTool, 
  Rocket 
} from "lucide-react";

import img1 from "../assets/s1.jpeg";
import img2 from "../assets/s2.jpeg";
import img3 from "../assets/s3.jpeg";
import img4 from "../assets/s4.jpeg";
import img5 from "../assets/s5.jpeg";
import img6 from "../assets/s6.jpeg";

export const services = [
  {
    icon: Laptop,
    title: "IT Solutions",
    color: "green",
    des: "Tech-driven company offering software, web/app development, or system integration.",
  },
  {
    icon: Store, 
    title: "Marketing Strategies",
    color: "blue",
    des: "Digital marketing agency traits (SEO, social media, performance marketing).",
  },
  {
    icon: Palette, 
    title: "Creative Design Services",
    color: "orange",
    des: "Design studio features (branding, UI/UX, graphics).",
  },
  {
    icon: Video, 
    title: "Video Production",
    color: "red",
    des: "Multimedia or content creation agency capabilities.",
  },
];

export const colorMap = {
  green: "text-green-700",
  blue: "text-blue-700",
  orange: "text-orange-700",
  red: "text-red-700",
};

export const bgColorMap = {
  green: "bg-green-100",
  blue: "bg-blue-100",
  orange: "bg-orange-100",
  red: "bg-red-100",
};

export const hoverTextColors = {
  blue: "group-hover:text-blue-600",
  red: "group-hover:text-red-600",
  green: "group-hover:text-green-600",
  yellow: "group-hover:text-yellow-600",
  purple: "group-hover:text-purple-600",
};

export const portfolioImages = [
  {
    image: "https://html.webtend.net/omnivus/assets/img/portfolio/01.jpg",
    title: "IT / Solutions",
    des: "Transforming Business with Smart IT Solutions",
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/portfolio/02.jpg",
    title: "Marketing Strategy",
    des: "Boosting Brands through Data-Driven Marketing",
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/portfolio/03.jpg",
    title: "Design Creative",
    des: "Elevating Identity with Intuitive Design",
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/portfolio/01.jpg",
    title: "Video Production",
    des: "Telling Stories through High-Impact Videos",
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/portfolio/02.jpg",
    title: "Marketing Campaigns",
    des: "Driving Growth with Strategic Campaigns",
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/portfolio/03.jpg",
    title: "UI/UX Design",
    des: "Crafting Seamless User Experiences",
  },
];

export const infoData = [
  { number: "280", label: "Our Branches", color: "bg-green-600" },
  { number: "782", label: "Projects Done", color: "bg-yellow-600" },
  { number: "1M", label: "Happy Users", color: "bg-red-600" },
  { number: "100", label: "Awards...", color: "bg-blue-600" },
];

export const clients = [
  {
    img: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=400&q=80", 
    text: '"Collabority helped us revamp our entire IT infrastructure. Their team delivered secure, scalable solutions that improved our efficiency."',
    name: "Rohan Sharma",
    post: "TechNova Solutions",
    stars: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?w=400&q=80",
    text: '"Their marketing strategies brought a noticeable boost in our online reach and lead generation. We saw measurable growth."',
    name: "Sneha Kapoor",
    post: "Digital Vibes Pvt. Ltd.",
    stars: "⭐️ ⭐️ ⭐️ ⭐️",
  },
  {
    img: "https://img.freepik.com/free-photo/young-indian-man-formal-suit-office-portrait_1303-27352.jpg?w=400",
    text: '"The design and video production team at Collabority brought our brand vision to life. Their creativity exceeded our expectations."',
    name: "Amit Verma",
    post: "CreativeNest India",
    stars: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
  },
];

export const newsSection = [
  {
    img: "https://html.webtend.net/omnivus/assets/img/latest-news/01.jpg",
    date: "10 Jun 2025",
    des: "Top Trends in IT Solutions That Are Transforming Businesses in 2025",
  },
  {
    img: "https://html.webtend.net/omnivus/assets/img/latest-news/02.jpg",
    date: "15 Jun 2025",
    des: "Building Brand Identity Through Powerful Design and Storytelling",
  },
  {
    img: "https://html.webtend.net/omnivus/assets/img/latest-news/03.jpg",
    date: "18 Jun 2025",
    des: "How Data-Driven Marketing Is Driving Growth for Modern Brands",
  },
];

export const servicesCardsData = [
  {
    title: "Custom IT Solutions",
    icon: <Laptop2 className="w-8 h-8" />,
    image: img1,
    shortDescription: "Secure, scalable, and future-ready IT infrastructures — from cloud deployments to system integrations...",
    fullDescription: "Secure, scalable, and future-ready IT infrastructures — from cloud deployments to system integrations — customized for your business needs. We begin by analyzing your current systems and identifying performance gaps. Our solutions include server management, cloud migration, cybersecurity, and enterprise architecture. Every project is designed to be secure, agile, and easily maintainable.",
  },
  {
    title: "Digital Marketing Strategy",
    icon: <Globe className="w-8 h-8" />,
    image: img2,
    shortDescription: "Performance-driven campaigns built on research, creative targeting, and analytics...",
    fullDescription: "Performance-driven campaigns built on research, creative targeting, and analytics — designed to maximize your ROI. Our strategies are built from competitor research, consumer behavior analysis, and tailored messaging. We optimize across channels including SEO, PPC, email, and social media.",
  },
  {
    title: "UI/UX & Visual Design",
    icon: <Eye className="w-8 h-8" />,
    image: img3,
    shortDescription: "We craft human-centered designs that are beautiful, functional...",
    fullDescription: "We craft human-centered designs that are beautiful, functional, and aligned with your business objectives. Our team maps user journeys to design seamless experiences across mobile, web, and app interfaces. We focus on accessibility, clarity, and conversion principles in every layout.",
  },
];

export const COLORS = {
  PRIMARY: "#008080", 
  SECONDARY: "#002248",
  TEXT_DARK: "#1f2937",
  TEXT_LIGHT: "#6b7280",
  BACKGROUND: "#ffffff",
};

export const TEXTS = {
  NAVIGATION: {
    HOME: "Home",
    ABOUT: "About",
    SERVICES: "Services",
    BLOG: "Blog",
    CONTACT: "Contact",
  },
  BUTTONS: {
    GET_QUOTE: "Get A Quote",
  }
};