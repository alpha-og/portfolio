import { motion } from "motion/react";

const chip = ({
  title,
  className = "text-xl rounded-lg font-semibold",
}: {
  title: string;
  className?: string;
}) => {
  return (
    <motion.span
      className={`outline-1 outline-indigo-400 inset-shadow-2xs bg-indigo-300/30 px-2 ${className}`}
    >
      {title}
    </motion.span>
  );
};

export default chip;
