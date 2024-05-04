import { motion } from "framer-motion";
const buttonVariants = {
  initial: {
    scale: 1.0,
  },
  hover: {
    scale: 1.1,
  },
  clicked: {
    scale: 0.95,
  },
};

export default function ClickyBtn({ className, children }) {
  return (
    <motion.button
      className={className}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap={"clicked"}
    >
      {children}
    </motion.button>
  );
}
