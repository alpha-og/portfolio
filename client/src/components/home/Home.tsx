import pfp from "/pfp.jpeg";
const Home = () => {
    return (
        <section
            id="home"
            className="w-full min-h-[100vh] px-7 md:px-28 pt-24 md:pt-48 pb-20 flex flex-col md:flex-row gap-5 items-start text-secondary-700"
        >
            <div className="flex flex-col gap-6">
                <h1 className="text-6xl md:text-8xl">Hi there, I'm Athul</h1>
                <p className="text-xl leading-relaxed">
                    I'm a student and aspiring software developer with a passion
                    for tech, and a positive outlook towards creating software
                    solutions that ultimately lead to a better tomorrow
                </p>
                <p className="text-xl leading-relaxed">
                    I'm also interested in graphic design, ML/ AI and embedded
                    systems.
                </p>
            </div>
            <div>
                <img
                    src={pfp}
                    alt="Picture"
                    className="flex-grow-0 md:ml-auto rounded-full ease-in-out duration-300"
                />
            </div>
        </section>
    );
};

export default Home;
