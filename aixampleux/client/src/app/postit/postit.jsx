import Image from "next/image";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function PostIt(props) {
    let link = props.link;
    if (props.link === "" || props.link === undefined || props.link === null) {
        link = "/";
    }
    const linkDisplayText = props.linkText === "" ? props.link : props.linkText;
    return (
        <Link className="no-underline" href={props.id !== -1 ? `postit/${props.id}` : link}>
        <div
            className="card postIt"
            style={{ width: "18rem", backgroundColor: "yellow" }}
        >
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
                <p className="card-text">{props.text}</p>
                <span href={link} className="card-link">
                    {linkDisplayText}
                </span>
            </div>
        </div>
        </Link>
    );
}
