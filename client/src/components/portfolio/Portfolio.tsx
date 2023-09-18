import { Link } from "react-router-dom";
import spiral from "/Abstract - Spiral.jpeg";
import bottle from "/Bottle.jpeg";
import doorHandle from "/Door Handle.jpeg";
import steth from "/Stethoscope.png";
import damnThumbnail from "/damnThumbnail.png";

const ProjectCard = (props: {
    title?: string;
    description?: string;
    img: string;
}) => {
    const { title, description, img } = props;
    return (
        <div className="flex">
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={img} alt="" className="w-full object-cover rounded-lg" />
        </div>
    );
};
const Portfolio = () => {
    return (
        <section
            id="portfolio"
            className="px-7 md:px-28 py-8 md:py-16 flex flex-col gap-8 md:gap-16 text-primary-500 bg-secondary-800"
        >
            <h1 className="text-6xl md:text-8xl text-start">Portfolio</h1>

            <div className="flex flex-col gap-5">
                <h2 className="text-4xl md:text-6xl font-bold">Software</h2>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="col-span-2 flex flex-col gap-5">
                        <h3 className="text-xl md:text-2xl font-bold">DAMN</h3>
                        <p className="text-md">
                            DAMN aims to offer a one stop solution for all ML/
                            AI/ Data Science related knowledge. The project
                            utilises simple text stored in a github repository
                            and formats it in accordance with the markdown
                            specification
                        </p>
                        <p className="text-md">
                            The project is in development and the website is not
                            production ready. It utilises React for the frontend
                            and is hosted on GitHub Pages.
                        </p>
                    </div>
                    <div className="flex">
                        <Link to={"https://alpha-og.github.io/DAMN/home"}>
                            <img
                                src={damnThumbnail}
                                alt=""
                                className="w-full object-cover rounded-lg"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <h2 className="text-4xl md:text-6xl font-bold">
                    Graphic Design and Art
                </h2>
                <p className="text-md">
                    I took up Computer Generated Imagery (CGI) as a hobby and
                    learnt to use one of the most popular software in the field
                    — Blender. I produced the below mentioned images during my
                    journey of learning CGI. These projects, are what I believe
                    to be my best works in the field. Through these projects I
                    learnt to grasp the use of new tools and techniques at a
                    rapid pace and discovered a vast new horizon.
                </p>
                <p className="text-md">
                    The projects covered various domains such as 3D modelling,
                    procedural texture generation, working with refraction
                    caustics, use of image textures and many more.
                </p>
                <div className="grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 gap-5">
                    <ProjectCard img={steth} />
                    <ProjectCard img={spiral} />
                    <ProjectCard img={bottle} />
                    <ProjectCard img={doorHandle} />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
