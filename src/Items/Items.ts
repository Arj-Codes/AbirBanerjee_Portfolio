import frontendicon from "../assets/frontendicon.png";
import backendicon from "../assets/backendicon.png";
import programmericon from "../assets/programmericon.png";

import hdlogo from "../assets/experience/logo.png";
import birlalogo from "../assets/experience/birlapivot.png";
import pietechlabslogo from "../assets/experience/pietechlabs.png";

import wellconnectimg from "../assets/wellconnect.png";
import rakshadialimg from "../assets/rakshadial.png";
import highwaydeliteimg from "../assets/highwaydelite.png";
import charginimg from "../assets/chargin.png";
import trackdeliteimg from "../assets/trackdelite.png";
import rakshaqrimg from "../assets/rakshaqr.png";
import { ProjectProps } from "@/Props";

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
    roleName: "Front End Developer",
    roleIcon: frontendicon,
  },
  {
    id: 2,
    roleName: "Backend Developer",
    roleIcon: backendicon,
  },
  {
    id: 3,
    roleName: "Programmer",
    roleIcon: programmericon,
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

export const MyProjects:ProjectProps[] = [
  {
    id: 1,
    name: "WellConnect",
    desc: "A Medical Application made to ease patient's responsibility of sorting medical documents",
    gitlink: "https://github.com/Arj-Codes/WellConnect",
    weblink: "https://well-connect.vercel.app/",
    image: wellconnectimg,
  },
  {
    id: 2,
    name: "RakshaDial",
    desc: "Raksha dial is a AI technology tool to report rash driving and save lives on the roads",
    gitlink: undefined,
    weblink: "https://rakshadial.com/home",
    image: rakshadialimg,
  },
  {
    id: 3,
    name: "Highway Delite",
    desc: "India's largest digitally connected mobility and highway wayside amenities platform",
    gitlink: undefined,
    weblink: "https://highwaydelite.com/",
    image: highwaydeliteimg,
  },
  {
    id: 4,
    name: "EV Chargin",
    desc: "Your all-in-one EV charging provider",
    gitlink: undefined,
    weblink: "https://chargin.mobi/home",
    image: charginimg,
  },
  {
    id: 5,
    name: "Track Delite",
    desc: "A GPS Tracking and Fleet Management Solution",
    gitlink: undefined,
    weblink: "https://trackdelite.com/",
    image: trackdeliteimg,
  },
  {
    id: 6,
    name: "RakshaQR",
    desc: " Our innovative solution saves lives by ensuring prompt assistance and tackles unattended parking",
    gitlink: undefined,
    weblink: "https://rakshaqr.com/",
    image: rakshaqrimg,
  },
];
