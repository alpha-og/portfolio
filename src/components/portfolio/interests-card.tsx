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
    <div className="glass h-full flex flex-col gap-4 p-4 rounded-xl">
      <h2 className="text-3xl font-bold">Interests</h2>
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

export default InterestsCard;
