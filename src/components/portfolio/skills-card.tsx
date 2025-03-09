import Chip from "@components/chip";
import { motion } from "motion/react";

type T_skill = {
  [key: string]: {
    title: string;
  };
};

const skills: T_skill = {
  datascience: {
    title: "Data Science",
  },
  scripting: {
    title: "Shell Scripting",
  },
  webDevelopment: {
    title: "Fullstack Web Development",
  },
  uiUx: {
    title: "UI/UX Design",
  },
  graphicsDesign: {
    title: "Graphics Design",
  },
  projectManagement: {
    title: "Project Management",
  },
  videoImageEditing: {
    title: "Video/ Image Editing",
  },
};

const SkillsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="glass h-full flex flex-col gap-4 p-4 rounded-xl"
    >
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {Object.entries(skills).map(([key, value]) => (
          <Chip key={key} title={value.title} />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsCard;
