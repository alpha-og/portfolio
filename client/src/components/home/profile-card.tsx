const paragraphs = [
  "I'm a student and software developer with a passion for tech, and a positive outlook towards creating software solutions that ultimately lead to a better tomorrow",
  "I'm also interested in graphic design, ML/ AI and embedded systems.",
];

const ProfileCard = () => {
  return (
    <div className="border w-full h-full p-6 flex flex-col justify-start items-start gap-4 rounded-lg shadow-sm bg-white sm:gap-8 sm:p-8">
      <div className="w-full flex justify-start items-center gap-4">
        <img
          src="pfp.jpeg"
          alt="Athul Anoop"
          className="rounded-full w-20 h-20 sm:w-32 sm:h-32"
        />
        <div className="w-full flex flex-col justify-around">
          <h1 className="text-2xl font-bold sm:text-5xl md:text-6xl ">
            Athul Anoop
          </h1>
          <p className="text-md text-neutral-500 sm:text-xl">
            Software Developer
          </p>
        </div>
      </div>
      <div>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-sm sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
export default ProfileCard;
