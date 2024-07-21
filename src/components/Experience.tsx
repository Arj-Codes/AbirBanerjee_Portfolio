import { ExperienceItems } from "@/Items/Items";
import { EntryLeftVariants, EntryRightVariants, LiVariants, UlVariants } from "@/Variants/Variants"
import { motion, useAnimation, useInView } from "framer-motion"
import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import { WhatIDid } from "./Experience/WhatIdid";

const Experience = () => {
  const headerRef = useRef(null);
  const inViewHeader = useInView(headerRef);
  const headerControls = useAnimation();

  const experienceCardRef = useRef(null);
  const inViewexperienceCard = useInView(experienceCardRef);
  const experienceCardControls = useAnimation();

  useEffect(() => {
    if (inViewHeader) {
      headerControls.start("animate");
    }
    else {
      headerControls.start("initial");
    }
    if (inViewexperienceCard) {
      experienceCardControls.start("animate");
    }
    else {
      experienceCardControls.start("initial");
    }
  }, [inViewHeader, inViewexperienceCard])
  return (
    <div className="w-full min-h-[80vh]">
      <motion.div ref={headerRef} variants={UlVariants} initial="initial" animate={headerControls} className="top">
        <motion.h1 variants={LiVariants} className="text-[1.3rem] md:text-[1.8rem] font-[400]">What have I done?</motion.h1>
        <motion.h1 variants={LiVariants} className="text-[2.4rem] md:text-[3rem] font-[600] text-primaryText">My experience</motion.h1>
      </motion.div>
      <motion.div ref={experienceCardRef} variants={UlVariants} initial="initial" animate={experienceCardControls} className="vertical-timeline grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {ExperienceItems.map((e) => {
          return (
            <motion.div variants={e.id % 2 === 0 ? EntryRightVariants : EntryLeftVariants} className={`each-element h-full parent_card cursor-pointer col-span-3 md:col-span-1`} key={e.id}>
              <div className="child_card px-3 py-5 flex flex-col gap-5 justify-between items-center h-[99%]">
                <div className="right w-full">
                  <img src={e.image} alt="" className="w-[10rem] mx-auto" />
                </div>
                <div className="left flex flex-col w-full gap-3 justify-between">
                  <h1 className="header_card font-[700] text-[1.5rem]">{e.name}</h1>
                  <a href={e.website} target="_blank" className="company_card font-[600] text-[1.2rem] text-[#16f2b3] flex gap-1 items-center">{e.company} <ExternalLink size="1rem" /></a>
                  <h1 className="company_card font-[400] text-[1.2rem]">{e.location}</h1>
                  <h1 className="company_card font-[500] text-[1.1rem] text-[#e4479e]">{e.date}</h1>
                  <WhatIDid data={e.data} />
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Experience