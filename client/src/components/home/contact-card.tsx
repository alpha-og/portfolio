import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

import type { IconType } from "react-icons";
import React from "react";

type T_ContactItem = {
  href: string;
  displayText: string;
  icon: IconType;
  className?: string;
};

const contactItems: T_ContactItem[] = [
  {
    href: "https://github.com/alpha-og",
    displayText: "Github",
    icon: AiOutlineGithub,
    className: "hover:bg-[#8950d9] hover:shadow-[#8950d9]",
  },
  {
    href: "https://www.linkedin.com/in/athul-anoop-a85068281/",
    displayText: "LinkedIn",
    icon: AiOutlineLinkedin,
    className: "hover:bg-[#0a66c2] hover:shadow-[#0a66c2]",
  },
  {
    href: "https://www.instagram.com/athul_0g/",
    displayText: "Instagram",
    icon: AiOutlineInstagram,
    className: "hover:bg-[#e1306c] hover:shadow-[#e1306c]",
  },
  {
    href: "https://twitter.com/alpha_0g_501",
    displayText: "Twitter",
    icon: AiOutlineTwitter,
    className: "hover:bg-[#1da1f2] hover:shadow-[#1da1f2]",
  },
];

const twContactItem =
  "border w-full h-10 p-4 flex justify-around items-center gap-4 flex-shrink-0 rounded-lg shadow-sm ease-in-out duration-500 hover:text-white hover:border-black hover:shadow-lg sm:h-12";

const ContactItem = ({
  href,
  displayText,
  icon: Icon,
  className,
}: T_ContactItem) => {
  return (
    <a href={href}>
      <li className={`${twContactItem} ${className}`}>
        {<Icon className="w-8 h-8 flex-shrink-0" />}
        <p className="flex-grow text-lg ">{displayText}</p>
      </li>
    </a>
  );
};

const ContactList = ({ contactItems }: { contactItems: T_ContactItem[] }) => {
  return (
    <ul className="w-full flex flex-col gap-2">
      {contactItems.map((contactItem, index) => (
        <ContactItem key={index} {...contactItem} />
      ))}
    </ul>
  );
};

const ContactCard = () => {
  return (
    <div className="border w-full h-full p-6 flex flex-col justify-between items-center gap-4 rounded-lg shadow-sm bg-white md:w-[28rem] md-p-8 md:gap-8">
      <h1 className="text-2xl text-neutral-500 sm:text-4xl ">Contact Me</h1>
      <ContactList contactItems={contactItems} />
    </div>
  );
};
export default ContactCard;
