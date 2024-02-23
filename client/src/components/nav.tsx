import React from "react";
import { Menu } from "lucide-react";
const Nav = () => {
  return (
    <nav className="border w-full h-12 px-4 flex justify-between items-center flex-shrink-0 bg-white z-20">
      <h1 className="text-lg font-bold">Athul Anoop</h1>
      <ul className="absolute -top-24 flex justify-evenly items-center gap-16 opacity-0 sm:static sm:opacity-100 ease-in-out duration-500">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
      <span>
        <Menu />
      </span>
    </nav>
  );
};

export default Nav;
