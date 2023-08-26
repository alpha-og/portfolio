import { Link } from "react-router-dom";

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
                        <Link
                            className={classNames?.linkClassName}
                            to={element.to}
                        >
                            {element.icon}
                            {element.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default LinkUl;
