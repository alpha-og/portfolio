import { Link } from "react-router-dom";
import LinkUl from "./LinkUl";
import { navLinks } from "./constants";

const Nav = () => {
    return (
        <div className="absolute w-full h-12 p-2 flex justify-between items-center">
            <h1 className="text-secondary-700 hover:text-accent-800 ease-in-out duration-500">
                <Link to="/">Athul Anoop</Link>
            </h1>
            <LinkUl
                elements={navLinks}
                classNames={{
                    ulClassName: "flex gap-5",
                    liClassName:
                        "hover:text-accent-800 hover:scale-105 ease-in-out duration-500",
                }}
            />
        </div>
    );
};

export default Nav;
