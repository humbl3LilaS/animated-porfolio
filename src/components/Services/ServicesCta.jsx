import { motion } from "framer-motion";
import HoverEffectText from "./HoverEffectText";

export default function ServicesCta({ variants }) {
  return (
    <motion.div
      className={"flex-[2] flex flex-col items-center gap-y-6"}
      variants={variants}
    >
      <div className="flex items-center gap-x-8">
        <img
          src="/public/people.webp"
          alt="peoples"
          className={"w-services h-services rounded-services object-cover"}
        />
        <p className={"text-[85px]"}>
          <HoverEffectText>Unique</HoverEffectText>
          <span className={"ml-8 font-thin"}>Ideas</span>
        </p>
      </div>
      <div className="flex items-center gap-x-8">
        <p className={"text-[85px]"}>
          <HoverEffectText>For Your</HoverEffectText>
          <span className={"ml-8 font-thin"}>Business</span>
        </p>
        <button
          className={
            "w-services h-services rounded-services bg-orange-600 uppercase"
          }
        >
          What we do
        </button>
      </div>
    </motion.div>
  );
}
