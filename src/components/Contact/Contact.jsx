import { motion } from "framer-motion";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

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

export default function Contact() {
  return (
    <motion.div
      className="w-desktop mx-auto flex items-start gap-x-10"
      variants={variants}
      initial="initial"
      whileInView={"animate"}
    >
      <ContactInfo />
      <ContactForm />
    </motion.div>
  );
}
