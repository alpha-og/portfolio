import { aboutDetails, detailCluster } from "../common/constants";

const Circle = () => {
    return (
        <div className="aspect-square w-5 border-2 border-amber-500 bg-amber-300 shadow-lg shadow-amber-400 opacity-50 rounded-full"></div>
    );
};
const SemiCircle = () => {
    return (
        <div className="w-2.5 h-5 border-l-2 border-amber-500 bg-amber-300 shadow-lg shadow-amber-400 opacity-50 rounded-tl-full rounded-bl-full rounded-tr-none rounded-br-none"></div>
    );
};

const Rating = (props: { proficiency: number }) => {
    const { proficiency } = props;
    const integer = Math.floor(proficiency);
    const decimal = proficiency - Math.floor(proficiency);
    const circles: Array<JSX.Element> = [];
    for (let i = 0; i < integer; i++) {
        circles.push(<Circle />);
    }
    if (decimal > 0) {
        circles.push(<SemiCircle />);
    }

    return (
        <div className="grid auto-cols-max grid-cols-5 flex-grow-0 flex-shrink-0 gap-2">
            {circles.map((circle) => {
                return circle;
            })}
        </div>
    );
};

const DetailCard = (props: detailCluster) => {
    const { detailType, details, img } = props;
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-5 flex-grow">
                <h1 className="text-4xl">{detailType}</h1>
                <ul className="w-full text-lg leading-loose">
                    {details.map((detail) => {
                        return (
                            <li className="w-full flex items-center justify-between gap-5">
                                <p>{detail.detailName}</p>
                                <Rating
                                    proficiency={
                                        detail.proficiency
                                            ? detail.proficiency
                                            : 0
                                    }
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <img src={img} alt={detailType} className="w-64" />
        </div>
    );
};

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col gap-10 px-28 py-16 text-secondary-700"
        >
            <h1 className="text-8xl">About Me</h1>
            <div className="grid grid-cols-2 grid-rows-2 gap-10">
                {aboutDetails.map((aboutDetail) => {
                    return <DetailCard {...aboutDetail} />;
                })}
            </div>
        </section>
    );
};

export default About;
