import { useRef } from "react";
import PortfolioItem from "./PortfolioItem";
import ProgressBar from "./ProgressBar";
import { motion, useScroll, useSpring } from "framer-motion";
export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={"relative"}>
      <ProgressBar animation={scaleX} />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </div>
  );
}
