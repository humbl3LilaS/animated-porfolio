import { motion, useInView } from "framer-motion";
import ServicesCta from "./ServicesCta";
import ServicesDecorator from "./ServicesDecorator";
import ServicesList from "./ServicesList";
import { useRef } from "react";

const servicesVariants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export default function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="w-full h-full py-4 flex flex-col justify-between bg-primary"
      initial="initial"
      animate={isInView && "animate"}
      ref={ref}
    >
      <ServicesDecorator variants={servicesVariants} />
      <ServicesCta variants={servicesVariants} />
      <ServicesList variants={servicesVariants} />
    </motion.div>
  );
}
