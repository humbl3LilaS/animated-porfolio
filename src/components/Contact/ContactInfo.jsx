import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ContactInfo() {
  return (
    <motion.div className="flex-1 w-full" variants={variants}>
      <motion.h2 className={"max-w-96 text-7xl font-bold mb-8"}>
        Let's work together
      </motion.h2>
      <motion.p className={"mb-8"}>
        <span className={"mb-2 block text-2xl font-bold"}>Mail</span>
        <span>superedelweiss@gmail.com</span>
      </motion.p>
      <motion.p className={"mb-8"}>
        <span className={"mb-2 block text-2xl font-bold"}>Address</span>
        <span>Kyoto, Japan</span>
      </motion.p>
      <motion.p className={"mb-8"}>
        <span className={"mb-2 block text-2xl font-bold"}>Phone</span>
        <span>+12345678</span>
      </motion.p>
    </motion.div>
  );
}
