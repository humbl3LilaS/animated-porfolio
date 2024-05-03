import { motion } from "framer-motion";

export default function ServicesListItem({ header }) {
  return (
    <li>
      <motion.article
        className={
          "h-full p-10 flex flex-col justify-between border border-gray-400"
        }
        whileHover={{ background: "white", color: "gray" }}
        initial={{ background: "inherit", color: "inherit" }}
      >
        <h3 className={"text-lg font-bold"}>{header ?? "Branding"}</h3>
        <p className={"text-sm"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum
          vero quisquam repellendus blanditiis, nam delectus magni itaque illum
          quae.
        </p>
        <button
          type={"button"}
          className={"py-2 bg-orange-400 font-bold text-gray-600"}
        >
          Go
        </button>
      </motion.article>
    </li>
  );
}
