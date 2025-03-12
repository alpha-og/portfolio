import { motion } from "motion/react";

const chip = ({
  title,
  className = "text-xl rounded-lg font-semibold xl:rounded-xl 2xl:text-3xl",
}: {
  title: string;
  className?: string;
}) => {
  return (
    <motion.span
      className={`outline-1 outline-indigo-400 inset-shadow-2xs bg-indigo-300/30 px-2 xl:px-4 xl:py-1 ${className}`}
    >
      {title}
    </motion.span>
  );
};

export default chip;
