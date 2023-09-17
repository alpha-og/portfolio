// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Link } from "react-router-dom";

export interface LinkElement {
    title: string;
    to: string;
    icon?: JSX.Element;
}
interface ClassNames {
    ulClassName?: string;
    liClassName?: string;
    linkClassName?: string;
    h1ClassName?: string;
}
interface LinkUlProp {
    classNames?: ClassNames;
    title?: string;
    elements: Array<LinkElement>;
}
const LinkUl = (props: LinkUlProp) => {
    const { title, classNames, elements } = props;
    return (
        <>
            {title && <h1 className={classNames?.h1ClassName}>{title}</h1>}
            <ul className={classNames?.ulClassName}>
                {elements.map((element, index) => (
                    <li className={classNames?.liClassName} key={index}>
                        <a
                            className={classNames?.linkClassName}
                            href={element.to}
                        >
                            {element.icon}
                            {element.title}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default LinkUl;
