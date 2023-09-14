import LinkUl from "./LinkUl";
import { navLinks, socialLinks } from "./constants";
const ulClassName = "flex flex-col flex-shrink-0 gap-1 text-secondary-500";
const linkClassName =
    "flex flex-shrink-0 justify-start items-center gap-2 hover:text-accent-800 ease-in-out duration-500";
const h1ClassName = "text-base text-secondary-700";
const classNames = { ulClassName, linkClassName, h1ClassName };
const Footer = () => {
    return (
        <div className="h-48 p-2 pt-10 flex justify-center items-start gap-10 bg-secondary-200">
            <div>
                <LinkUl
                    title="Social"
                    elements={socialLinks}
                    classNames={classNames}
                />
            </div>
            <div>
                <LinkUl
                    title="Website"
                    elements={navLinks}
                    classNames={classNames}
                />
            </div>
        </div>
    );
};

export default Footer;
