import { Github } from "lucide-react";
import damnBanner from "../../assets/projects/banners/damn-banner.webp";
// import diffBanner from "../../assets/projects/banners/diff-banner.png";
import drishtiCetBanner from "../../assets/projects/banners/drishti-cet-banner.webp";
import { useEffect, useState } from "react";
import Chip from "@components/common/chip";
import { motion } from "motion/react";

type T_project = {
  [key: string]: {
    title: string;
    description: string;
    banner: string;
    githubUrl?: string;
    websiteUrl?: string;
    techStack: string[];
    visible?: boolean | false;
  };
};

const projects: T_project = {
  fin: {
    title: "Fin",
    description:
      "Fin is my take on a launcher and quick access tool that aims to provide a pluggable and composable open source alternative to tools like Spotlight and Raycast",
    banner: "",
    githubUrl: "https://github.com/alpha-og/fin",
    techStack: [
      "Rust",
      "Tauri",
      "React",
      "TypeScript",
      "TailwindCSS",
      "SQLite",
    ],
  },
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
    githubUrl: undefined,
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
    <motion.li
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="outline-1 outline-orange-200 shadow-lg w-full p-2 flex flex-col gap-4 rounded-xl md:p-4 md:flex-row xl:p-6 xl:gap-6 2xl:p-8 2xl:gap-8 data-[closed]:opacity-0"
    >
      {project.banner && (
        <a href={project.websiteUrl} target="_blank" className="w-full md:w-72">
          <img
            src={project.banner}
            alt={project.title}
            className="w-full rounded-xl object-cover object-center md:h-full"
          />
        </a>
      )}
      <div className="w-full h-full flex flex-col gap-2 ">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold xl:text-3xl 2xl:text-4xl">
            {project.title}
          </h3>
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
        <div className="h-full flex flex-col justify-between gap-2 xl:gap-4 xl:text-lg 2xl:text-2xl 2xl:gap-6">
          <p>{project.description}</p>
          <div className="flex flex-wrap gap-2 xl:gap-4">
            {project.techStack.map((tech) => (
              <Chip
                key={tech}
                title={tech}
                className="text-base rounded-lg 2xl:text-2xl"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.li>
  );
};

const ProjectsCard = () => {
  const [projectsQueue, setProjectsQueue] = useState<
    T_project[keyof T_project][]
  >([]);
  const [updating, setUpdating] = useState(false);

  const enqueue = (project: T_project[keyof T_project]) => {
    if (projectsQueue.length < 4) {
      project = { ...project, visible: true };
    } else {
      project = { ...project, visible: false };
    }
    setProjectsQueue((queue) => [...queue, project]);
  };
  const dequeue = () => {
    if (projectsQueue.length === 0) {
      return;
    }
    const dequeuedProject = projectsQueue[0];

    const queue = [
      ...projectsQueue.slice(1, 4).map((queue) => {
        return { ...queue, visible: true };
      }),
      ...projectsQueue.slice(4),
    ];
    setProjectsQueue(queue);
    return dequeuedProject;
  };

  // useEffect(() => {
  //   console.log(projectsQueue);
  //   if (!updating) {
  //     const interval = setInterval(() => {
  //       setUpdating(true);
  //       const dequeuedProject = dequeue();
  //       dequeuedProject && enqueue(dequeuedProject);
  //       setUpdating(false);
  //     }, 3000);
  //     return () => clearInterval(interval);
  //   }
  // }, [projectsQueue, updating]);
  //
  // useEffect(() => {
  //   setUpdating(true);
  //   Object.keys(projects).forEach((key) => {
  //     enqueue(projects[key]);
  //   });
  //   setUpdating(false);
  // }, []);

  return (
    <div className="glass flex flex-col gap-4 p-4 rounded-xl md:p-6 md:col-span-2 xl:gap-6 2xl:gap-8 2xl:p-10">
      <h2 className="text-3xl font-bold xl:text-4xl 2xl:text-5xl">Projects</h2>
      <div className="flex flex-wrap gap-4">
        {Object.values(projects).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
