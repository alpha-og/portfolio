import pfp from "/pfp.jpeg";
const Home = () => {
    return (
        <section
            id="home"
            className="h-[100vh] px-28 pt-48 py-20 grid grid-cols-2 items-start text-secondary-700"
        >
            <div className="flex flex-col gap-6">
                <h1 className="text-8xl">Hi there, I'm Athul</h1>
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
            <img
                src={pfp}
                alt="Picture"
                className="ml-auto aspect-square max-w-lg rounded-full"
            />
        </section>
    );
};

export default Home;
