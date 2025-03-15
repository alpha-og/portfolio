import pfp from "../../assets//pfp.webp";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

const paragraphs = [
  "I'm a student and software developer with a passion for tech, and a positive outlook towards creating software solutions that ultimately lead to a better tomorrow.",
  "My interest lies in machine learning, low-level systems software and applications with emphasis on high performance, reliability and security.",
];

const ProfileCard = () => {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const value = searchParams.get("decrypt");
    document.cookie = "decrypt=wreckord";

    if (value === "wreckord") {
      document.cookie =
        "flag=2f012b510c3b0647273f545e3a210145701c38560f3544001f1157420b1f111930161a";
      window.location.href = "/wreckord.rs";
    }
  }, []);
  return (
    <div className="p-6 flex flex-col justify-start items-start gap-6 rounded-xl glass xl:gap-8 2xl:gap-10 2xl:p-10 ease-in-out duration-300">
      <div className="w-full flex flex-col justify-start items-center gap-4 md:flex-row lg:gap-6 xl:gap-8 2xl:gap-12 ease-in-out duration-300">
        <img
          src={pfp.src}
          alt="Athul Anoop"
          className="rounded-full w-48 h-48 md:w-32 md:h-32 lg:w-48 lg:h-48 2xl:w-80 2xl:h-80 ease-in-out duration-300"
        />
        <div className="w-full flex flex-col justify-around items-center gap-2 md:gap-0 ease-in-out duration-300">
          <h1 className="min-w-max w-full text-4xl font-bold min-[375px]:text-5xl md:text-4xl lg:text-6xl xl:text-7xl ease-in-out duration-300">
            Athul Anoop
          </h1>
          <p className="w-full">
            <span className="font-medium text-xl text-indigo-400 xl:text-2xl 2xl:text-4xl">
              Software Engineer
            </span>
          </p>
          <p className="w-full flex py-1 flex-row justify-start items-center gap-3 md:gap-0 ease-in-out duration-300">
            <MapPin className="inline-block w-6 h-6 text-red-500 xl:w-7 xl:h-7" />
            <a href="https://maps.app.goo.gl/xN2yMbbJfz8mJvMbA">
              <span className="px-1 font-medium text-xl text-indigo-400 xl:text-2xl 2xl:text-4xl">
                Kerala, India
              </span>
            </a>
          </p>
        </div>
      </div>
      <div>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="min-[375px]:text-lg xl:text-xl 2xl:text-3xl ease-in-out duration-300"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
export default ProfileCard;
