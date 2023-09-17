import React from "react";
import { About, Contact, Home, Portfolio } from "../components";

const Main = () => {
    return (
        <div className="h-full">
            <Home />
            <Portfolio />
            <About />
            <Contact />
        </div>
    );
};

export default Main;
