import { motion } from "framer-motion";

export default function HoverEffectText({ children }) {
  return <motion.b whileHover={{ color: "orange" }}>{children}</motion.b>;
}
