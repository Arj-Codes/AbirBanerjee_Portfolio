import { RoleItems } from "@/Items/Items"
import MyImg from "../assets/abirimage.png"
import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { EntryLeftVariants, EntryRightVariants, LiVariants, UlVariants } from "@/Variants/Variants"
const Skills = () => {
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
            <motion.h1 variants={LiVariants} className="text-[1.8rem] font-[400]">What do I use?</motion.h1>
            <motion.h1 variants={LiVariants} className="text-[3rem] font-[600] text-primaryText">My skills</motion.h1>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Skills