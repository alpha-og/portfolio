import Chip from "@components/common/chip";

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
    <div className="glass h-full flex flex-col gap-4 p-4 rounded-xl xl:gap-6 2xl:p-10 2xl:gap-8">
      <h2 className="text-3xl font-bold xl:text-4xl 2xl:text-5xl">Interests</h2>
      <div className="flex flex-wrap gap-4 2xl:gap-6">
        {Object.entries(skills).map(([key, value]) => (
          <Chip key={key} title={value.title} />
        ))}
      </div>
    </div>
  );
};

export default InterestsCard;
