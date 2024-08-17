import { RoleItems } from "@/Items/Items"
import MyImg from "../assets/abirimage.png"
import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { EntryLeftVariants, EntryRightVariants, LiVariants, UlVariants } from "@/Variants/Variants"
const AboutMe = () => {
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
            <motion.h1 variants={LiVariants} className="text-[1.8rem] font-[400]">Who am I?</motion.h1>
            <motion.h1 variants={LiVariants} className="text-[3rem] font-[600] text-primaryText">About Me</motion.h1>
          </motion.div>
          <div className="info flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between">
            <motion.div variants={EntryLeftVariants} initial="initial" animate={mainControls} className="para w-full md:w-[60%] order-2 md:order-1 flex flex-col gap-3 md:text-[1.1rem]">
              <p className="text-paraText leading-8">As a skilled <span className="highlight">
                Full Stack Developer</span>, I am passionate about leveraging my expertise to drive innovation and deliver exceptional results.</p>
              <p className="text-paraText leading-8">With extensive experience in developing interactive and responsive web applications using cutting-edge technologies like <span className="highlight">NextJs, ReactJs, Nestjs and MongoDB</span>, I am confident in my ability to create intuitive, user-friendly interfaces that meet the needs of a diverse range of users.</p>
              <p className="text-paraText leading-8">Whether working independently or as part of a team, I thrive in dynamic environments that prioritize creativity, collaboration, and continuous learning. I am committed to staying up-to-date with emerging technologies and best practices to ensure that my work is always cutting-edge and relevant.</p>
            </motion.div>
            <motion.div variants={EntryRightVariants} initial="initial" animate={mainControls} className="img order-1 md:order-2 w-full md:w-[40%] grid place-items-center">
              <img src={MyImg} alt="" className="w-[10rem] md:w-[20rem]" />
            </motion.div>
          </div>
          <motion.div ref={refCard} variants={UlVariants} initial="initial" animate={mainControlsCard} className="roles w-full flex flex-col md:flex-row items-center h-fit gap-10 justify-center py-10">
            {RoleItems.map((r) => {
              return (
                <motion.div whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.25 },
                }}
                  variants={LiVariants}
                  className="each_role w-[90%] secondary-button md:w-[20%] grid place-items-center aspect-square rounded-lg cursor-pointer" key={r.id}>
                  <div className="sub w-[99.2%] aspect-square rounded-lg bg-secondaryColor flex flex-col justify-center items-center gap-3">
                    <img src={r.roleIcon} alt="" className="w-[7.5rem]" />
                    <h1 className="roleName font-[600] lg:text-[1.3rem] lg:w-[70%] text-center">{r.roleName}</h1>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default AboutMe