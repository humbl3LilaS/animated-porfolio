import { motion } from "framer-motion";

export default function ServicesDecorator({ variants }) {
  return (
    <motion.div
      className={
        "mr-3 flex-1 self-end flex items-center justify-between gap-x-3"
      }
      variants={variants}
    >
      <p className={"font-extralight text-lg text-right text-gray-600"}>
        I focus on helping your brand grow <br />
        and move forward
      </p>
      <hr className={"w-[500px] border-t-[0.5px] border-t-gray-600"} />
    </motion.div>
  );
}
