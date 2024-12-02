import styles from "./link.module.css";
import Link from "next/link";

export default function HoverLink(props) {
    return (
        <div className={styles.container}>
            <div>{props.linktext}</div>
            <div className={styles.link}>
                <Link href={props.link} onClick={(e) => e.stopPropagation()}>
                    {props.link}
                </Link>
            </div>
        </div>
    );
}
