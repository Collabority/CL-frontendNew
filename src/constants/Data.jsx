import { Eye, Film, Globe, Laptop2, PenTool, Rocket } from "lucide-react";
import {
  FaLaptopCode,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { GiClapperboard } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import img1 from "../assets/s1.jpeg"
import img2 from "../assets/s2.jpeg"
import img3 from "../assets/s3.jpeg"
import img4 from "../assets/s4.jpeg"
import img5 from "../assets/s5.jpeg"
import img6 from "../assets/s6.jpeg"

export const services = [
  { icon: FaLaptopCode, title: "IT Solutions", color: "green", des: <>
  Tech-driven company offering software, web/app development, or system integration.
  </>},
  { icon: FaShop, title: "Marketing Strategies", color: "blue", des: <>
   Digital marketing agency traits (SEO, social media, performance marketing).</>},
  { icon: MdDesignServices, title: "Creative Design Services", color: "orange", des: <>
Design studio features (branding, UI/UX, graphics).</>},
  { icon: GiClapperboard, title: "Video Production", color: "red", des: <>Multimedia or content creation agency capabilities.
  </>},
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
    des: (
      <>
        Transforming Business <br /> with Smart IT Solutions
      </>
    ),
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/portfolio/02.jpg",
    title: "Marketing Strategy",
    des: (
      <>
        Boosting Brands <br /> through Data-Driven Marketing
      </>
    ),
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/portfolio/03.jpg",
    title: "Design Creative",
    des: (
      <>
        Elevating Identity <br /> with Intuitive Design
      </>
    ),
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/portfolio/01.jpg",
    title: "Video Production",
    des: (
      <>
        Telling Stories <br /> through High-Impact Videos
      </>
    ),
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/portfolio/02.jpg",
    title: "Marketing Campaigns",
    des: (
      <>
        Driving Growth <br /> with Strategic Campaigns
      </>
    ),
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/portfolio/03.jpg",
    title: "UI/UX Design",
    des: (
      <>
        Crafting Seamless <br /> User Experiences
      </>
    ),
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
    img: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
    text: '"Collabority helped us revamp our entire IT infrastructure. Their team delivered secure, scalable solutions that improved our efficiency and digital workflow."',
    name: "Rohan Sharma",
    post: "TechNova Solutions",
    stars: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️"
  },

  {
    img: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
    text: '"Their marketing strategies brought a noticeable boost in our online reach and lead generation. We saw measurable growth in just a few months."',
    name: "Sneha Kapoor",
    post: "Digital Vibes Pvt. Ltd.",
    stars: "⭐️ ⭐️ ⭐️ ⭐️"
  },

  {
    img: "https://img.freepik.com/free-photo/young-indian-man-formal-suit-office-portrait_1303-27352.jpg?w=740",
    text: '"The design and video production team at Collabority brought our brand vision to life. Their creativity and professionalism exceeded our expectations."',
    name: "Amit Verma",
    post: "CreativeNest India",
    stars: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️"
  },
];


export const newsSection = [
  {
    img: "https://html.webtend.net/omnivus/assets/img/latest-news/01.jpg",
    date: "By Collabority Team, 10 Jun 2025",
    des: "Top Trends in IT Solutions That Are Transforming Businesses in 2025",
  },
  {
    img: "https://html.webtend.net/omnivus/assets/img/latest-news/02.jpg",
    date: "By Collabority Team, 15 Jun 2025",
    des: "Building Brand Identity Through Powerful Design and Storytelling",
  },
  {
    img: "https://html.webtend.net/omnivus/assets/img/latest-news/03.jpg",
    date: "By Collabority Team, 18 Jun 2025",
    des: "How Data-Driven Marketing Is Driving Growth for Modern Brands",
  },
];



export const newsfeed = [
  {
    image: "https://html.webtend.net/omnivus/assets/img/latest-news/04.jpg",
    post: "Design / Branding",
    des: "Creating visual identities that enhance brand recognition and engagement.",
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/latest-news/05.jpg",
    post: "Marketing / SEO",
    des: "How performance-driven SEO strategies can boost online visibility.",
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/latest-news/06.jpg",
    post: "Video / Content",
    des: "The impact of professional video content on brand storytelling.",
  },
];

