import { motion, useScroll, useTransform } from "framer-motion";
import ClickyBtn from "./ClickyBtn";
import { useRef } from "react";

export default function PortfolioItem({ data }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section className="h-screen flex items-center justify-center  snap-center ">
      <div
        className={
          "max-w-desktop mx-auto flex items-center gap-x-10 overflow-hidden "
        }
        ref={ref}
      >
        <div>
          <img src={data?.img} alt="a photo" />
        </div>
        <motion.article
          className={"flex flex-col justify-between gap-y-8"}
          style={{ y }}
        >
          <h2 className={"text-4xl font-bold tracking-wide"}>{data?.title}</h2>
          <p className={"text-lg"}>{data?.desc}</p>
          <ClickyBtn className={"block w-1/2 bg-orange-400 py-2 rounded"}>
            See Full Demo
          </ClickyBtn>
        </motion.article>
      </div>
    </section>
  );
}
