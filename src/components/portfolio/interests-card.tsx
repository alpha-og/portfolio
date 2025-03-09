import Chip from "@components/chip";
import { motion } from "motion/react";

type T_interest = {
  [key: string]: {
    title: string;
  };
};

const skills: T_interest = {
  machineLearning: {
    title: "Machine Learning",
  },
  robotics: {
    title: "Robotics",
  },
  fossDevelopment: {
    title: "FOSS Development",
  },
  cybersecurity: {
    title: "Cybersecurity",
  },
  contentWriting: {
    title: "Content Writing",
  },
};

const InterestsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass h-full flex flex-col gap-4 p-4 rounded-xl"
    >
      <h2 className="text-3xl font-bold">Interests</h2>
      <div className="flex flex-wrap gap-4">
        {Object.entries(skills).map(([key, value]) => (
          <Chip key={key} title={value.title} />
        ))}
      </div>
    </motion.div>
  );
};

export default InterestsCard;
