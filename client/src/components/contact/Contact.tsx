import React from "react";
import contactImg from "../../assets/contact.svg";
import LinkUl from "../common/LinkUl";
import { socialLinks } from "../common/constants";

const ulClassName =
    "flex flex-row flex-shrink-0 justify-between text-primary-400";
const linkClassName =
    "p-2 flex flex-shrink-0 justify-start items-center gap-2 border border-primary-400 shadow-sm shadow-secondary-600 rounded-md text-xl hover:text-accent-400 hover:border-accent-400 hover:shadow-accent-400 ease-in-out duration-500";
const Contact = () => {
    return (
        <section
            id="contact"
            className="px-28 py-16 grid grid-cols-2 gap-16 text-secondary-700 bg-secondary-800"
        >
            <div className="flex flex-col justify-center gap-10">
                <h1 className="text-primary-500 text-8xl text-start">
                    Reach out to me!
                </h1>
                <LinkUl
                    elements={socialLinks}
                    classNames={{ ulClassName, linkClassName }}
                />
            </div>
            <img src={contactImg} alt="Contact" />
        </section>
    );
};

export default Contact;
