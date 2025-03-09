import { Menu, X } from "lucide-react";
import useNavrail from "../hooks/useNavrail";

const navVariants = {
  navbar:
    "absolute -top-24 flex justify-evenly items-center gap-16 opacity-0 sm:static sm:opacity-100 ease-in-out duration-500",
};

const navItems = [
  { title: "Home", url: "/" },
  { title: "Portfolio", url: "#portfolio" },
  // { title: "Blog", url: "/blog" },
];

const Nav = () => {
  const { navrailHidden, toggleNavrail } = useNavrail();
  return (
    <nav
      className={`w-full h-12 px-8 flex justify-between items-center shrink-0 z-20 rounded-full ease-in-out duration-500 glass`}
    >
      <h1 className="text-lg font-bold">Athul Anoop</h1>
      {navrailHidden && (
        <>
          <ul className={navVariants.navbar}>
            {navItems.map((item, index) => (
              <li key={index} className="w-full">
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </>
      )}
      <div
        className={`absolute -top-8 -left-5 w-[100vw] h-[100vh] p-8 flex flex-col justify-evenly items-center gap-8 ease-in-out duration-500 bg-white ${navrailHidden ? "scale-0 -top-[100vh] -left-[100vw]" : ""}`}
      >
        <div className="absolute inset-0 h-full w-full z-0 noise"></div>

        <div className="w-full h-12 px-6 flex justify-between items-center shrink-0 grow-0 z-10">
          <h1 className="text-3xl font-bold">Athul Anoop</h1>
          <button
            className="font-bold ease-in-out duration-500"
            onClick={toggleNavrail}
          >
            <X size={28} />
          </button>
        </div>
        <ul className="w-full h-full px-6 flex flex-col justify-start items-left gap-16 z-10 text-3xl">
          {navItems.map((item, index) => (
            <li key={index} className="">
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="static opacity-100 sm:absolute sm:opacity-0 ease-in-out duration-500"
        onClick={toggleNavrail}
      >
        <Menu />
      </button>
    </nav>
  );
};

// const Nav = () => {
//   return (
//     <nav className="sticky top-8 w-full h-12 px-8 flex justify-between items-center flex-shrink-0 z-20 rounded-full glass ease-in-out duration-500">
//       <h1 className="text-lg font-bold">Athul Anoop</h1>
//     </nav>
//   );
// };
export default Nav;
