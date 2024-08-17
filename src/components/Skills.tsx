import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { LiVariants, UlVariants } from "@/Variants/Variants"
import { MyProjects } from "@/Items/Items";
import { ProjectProps } from "@/Props";
import { Eye } from "lucide-react";
const SkillsAndExperience = () => {
  const ref = useRef(null);
  const refCard = useRef(null);
  const isInViewDiv = useInView(ref);
  const isInViewCard = useInView(refCard);
  const mainControls = useAnimation();
  const mainControlsCard = useAnimation();
  useEffect(() => {
    if (isInViewDiv) {
      mainControls.start("animate");
    }
    else {
      mainControls.start("initial")
    }
    if (isInViewCard) {
      mainControlsCard.start("animate");
    }
    else {
      mainControlsCard.start("initial")
    }
  }, [isInViewDiv, isInViewCard])
  return (
    <AnimatePresence>
      <div ref={ref} className="w-full min-h-[100vh]">
        <div className="wrapper w-full h-full flex flex-col py-5 gap-5">
          <motion.div variants={UlVariants} initial="initial" animate={mainControls} className="top">
            <motion.h1 variants={LiVariants} className="text-[1.8rem] font-[400]">What have I done?</motion.h1>
            <motion.h1 variants={LiVariants} className="text-[3rem] font-[600] text-primaryText">My Projects</motion.h1>
          </motion.div>
          <motion.div ref={refCard} variants={UlVariants} initial="initial" animate={mainControlsCard} className="w-full grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MyProjects.map((m: ProjectProps) => {
              return (
                <ProjectCard
                  data={m}
                  key={m.id}
                />
              )
            })}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}

const ProjectCard = ({ data }: { data: ProjectProps }) => {
  return (
    <motion.div variants={LiVariants} className="each_project cursor-pointer secondary-button rounded-lg p-[1px] w-full col-span-1 grid place-items-center ease-in duration-200">
      <div className="sub w-full rounded-md bg-secondaryColor p-2 flex flex-col aspect-square justify-between">
        <motion.div whileHover={{
          scale: 1.05,
          transition: { duration: 0.25 },
        }} className="img h-[60%] w-full rounded-sm relative">
          <img src={data.image} alt="" className="h-full" />
          <div className="gitandweblink absolute bottom-0 z-50 left-1/2 -translate-x-1/2 bg-secondaryColor rounded-t-md p-2 flex items-center gap-4">
            {data.gitlink && <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.25 },
              }}
              onClick={(e) => {
                e.preventDefault();
                window.open(data.gitlink, "_blank")
              }}
              className="github grid grid-place-items-center p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </motion.div>}

            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.25 },
              }}
              onClick={(e) => {
                e.preventDefault();
                window.open(data.weblink, "_blank")
              }}
              className="github grid grid-place-items-center p-1">
              <Eye />
            </motion.div>

          </div>
        </motion.div>
        <h1 className="text-center highlight">{data.name}</h1>
        <p className="text-center">{data.desc}</p>
      </div>
    </motion.div>
  )
}

export default SkillsAndExperience