import { Link } from "react-router-dom";
import spiral from "../../assets/Abstract - Spiral.jpeg";
import bottle from "../../assets/Bottle.jpeg";
import doorHandle from "../../assets/Door Handle.jpeg";
import steth from "../../assets/Stethoscope.png";
import damnThumbnail from "../../assets/damnThumbnail.png";

const ProjectCard = (props: {
    title?: string;
    description?: string;
    img: string;
}) => {
    const { title, description, img } = props;
    return (
        <div className="flex ">
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
            className="px-28 py-16 flex flex-col gap-16 text-primary-500 bg-secondary-800"
        >
            <h1 className="text-8xl text-start">Portfolio</h1>

            <div className="flex flex-col gap-5">
                <h2 className="text-6xl">Software Projects</h2>
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex ">
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
                <h2 className="text-6xl">Artwork</h2>
                <div className="grid grid-cols-4 gap-5">
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
