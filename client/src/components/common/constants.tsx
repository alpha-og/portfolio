import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { LinkElement } from "./LinkUl";
import achievements from "/achievements.svg";
import communication from "/communication.svg";
import interests from "/interests.svg";
import skills from "/skills.svg";

type detail = { detailName: string; proficiency?: number };
export type detailCluster = {
    detailType: string;
    details: Array<detail>;
    img?: string;
};

export const navLinks: Array<LinkElement> = [
    { title: "Home", to: "#home" },
    { title: "Portfolio", to: "#portfolio" },
    { title: "About", to: "#about" },
    { title: "Contact", to: "#contact" },
];

export const socialLinks: Array<LinkElement> = [
    {
        title: "Instagram",
        to: "https://www.instagram.com/athul_0g/",
        icon: <BsInstagram />,
    },
    {
        title: "Linkedin",
        to: "https://www.linkedin.com/in/athul-anoop-a85068281/",
        icon: <BsLinkedin />,
    },
    { title: "GitHub", to: "https://github.com/alpha-og", icon: <BsGithub /> },
];

export const aboutDetails: Array<detailCluster> = [
    {
        detailType: "Skills",
        details: [
            { detailName: "Programming", proficiency: 4 },
            { detailName: "UI/ UX Design", proficiency: 3 },
            { detailName: "Graphics Design", proficiency: 3.5 },
            { detailName: "Project Management", proficiency: 3 },
            { detailName: "Video Editing", proficiency: 3.5 },
        ],
        img: skills,
    },
    {
        detailType: "Interests",
        details: [
            { detailName: "Machine Learning" },
            { detailName: "FOSS Development" },
            { detailName: "Cybersecurity" },
            { detailName: "Content Writing" },
            { detailName: "Robotics" },
        ],
        img: interests,
    },
    {
        detailType: "Languages",
        details: [
            { detailName: "English", proficiency: 4.5 },
            { detailName: "Hindi", proficiency: 3 },
            { detailName: "Malayalam", proficiency: 3.5 },
        ],
        img: communication,
    },
    {
        detailType: "Software and Programming Languages",
        details: [
            { detailName: "Blender 3D", proficiency: 3 },
            { detailName: "Da Vinci Resolve", proficiency: 3 },
            { detailName: "GIMP", proficiency: 2 },
            { detailName: "Inkscape", proficiency: 2 },
            { detailName: "Python", proficiency: 3.5 },
            { detailName: "C/CPP", proficiency: 2 },
            { detailName: "JavaScript & TypeScript", proficiency: 2.5 },
            { detailName: "Web Development — MERN Stack", proficiency: 3 },
        ],
    },
    {
        detailType: "Achievements",
        details: [
            {
                detailName:
                    "1. Sahodaya South Zone Subject Topper in Grade 12 CBSE Computer Science (2023)",
            },
            {
                detailName:
                    "2. Finalist (Team) in the Space Habitat Challenge conducted by ISRO in association with the World Space Week (2021)",
            },
            {
                detailName:
                    "3. Finalist in the Young Environmental Scientist (YES) competition held by the IWMA at IIT-Madras (2017)",
            },
        ],
        img: achievements,
    },
];
