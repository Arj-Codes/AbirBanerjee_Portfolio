import { MenubarItems } from "@/Items/Items"
import { LiVariants, UlVariants } from "@/Variants/Variants"
import { motion } from "framer-motion"

const MenuItems = () => {
  return (
    <motion.ul variants={UlVariants} initial="initial" animate="animate" className="w-full flex flex-col md:flex-row gap-5 md:gap-8">
      {MenubarItems.map((m) => {
        return (
          <motion.li
            variants={LiVariants} className="each_item text-[1.3rem] cursor-pointer font-[500] md:font-[400]" key={m.name}>{m.name}</motion.li>
        )
      })}
    </motion.ul>
  )
}

export default MenuItems