import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

import type { IconType } from "react-icons";

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
  // {
  //   href: "https://www.instagram.com/athul_0g/",
  //   displayText: "Instagram",
  //   icon: AiOutlineInstagram,
  //   className:
  //     "hover:shadow-[#e1306c] hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045]",
  // },
  {
    href: "https://twitter.com/alpha_0g_501",
    displayText: "Twitter",
    icon: AiOutlineTwitter,
    className: "hover:bg-[#1da1f2] hover:shadow-[#1da1f2]",
  },
];

const twContactItem =
  "w-full h-12 p-4 flex justify-around items-center gap-4 flex-shrink-0 rounded-lg shadow-lg outline-1 outline-orange-200 2xl:h-18 ease-in-out duration-500 hover:text-white hover:shadow-lg";

const ContactItem = ({
  href,
  displayText,
  icon: Icon,
  className,
}: T_ContactItem) => {
  return (
    <a href={href}>
      <li className={`${twContactItem} ${className}`}>
        {
          <Icon className="w-8 h-8 flex-shrink-0 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12" />
        }
        <p className="flex-grow text-lg xl:text-xl 2xl:text-3xl">
          {displayText}
        </p>
      </li>
    </a>
  );
};

const ContactList = ({ contactItems }: { contactItems: T_ContactItem[] }) => {
  return (
    <ul className="w-full h-full flex flex-col gap-2 flex-shrink-0 justify-around">
      {contactItems.map((contactItem, index) => (
        <ContactItem key={index} {...contactItem} />
      ))}
    </ul>
  );
};

const ContactCard = () => {
  return (
    <div className="w-full p-6 flex flex-col justify-around items-center gap-4 rounded-xl glass 2xl:p-10 ease-in-out duration-300">
      <ContactList contactItems={contactItems} />
    </div>
  );
};
export default ContactCard;
