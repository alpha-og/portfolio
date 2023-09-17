import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import achievements from "../../assets/achievements.svg";
import communication from "../../assets/communication.svg";
import interests from "../../assets/interests.svg";
import skills from "../../assets/skills.svg";
import { LinkElement } from "./LinkUl";

type detail = { detailName: string; proficiency?: number };
export type detailCluster = {
    detailType: string;
    details: Array<detail>;
    img: string;
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
            { detailName: "Open Source Software Development" },
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
        detailType: "Achievements",
        details: [
            {
                detailName:
                    "1. Received numerous awards for academic excellence during my time at BVB Vivekananda Vidya Mandir School (2021-23)",
            },
            {
                detailName:
                    "2. Finalist (Team) in the Space Habitat Challenge conducted by ISRO in association with the World Space Week (2021)",
            },
        ],
        img: achievements,
    },
];
