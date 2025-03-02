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
    <div className="glass h-full flex flex-col gap-4 p-4 rounded-xl">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {Object.entries(skills).map(([key, value]) => (
          <h3 key={key} className="glass w-max px-2 rounded-xl text-xl">
            {value.title}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
