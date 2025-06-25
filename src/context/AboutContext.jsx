import React, { createContext, useContext } from 'react';

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
    description: "With over two decades of experience, we've helped countless businesses achieve their goals through innovative solutions and dedicated service.",
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
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Jane Smith",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Mike Johnson",
      position: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Sarah Wilson",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ],
  timeline: [
    {
      id: 1,
      year: "1998",
      title: "Company Founded",
      description: "Started with a vision to revolutionize the industry"
    },
    {
      id: 2,
      year: "2005",
      title: "First Major Project",
      description: "Successfully completed our first major project"
    },
    {
      id: 3,
      year: "2010",
      title: "Global Expansion",
      description: "Expanded operations to multiple countries"
    },
    {
      id: 4,
      year: "2020",
      title: "Digital Transformation",
      description: "Launched our digital transformation initiative"
    }
  ],
  faqs: [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing."
    },
    {
      id: 2,
      question: "How long have you been in business?",
      answer: "We have been in business for over 25 years, serving clients worldwide."
    },
    {
      id: 3,
      question: "What is your team size?",
      answer: "We have a team of over 50 professionals working across different departments."
    },
    {
      id: 4,
      question: "Do you offer custom solutions?",
      answer: "Yes, we specialize in creating custom solutions tailored to our clients' specific needs."
    }
  ]
};

export const AboutContext = createContext(aboutData);

export const AboutProvider = ({ children }) => (
  <AboutContext.Provider value={aboutData}>{children}</AboutContext.Provider>
);

export const useAbout = () => useContext(AboutContext); 