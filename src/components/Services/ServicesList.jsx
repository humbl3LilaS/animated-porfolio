import ServicesListItem from "./ServicesListItem";
import { motion } from "framer-motion";

export default function ServicesList({ variants }) {
  return (
    <motion.ul
      className={"flex-[2] max-w-desktop mx-auto flex"}
      variants={variants}
    >
      <ServicesListItem />
      <ServicesListItem />
      <ServicesListItem />
      <ServicesListItem />
    </motion.ul>
  );
}
