import Image from "next/image";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function PostIt(props) {
    const linkDisplayText = props.linkText === "" ? props.link : props.linkText;
    return (
        <div
            className="card postIt"
            style={{ width: "18rem", backgroundColor: "yellow" }}
        >
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
                <p className="card-text">{props.text}</p>
                <a href={props.link} className="card-link">
                    {linkDisplayText}
                </a>
            </div>
        </div>
    );
}
