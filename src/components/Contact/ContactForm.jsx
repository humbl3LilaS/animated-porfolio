import { motion } from "framer-motion";
import FormImage from "../../../public/form.svg";

const submitBtnVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
  click: {
    scale: 0.96,
  },
};

export default function ContactForm() {
  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className={"flex-1"}>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            className={
              "w-full px-2 py-4 bg-transparent border-2 border-white rounded-md mb-4 "
            }
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="text"
            id="email"
            className={
              "w-full px-2 py-4 bg-transparent border-2 border-white rounded-md mb-4"
            }
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Name
          </label>
          <textarea
            id="message"
            className={
              "w-full px-2 py-4  h-52  bg-transparent border-2 border-white rounded-md mb-4 "
            }
            placeholder="Message"
          />
        </div>
        <motion.button
          type="submit"
          className={"w-full py-3 mt-4 rounded-md   bg-orange-400"}
          variants={submitBtnVariants}
          initial="initial"
          whileHover="hover"
          whileTap={"click"}
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
}
