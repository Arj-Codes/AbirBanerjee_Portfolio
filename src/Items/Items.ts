import frontendicon from "../assets/frontend.png";
import creatoricon from "../assets/creator.png";
import engineericon from "../assets/engineer.png";

import hdlogo from "../assets/experience/logo.png";
import birlalogo from "../assets/experience/birlapivot.png";
import pietechlabslogo from "../assets/experience/pietechlabs.png";

export const MenubarItems = [
  {
    name: "About Me",
  },
  {
    name: "Experience",
  },
  {
    name: "Skills",
  },
  {
    name: "Projects",
  },
];

export const RoleItems = [
  {
    id: 1,
    roleName: "Full Stack Developer",
    roleIcon: frontendicon,
  },
  {
    id: 2,
    roleName: "Engineer",
    roleIcon: engineericon,
  },
  {
    id: 3,
    roleName: "Content Creator",
    roleIcon: creatoricon,
  },
];

export const ExperienceItems = [
  {
    id: 1,
    name: "Front End Developer",
    company: "Highway Delite",
    location: "Remote",
    date: "03 June 2023 - Present",
    image: hdlogo,
    website: "http://highwaydelite.com",
    data: [
      "Spearheaded the transition to React and created reusable components to improve website performance",
      "Implemented Redux for streamlined state management, facilitating seamless data flow",
    ],
  },
  {
    id: 2,
    name: "ReactJS Developer",
    company: "Birla Pivot",
    location: "Bangalore, Karnataka",
    date: "03 July 2023 - 05 September 2023",
    image: birlalogo,
    website: "http://birlapivot.com",
    data: [
      "Led ReactJS projects, optimizing code for responsive interfaces and superior user experience",
      "Applied B2B insights to develop tailored features, enhancing B2B interactions within the platform",
    ],
  },
  {
    id: 3,
    name: "Front End Developer",
    company: "Pietech Labs",
    location: "Remote",
    date: "10 October 2022 - 30 January 2023",
    image: pietechlabslogo,
    website: "http://iicma.in",
    data: [
      "Developed and designed an engaging and user-friendly ecommerce website for an ice cream company using React, Tailwind, and MaterialUI for the front-end design and Redux for state management.",
      "Integrated with a backend system for product inventory management and order processing",
    ],
  },
];