export const serviceCarousel = [
  {
    image:
      "https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?ga=GA1.1.376547967.1733342161&semt=ais_hybrid&w=740",
    title: "IT & Cloud Solutions",
    para: "We provide end-to-end IT solutions including cloud services, infrastructure setup, and digital transformation strategies. Our goal is to ensure secure, scalable, and efficient systems tailored to your business needs.",
  },

  {
    image:
      "https://img.freepik.com/free-vector/graphic-design-workplace-illustration_1284-17029.jpg?ga=GA1.1.376547967.1733342161&semt=ais_hybrid&w=740",
    title: "Creative Design Services",
    para: "We craft visually engaging and user-centric designs that reflect your brand identity. From UI/UX to graphic and product design, our creative solutions enhance customer experience and drive engagement across digital platforms.",
  },

  {
    image:
      "https://img.freepik.com/premium-photo/3d-man-doing-online-marketing-illustration_1027215-236.jpg?ga=GA1.1.376547967.1733342161&semt=ais_hybrid&w=740",
    title: "Digital Marketing Strategies",
    para: "Our marketing strategies are built to deliver measurable results. We blend creativity with data-driven approaches across SEO, social media, and paid ads to boost visibility, engagement, and conversion for your business.",
  },

  {
    image:
      "https://img.freepik.com/premium-psd/clapper-camera-production-cinema-movie-film-3d_66255-3269.jpg?ga=GA1.1.376547967.1733342161&semt=ais_hybrid&w=740",
    title: "Video Production",
    para: "We produce high-quality videos that tell compelling stories and elevate your brand. From promotional videos to corporate storytelling, our production team handles everything from scripting to post-editing with precision.",
  }
];


export const awards = [
  {
    year: '2022',
    title: 'Workplace Flexibility Awards 2022',
    awardName: 'Best Remote Team Culture',
    by: 'Running Remote',
  },
  {
    year: '2024',
    title: 'Remote Excellence Awards 2024',
    awardName: 'Excellence in Talent Strategy',
    by: 'Remote.com',
  },
  {
    year: '2024',
    title: 'Remote Excellence Awards 2024',
    awardName: 'Excellence in Remote Work Culture',
    by: 'Remote.com',
  },
];

export const allDomains = [
  { id: 'all', name: 'All Domains' },
  { id: 'cloud', name: 'Cloud & DevOps' },
  { id: 'dev', name: 'Software Development' },
  { id: 'data', name: 'Data & Analytics' },
  { id: 'cyber', name: 'Cybersecurity' },
  { id: 'consult', name: 'Consulting & Strategy' },
  { id: 'infra', name: 'Infrastructure & Ops' },
];

export const allJobs = [
  {
    id: 'job1',
    title: 'Senior Cloud Architect',
    location: 'Remote',
    domainId: 'cloud',
    description: 'Design and implement scalable cloud solutions on AWS/Azure. Requires strong expertise in cloud infrastructure and security.',
    applyLink: '#apply-cloud-arch',
  },
  {
    id: 'job2',
    title: 'DevOps Engineer',
    location: 'Pune, India',
    domainId: 'cloud',
    description: 'Automate deployment pipelines and manage infrastructure as code. Experience with CI/CD tools (Jenkins, GitLab CI) is a plus.',
    applyLink: '#apply-devops',
  },
  {
    id: 'job3',
    title: 'Full Stack Developer (React/Node.js)',
    location: 'Bangalore, India',
    domainId: 'dev',
    description: 'Develop robust web applications using modern JavaScript frameworks and Node.js backend. Strong problem-solving skills required.',
    applyLink: '#apply-fs-dev',
  },
  {
    id: 'job4',
    title: 'Data Scientist',
    location: 'Hyderabad, India',
    domainId: 'data',
    description: 'Analyze complex datasets, build predictive models, and extract actionable insights. Proficiency in Python/R and ML libraries.',
    applyLink: '#apply-data-sci',
  },
  {
    id: 'job5',
    title: 'Cybersecurity Consultant',
    location: 'London, UK',
    domainId: 'cyber',
    description: 'Provide expert advice on security policies, risk assessment, and compliance. Experience with security frameworks is essential.',
    applyLink: '#apply-cyber-consult',
  },
  {
    id: 'job6',
    title: 'IT Strategy Consultant',
    location: 'New York, USA',
    domainId: 'consult',
    description: 'Advise clients on digital transformation and technology roadmap development. Strong analytical and communication skills.',
    applyLink: '#apply-it-strategy',
  },
  {
    id: 'job7',
    title: 'Systems Administrator',
    location: 'Frankfurt, Germany',
    domainId: 'infra',
    description: 'Manage and maintain server infrastructure, ensuring high availability and performance. Familiarity with Linux/Windows servers.',
    applyLink: '#apply-sys-admin',
  },
  {
    id: 'job8',
    title: 'Junior Cloud Engineer',
    location: 'Remote',
    domainId: 'cloud',
    description: 'Assist in cloud environment setup and maintenance. Great opportunity for freshers with basic cloud knowledge.',
    applyLink: '#apply-junior-cloud',
  },
  {
    id: 'job9',
    title: 'Backend Developer (Python/Django)',
    location: 'Delhi, India',
    domainId: 'dev',
    description: 'Develop robust backend services and APIs. Experience with Django/Flask and database management.',
    applyLink: '#apply-backend',
  },
  {
    id: 'job10',
    title: 'Business Intelligence Analyst',
    location: 'Mumbai, India',
    domainId: 'data',
    description: 'Create dashboards and reports, providing insights to drive business decisions. Proficiency in SQL and BI tools (e.g., Tableau, Power BI).',
    applyLink: '#apply-bi-analyst',
  },
];


