import Chip from "@components/common/chip";

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
    <div className="glass h-full flex flex-col gap-4 p-4 rounded-xl xl:gap-6 2xl:p-10 2xl:gap-8">
      <h2 className="text-3xl font-bold xl:text-4xl 2xl:text-5xl">Skills</h2>
      <div className="flex flex-wrap gap-4 2xl:gap-6">
        {Object.entries(skills).map(([key, value]) => (
          <Chip key={key} title={value.title} />
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
