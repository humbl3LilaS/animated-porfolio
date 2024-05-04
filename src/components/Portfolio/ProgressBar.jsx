import { motion } from "framer-motion";

export default function ProgressBar({ animation }) {
  return (
    <div className={"p-14 sticky top-0 left-0"}>
      <h1 className={"mb-4 text-3xl text-center text-orange-300"}>
        Featured Works
      </h1>
      <motion.div
        style={{ scaleX: animation }}
        className={"h-2 bg-white rounded-md"}
      />
    </div>
  );
}