export const roles = [
  'Backend Developer', 'Senior Cloud Architect', 'DevOps Engineer', 'Full Stack Developer', 'Data Scientist',
  'Cybersecurity Consultant', 'IT Strategy Consultant', 'Systems Administrator', 'Junior Cloud Engineer', 'Business Intelligence Analysis'
];

export const portfolioPage = [
  {image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D", title: "Cutting-edge IT Solutions", text: <>Collabority led the end-to-end development of <b className="text-gray-500">SmartClinic</b>, an <b className="text-gray-500">AI-driven telehealth platform</b> that enables virtual consultations, smart prescriptions, and <b className="text-gray-500"> real-time health monitoring.</b> Built with scalable microservices and secured via advanced encryption protocols, this platform helped <b className="text-gray-500"> reduce patient wait times by 60% across hospitals.</b></>},
  {image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMG1hcmtldGluZyUyMHN0cmF0ZWd5fGVufDB8fDB8fHww", title: "Result-driven Marketing Strategies", text: <>We designed and executed a full-funnel marketing campaign for <b className="text-gray-500">LaunchPro, a B2B SaaS startup</b>. From lead magnet content to paid media optimization and CRM automation, <b className="text-gray-500">the campaign achieved a 230% increase in qualified leads</b> and boosted brand visibility in tech communities globally.</>},
  {image: "https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJhbmRpbmclMjBkZXNpZ258ZW58MHx8MHx8fDA%3D", title: "Creative Design Services", text: <>Collabority reimagined the brand identity for <b className="text-gray-500">RebrandX</b>, a fintech startup. From logo design and color theory to UX/UI revamp, we created a <b className="text-gray-500">cohesive brand experience across digital and print media.</b> The updated design system <b className="text-gray-500">led to a 40% uptick in customer engagement.</b></>},
  {image: "https://plus.unsplash.com/premium_photo-1691223714387-a74006933ffb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww", title: "Professional Video Production", text: <>We produced a <b className="text-gray-500">high-impact video series for VisionVibe</b> to enhance their <b className="text-gray-500">internal onboarding and client presentations.</b> The project <b className="text-gray-500">included motion graphics, storytelling, and drone videography.</b> The campaign saw a <b className="text-gray-500">3x engagement</b> rate on LinkedIn and internal portals.</>},
]

export const servicesCards = [
  {
    title: "Custom IT Solutions",
    icon: <Laptop2 className="w-8 h-8" />,
    image: img1,
    description:
      "Secure, scalable, and future-ready IT infrastructures — from cloud deployments to system integrations — customized for your business needs.",
  },
  {
    title: "Digital Marketing Strategy",
    icon: <Globe className="w-8 h-8" />,
    image: img2,
    description:
      "Performance-driven campaigns built on research, creative targeting, and analytics — designed to maximize your ROI.",
  },
  {
    title: "UI/UX & Visual Design",
    icon: <Eye className="w-8 h-8" />,
    image: img3,
    description:
      "We craft human-centered designs that are beautiful, functional, and conversion-optimized across web and mobile platforms.",
  },
  {
    title: "Video Production & Editing",
    icon: <Film className="w-8 h-8" />,
    image: img4,
    description:
      "Bring your brand to life with high-quality videos — from concept to editing — perfect for digital campaigns, product demos, or storytelling.",
  },
  {
    title: "Brand Identity Development",
    icon: <PenTool className="w-8 h-8" />,
    image: img5,
    description:
      "Define your brand’s voice, tone, and visual identity to create memorable, consistent experiences across every channel.",
  },
  {
    title: "Tech-Driven Campaigns",
    icon: <Rocket className="w-8 h-8" />,
    image: img6,
    description:
      "We merge technology and creativity to launch automated, multi-channel campaigns that drive measurable business growth.",
  },
];

export const servicesCardsData = [
  {
    title: "Custom IT Solutions",
    icon: <Laptop2 className="w-8 h-8" />,
    image: img1,
    shortDescription:
      "Secure, scalable, and future-ready IT infrastructures — from cloud deployments to system integrations...",
    tabletFullDescription:
      "Secure, scalable, and future-ready IT infrastructures — from cloud deployments to system integrations — customized for your business needs. We begin by analyzing your current systems and identifying performance gaps.",
    fullDescription:
      "Secure, scalable, and future-ready IT infrastructures — from cloud deployments to system integrations — customized for your business needs. We begin by analyzing your current systems and identifying performance gaps. Our solutions include server management, cloud migration, cybersecurity, and enterprise architecture. Every project is designed to be secure, agile, and easily maintainable. We also provide 24/7 monitoring and support to ensure seamless operations. Whether you're modernizing legacy systems or building from scratch, we deliver reliability at scale. Collabority ensures your technology becomes a strategic asset, not a burden.",
  },
  {
    title: "Digital Marketing Strategy",
    icon: <Globe className="w-8 h-8" />,
    image: img2,
    shortDescription:
      "Performance-driven campaigns built on research, creative targeting, and analytics...",
    tabletFullDescription:
      "Performance-driven campaigns built on research, creative targeting, and analytics — designed to maximize your ROI. Our strategies are built from competitor research, consumer behavior analysis, and tailored messaging.",
    fullDescription:
      "Performance-driven campaigns built on research, creative targeting, and analytics — designed to maximize your ROI. Our strategies are built from competitor research, consumer behavior analysis, and tailored messaging. We optimize across channels including SEO, PPC, email, and social media. We continuously monitor KPIs and adapt campaigns for real-time results. Automation and A/B testing ensure efficient scaling of performance. Our expert team focuses on generating high-quality leads and improving brand loyalty. At Collabority, we don’t guess — we grow through data.",
  },
  {
    title: "UI/UX & Visual Design",
    icon: <Eye className="w-8 h-8" />,
    image: img3,
    shortDescription:
      "We craft human-centered designs that are beautiful, functional...",
    tabletFullDescription:
      "We craft human-centered designs that are beautiful, functional, and aligned with your business objectives. Our team maps user journeys to design seamless experiences across mobile, web, and app interfaces.",
    fullDescription:
      "We craft human-centered designs that are beautiful, functional, and aligned with your business objectives. Our team maps user journeys to design seamless experiences across mobile, web, and app interfaces. We focus on accessibility, clarity, and conversion principles in every layout. Typography, color theory, and hierarchy are thoughtfully applied to tell your brand’s story. Prototypes and wireframes are validated through testing before deployment. Whether you're rebranding or launching a new product, we ensure first impressions last. Collabority designs for both form and function — with purpose.",
  },
  {
    title: "Video Production & Editing",
    icon: <Film className="w-8 h-8" />,
    image: img4,
    shortDescription:
      "Bring your brand to life with high-quality videos — from concept to editing...",
    tabletFullDescription:
      "Bring your brand to life with high-quality videos — from concept to editing — perfect for digital campaigns and storytelling. Our production process includes scripting, storyboarding, filming, motion graphics, and post-production polish.",
    fullDescription:
      "Bring your brand to life with high-quality videos — from concept to editing — perfect for digital campaigns and storytelling. Our production process includes scripting, storyboarding, filming, motion graphics, and post-production polish. We create explainer videos, product showcases, interviews, and promotional content. Videos are tailored for platforms like YouTube, Instagram, LinkedIn, and your website. We emphasize brand tone, emotion, and visual rhythm to keep viewers engaged. Captions, animations, and music are professionally integrated. Collabority transforms ideas into powerful video narratives.",
  },
  {
    title: "Brand Identity Development",
    icon: <PenTool className="w-8 h-8" />,
    image: img5,
    shortDescription:
      "Define your brand’s voice, tone, and visual identity...",
    tabletFullDescription:
      "Define your brand’s voice, tone, and visual identity to create consistent experiences across every channel. We start by discovering your core values, mission, and target audience. Our team develops logos, typography, color palettes, and brand guidelines.",
    fullDescription:
      "Define your brand’s voice, tone, and visual identity to create consistent experiences across every channel. We start by discovering your core values, mission, and target audience. Our team develops logos, typography, color palettes, and brand guidelines. We ensure your brand speaks with clarity and emotion at every customer touchpoint. From packaging to digital presence, everything is unified. A strong identity increases trust, recognition, and customer loyalty. Collabority builds brands that stand the test of time and attention.",
  },
  {
    title: "Tech-Driven Campaigns",
    icon: <Rocket className="w-8 h-8" />,
    image: img6,
    shortDescription:
      "We merge technology and creativity to launch automated...",
    tabletFullDescription:
      "We merge technology and creativity to launch automated, multi-channel campaigns that drive measurable business growth. Using CRMs, AI tools, and data analytics, we target users at the right time with personalized content.",
    fullDescription:
      "We merge technology and creativity to launch automated, multi-channel campaigns that drive measurable business growth. Using CRMs, AI tools, and data analytics, we target users at the right time with personalized content. Campaigns span email, ads, social, and retargeting for full-funnel impact. Our engineers ensure smooth system integration and tracking. Real-time dashboards allow you to measure ROI with clarity. We test, learn, and scale with speed and precision. Collabority turns complexity into predictable, repeatable success.",
  },
];




export const COLORS = {
  PRIMARY: '#2563eb',
  SECONDARY: '#3b82f6',
  TEXT_DARK: '#1f2937',
  TEXT_LIGHT: '#6b7280',
  BACKGROUND: '#ffffff',
  FOOTER_BG: '#111827',
  HOVER: '#1d4ed8'
};

export const TEXTS = {
  NAVIGATION: {
    HOME: 'Home',
    ABOUT: 'About',
    SERVICES: 'Services',
    PAGES: 'Pages',
    BLOG: 'Blog',
    CONTACT: 'Contact'
  },
  BUTTONS: {
    GET_QUOTE: 'Get A Quote'
  },
  SECTIONS: {
    HERO: {
      TITLE: 'About Collabority',
      DESCRIPTION: 'Empowering Digital Transformation & Brand Growth'
    },
    TIMELINE: {
      TITLE: 'Our Journey',
      DESCRIPTION: 'Explore our growth and milestones'
    },
    FAQ: {
      TITLE: 'Frequently Asked Questions',
      DESCRIPTION: 'Answers to common questions'
    }
  },
  FOOTER: {
    COMPANY: {
      NAME: 'Collabority',
      SUBTITLE: 'IT Solutions, Marketing, Design & Video',
      DESCRIPTION: 'At Collabority, we specialize in cutting-edge IT solutions, result-driven marketing strategies, creative design services, and professional video production to help businesses thrive in the digital era.'
    },
    CONTACT: {
      PHONE: '+1 800 555 2024',
      EMAIL: 'hello@collabority.com'
    },
    HOURS: {
      MON_FRI: 'Monday - Friday: 9:00 AM - 6:00 PM',
      SAT: 'Saturday: 10:00 AM - 2:00 PM',
      SUN: 'Sunday: Closed'
    }
  }
};

export const ANIMATIONS = {
  DURATION: 0.5,
  DELAY: 0.2,
  TIMING: {
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
    EASE_IN_OUT: 'ease-in-out'
  }
};