import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { LinkElement } from "./LinkUl";

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
