import pfp from "../../assets//pfp.webp";
import { MapPin } from "lucide-react";

const paragraphs = [
  "I'm a student and software developer with a passion for tech, and a positive outlook towards creating software solutions that ultimately lead to a better tomorrow",
  "My interests span across systems software,embedded systems, application development and machine learning.",
];

const ProfileCard = () => {
  return (
    <div className="border min-w-min h-max p-6 flex flex-col justify-start items-start gap-6 rounded-lg shadow-sm bg-white md:h-full ease-in-out duration-300">
      <div className="w-full flex flex-col justify-start items-center gap-4 md:flex-row ease-in-out duration-300">
        <img
          src={pfp.src}
          alt="Athul Anoop"
          className="rounded-full w-48 h-48 md:w-32 md:h-32 ease-in-out duration-300"
        />
        <div className="w-full flex flex-col justify-around items-center gap-2 md:gap-0 ease-in-out duration-300">
          <h1 className="min-w-max w-full text-4xl font-bold min-[375px]:text-5xl md:text-4xl lg:text-6xl ease-in-out duration-300">
            Athul Anoop
          </h1>
          <p className="w-full">
            <span className="text-xl text-neutral-500">Software Developer</span>
          </p>
          <p className="w-full flex flex-row justify-start items-center gap-2 md:gap-0 ease-in-out duration-300">
            <MapPin size={24} className="inline-block text-red-400" />
            <a href="https://maps.app.goo.gl/xN2yMbbJfz8mJvMbA">
              <span className="text-xl text-neutral-500">Kerala, India</span>
            </a>
          </p>
        </div>
      </div>
      <div>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="min-[375px]:text-lg ease-in-out duration-300"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
export default ProfileCard;
