import { motion } from "framer-motion";

const sliderVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

export default function MovingText() {
  return (
    <motion.p
      className={
        "w-1/2 absolute bottom-0 text-[50vh] leading-[1]  whitespace-nowrap text-moving-text"
      }
      variants={sliderVariant}
      initial="initial"
      animate="animate"
    >
      Junior Front-End Developer React Developer
    </motion.p>
  );
}
