import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const navVariants = {
  navbar:
    "absolute -top-24 flex justify-evenly items-center gap-16 opacity-0 sm:static sm:opacity-100 ease-in-out duration-500",
  twNavrailBase:
    "w-2/5 p-4 flex flex-col justify-evenly items-center gap-6 rounded-lg bg-white ring ring-black text-left ease-in-out duration-500",
  twNavrailVisible: "absolute top-14 right-5 ",
  twNavrailHidden: "absolute top-14 -right-full",
};

const navItems = [
  { title: "Home", url: "/" },
  { title: "Portfolio", url: "/portfolio" },
  { title: "Blog", url: "/blog" },
];

const Nav = () => {
  const [navrailHidden, setNavrailHidden] = useState(true);
  const toggleNavrail = () => {
    setNavrailHidden(() => !navrailHidden);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setNavrailHidden(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <nav className="border w-full h-12 px-4 flex justify-between items-center flex-shrink-0 bg-white z-20 ">
      <h1 className="text-lg font-bold">Athul Anoop</h1>
      {navrailHidden && (
        <ul className={navVariants.navbar}>
          {navItems.map((item, index) => (
            <li key={index} className="w-full">
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
      <ul
        className={
          navrailHidden
            ? `${navVariants.twNavrailBase} ${navVariants.twNavrailHidden}`
            : `${navVariants.twNavrailBase} ${navVariants.twNavrailVisible}`
        }
      >
        {navItems.map((item, index) => (
          <li key={index} className="w-full flex shadow-sm rounded-lg border">
            <a className="w-full p-2" href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="static opacity-100 sm:absolute sm:opacity-0 ease-in-out duration-500"
        onClick={toggleNavrail}
      >
        <Menu />
      </button>
    </nav>
  );
};

export default Nav;
