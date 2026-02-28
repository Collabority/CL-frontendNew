import React, { createContext, useContext, useMemo } from 'react';

/** @BLOCK: Static Data Definition */
const aboutData = {
  hero: {
    title: "About Us",
    description: "We are a team of passionate individuals dedicated to delivering exceptional results.",
    breadcrumb: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about" }
    ]
  },
  experience: {
    years: "25",
    title: "Years Of Experience",
    description: "With over two decades of experience, we've helped countless businesses achieve their goals through innovative solutions.",
    stats: [
      { number: "500+", label: "Projects Completed" },
      { number: "250+", label: "Happy Clients" },
      { number: "50+", label: "Team Members" },
      { number: "15+", label: "Years Experience" }
    ]
  },
  team: [
    {
      name: "John Doe",
      position: "CEO & Founder",
      image: "/webp/team/john.webp",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Jane Smith",
      position: "Creative Director",
      image: "/webp/team/jane.webp",
      social: { twitter: "#", linkedin: "#" }
    }
  ],
  timeline: [
    { id: 1, year: "1998", title: "Company Founded", description: "Started with a vision to revolutionize the industry" },
    { id: 4, year: "2020", title: "Digital Transformation", description: "Launched our digital transformation initiative" }
  ],
  faqs: [
    { id: 1, question: "What services do you offer?", answer: "We offer web development, mobile app development, UI/UX design, and digital marketing." }
  ]
};

/** @ACTION: Context Creation */
export const AboutContext = createContext(null);

export const AboutProvider = ({ children }) => {
  // Memoizing value prevents consumers from re-rendering unless data actually changes
  const value = useMemo(() => aboutData, []);

  return (
    <AboutContext.Provider value={value}>
      {children}
    </AboutContext.Provider>
  );
};

/** @HOOK: Consumer Hook */
export const useAbout = () => {
  const context = useContext(AboutContext);
  if (!context) {
    throw new Error("useAbout must be used within an AboutProvider");
  }
  return context;
};