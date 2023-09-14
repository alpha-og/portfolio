import React from "react";
import pfp from "../../assets/pfp.jpeg";
const Home = () => {
    return (
        <section id="home" className="h-full">
            <div className="w-[46rem] px-4 py-8 flex items-center rounded-lg border-4 z-10 absolute top-[10%] left-[5%]">
                <h1 className="text-9xl">
                    Looks like you've stumbled into my portfolio
                </h1>
            </div>
            <img
                src={pfp}
                alt="Picture"
                className="absolute top-[25%] left-[50%] flex-grow-0 max-w-lg rounded-lg"
            />
        </section>
    );
};

export default Home;
