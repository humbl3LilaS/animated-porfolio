import { useState } from "react";
import ToggleBtn from "./ToggleBtn";
import { motion } from "framer-motion";
import SideNavList from "./SideNavList";
export default function SideNav() {
  const sideNavVariant = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const [open, setOpen] = useState(false);

  const btnHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <motion.div
      className={
        "flex flex-col items-center justify-center bg-white text-black"
      }
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="w-screen h-screen  fixed top-0 right-0  bottom-0 bg-white z-[99] lg:w-sideNav"
        variants={sideNavVariant}
      >
        <SideNavList />
      </motion.div>
      <ToggleBtn handler={btnHandler} />
    </motion.div>
  );
}
