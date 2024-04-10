import { Github } from "lucide-react";
import damnBanner from "../../assets/projects/banners/damn-banner.png";
// import diffBanner from "../../assets/projects/banners/diff-banner.png";
import drishtiCetBanner from "../../assets/projects/banners/drishti-cet-banner.png";

type T_project = {
  [key: string]: {
    title: string;
    description: string;
    banner: string;
    githubUrl?: string;
    websiteUrl?: string;
    techStack: string[];
  };
};

const projects: T_project = {
  diff: {
    title: "Diff",
    description:
      "Diff is a platform to share project ideas and to connect with collaborators and investors. This project was built as part of D-Solve hackathon",
    banner: "",
    githubUrl: "https://github.com/alpha-og/Diff",
    techStack: [
      "AI/ ML",
      "Langchain",
      "React",
      "Vite JS",
      "Node.js",
      "MongoDB",
      "Express",
      "TailwindCSS",
    ],
  },
  drishtiCet: {
    title: "Drishti CET 2024",
    description:
      "I worked as lead developer for the official website of Drishti CET 2024, our college's Tech fest",
    banner: drishtiCetBanner.src,
    githubUrl: null,
    websiteUrl: "https://www.drishti.cet.ac.in/",
    techStack: ["React", "Vite JS", "TailwindCSS", "Firebase"],
  },
  damn: {
    title: "DAMN",
    description:
      "DAMN is a platform where I share my knowledge of machine learning concepts through my notes",
    banner: damnBanner.src,
    githubUrl: "https://github.com/alpha-og/DAMN",
    websiteUrl: "https://alpha-og.github.io/DAMN/",
    techStack: ["React", "Vite JS", "TailwindCSS"],
  },
};

const ProjectCard = ({ project }: { project: T_project[keyof T_project] }) => {
  return (
    <div className="w-full p-4 flex flex-col gap-4 border rounded-lg bg-white md:flex-row">
      {project.banner && (
        <a href={project.websiteUrl} target="_blank" className="w-full md:w-72">
          <img
            src={project.banner}
            alt={project.title}
            className="w-full rounded-lg object-cover object-center md:h-full"
          />
        </a>
      )}
      <div className="flex flex-col gap-2 ">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              className="p-1 flex items-center bg-neutral-900 text-white rounded-lg"
            >
              <span>
                <Github />
              </span>
            </a>
          )}
        </div>
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <h4
              key={tech}
              className="px-2 py-1 border rounded-lg bg-white text-sm"
            >
              {tech}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsCard = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white border rounded-lg md:col-span-2">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="flex flex-wrap gap-4">
        {Object.entries(projects).map(([key, value]) => (
          <ProjectCard key={key} project={value} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
