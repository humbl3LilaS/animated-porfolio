import { motion } from "framer-motion";

const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.12,
    },
  },
  scrollBtn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export default function HeroInfo() {
  return (
    <motion.div
      className={"max-w-desktop h-full mx-auto "}
      variants={textVariant}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className={
          "max-w-[80%] mx-auto h-full flex flex-col justify-center gap-y-9"
        }
        variants={textVariant}
      >
        <motion.h2
          className={"text-headerHero text-3xl tracking-hero-header"}
          variants={textVariant}
        >
          Super Edelweiss
        </motion.h2>
        <motion.p
          className={"max-w-[40%] text-3xl  lg:text-[60px]"}
          variants={textVariant}
        >
          Junior Web Developer
        </motion.p>
        <motion.div variants={textVariant}>
          <motion.button
            className="p-5 mb-4 border-2 border-white bg-transparent rounded-lg mr-8 md:mb-0"
            variants={textVariant}
          >
            See the Latest Works
          </motion.button>
          <motion.button
            className="p-5 border-2 border-white bg-transparent rounded-lg"
            variants={textVariant}
          >
            Contact Me
          </motion.button>
        </motion.div>
        <motion.div variants={textVariant}>
          <motion.img
            src="../../public/scroll.png"
            alt="image of a mouse scrolling"
            variants={textVariant}
            animate="scrollBtn"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
