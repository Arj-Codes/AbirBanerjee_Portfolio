import { MenubarVariants } from "@/Variants/Variants"
import { NavPropsType } from "@/props/PropType"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import MenuItems from "./MenuItems"

const Menubar: React.FC<{ props: NavPropsType }> = ({ props }) => {
  const { setIsOpen, isOpen } = props;
  return (
    <motion.div variants={MenubarVariants} initial="initial" animate="animate" exit="exit" className="absolute top-0 left-0 w-full h-full flex flex-col md:hidden bg-secondaryColor py-2 px-5 gap-10">
      <div className="closeMenubar w-full flex justify-end" onClick={(e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
      }}>
        <X />
      </div>
      <div className="menuitems">
        <MenuItems />
      </div>
    </motion.div>
  )
}

export default Menubar