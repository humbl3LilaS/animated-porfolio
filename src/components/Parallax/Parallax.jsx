import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Parallax({ isService }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "370%"]);
  const bg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <div
      className={twMerge(
        "w-full h-full relative flex items-center justify-center overflow-hidden",
        clsx(isService ? "bg-services" : "bg-projects")
      )}
      ref={ref}
    >
      <motion.h2 className={"text-[75px]"} style={{ y: yText }}>
        {isService ? "What We Do?" : "What We Did?"}
      </motion.h2>
      <motion.div
        role="presentation"
        className={
          "w-full h-full absolute bg-cover bg-bottom bg-mountains z-50"
        }
      />
      <motion.div
        role="presentation"
        className={"w-full h-full absolute bg-cover bg-bottom bg-stars z-30"}
        style={{ x: bg }}
      />
      <motion.div
        role="presentation"
        className={twMerge(
          "w-full h-full absolute bg-cover bg-bottom z-40",
          clsx(isService ? "bg-planets" : "bg-sun")
        )}
        style={{ y: bg }}
      />
    </div>
  );
}
