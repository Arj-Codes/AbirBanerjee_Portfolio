import { useState } from "react";
import Navbar from "./components/Navbar"
import { NavPropsType } from "./props/PropType";
import { AnimatePresence } from "framer-motion";
import Menubar from "./components/Menubar";
import Introduction from "./components/Introduction";
import SectionDivider from "./components/SectionDivider";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navprops: NavPropsType = {
    isOpen,
    setIsOpen
  }
  return (
    <div className={`relative top-0 left-0 w-screen h-screen max-w-[100vw] bg-primaryColor text-white`}>
      <div className="wrapper w-[95%] mx-auto max-w-[95%]">
        <Navbar props={navprops} />
        <AnimatePresence>
          {isOpen && <Menubar props={navprops} />}
        </AnimatePresence>
        <Introduction />
        <SectionDivider />
        <AboutMe />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Skills />
      </div>
    </div>
  )
}

export default App
