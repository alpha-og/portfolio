import React from "react";
import { About, Contact, Home } from "../components";

const Main = () => {
    return (
        <div className="h-full p-2">
            <Home />
            {/* <Portfolio /> */}
            <About />
            <Contact />
        </div>
    );
};

export default Main;
