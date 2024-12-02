"use client";
import Image from "next/image";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import HoverLink from "./HoverLink";
import { useRouter } from "next/navigation";

export default function PostIt(props) {
    let link = props.link;
    const router = useRouter();
    function clickHandler(e) {
        e.preventDefault();
        if (props.id !== -1) {
            router.push(`postit/${props.id}`);
        }
    }
    if (props.link === "" || props.link === undefined || props.link === null) {
        link = "/";
    }
    const linkDisplayText = props.linkText === "" ? props.link : props.linkText;
    return (
        <div onClick={clickHandler}>
            <div
                className="card postIt"
                style={{ width: "18rem", backgroundColor: "yellow" }}
            >
                <div className="card-body">
                    <h5 className="card-title">
                        <strong>{props.title}</strong>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {props.subtitle}
                    </h6>
                    <p className="card-text">{props.text}</p>
                    {link === "/" ? (
                        ""
                    ) : (
                        <HoverLink link={link} linktext={linkDisplayText} />
                    )}
                </div>
            </div>
        </div>
    );
}
