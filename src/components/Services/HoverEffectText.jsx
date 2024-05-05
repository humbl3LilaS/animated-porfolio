import { motion } from "framer-motion";

export default function HoverEffectText({ children }) {
  return (
    <motion.b whileHover={{ color: "rgb(211, 211, 211)" }}>{children}</motion.b>
  );
}
