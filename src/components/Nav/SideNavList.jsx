import { motion } from "framer-motion";

const listVariant = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export default function SideNavList() {
  const ITEMS = ["Home", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.ul
      className="absolute w-full h-full flex flex-col items-center justify-center gap-y-5 z-[999]"
      variants={listVariant}
    >
      {ITEMS.map((item) => (
        <SideNavItem item={item} key={item} />
      ))}
    </motion.ul>
  );
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

function SideNavItem({ item }) {
  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={`#${item}`} className="text-4xl">
        {item}
      </a>
    </motion.li>
  );
}
