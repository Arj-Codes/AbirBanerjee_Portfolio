import { MenuIcon } from "lucide-react"
import { NavPropsType } from "@/props/PropType";
import MenuItems from "./MenuItems";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"
const Navbar: React.FC<{ props: NavPropsType }> = ({ props }) => {
  const { setIsOpen, isOpen } = props;

  return (
    <div className={`absolute top-0 left-0 w-full flex bg-primaryColor items-center justify-between py-2 px-5 border-b-2 border-secondaryColor`}>
      <div className="name">
        <motion.h1 initial={{ x: "-100%" }} animate={{
          x: "0%", transition: {
            duration: 0.5
          }
        }} className="text-[#16f2b3] text-[1.2rem] md:text-[1.5rem] font-[600]">
          <img src={logo} alt="" className=""/>
        </motion.h1>
      </div>
      <div className="menu">
        <div className="menuIcon flex md:hidden cursor-pointer" onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}>
          <MenuIcon />
        </div>
        <div className="menuItems hidden md:flex">
          <MenuItems />
        </div>
      </div>
    </div>
  )
}

export default Navbar