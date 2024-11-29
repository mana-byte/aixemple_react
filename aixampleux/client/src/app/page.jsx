import Image from "next/image";
import styles from "./page.module.css";
import PostIt from "./postit/postit";

export default function Index() {
    const links = [
        { id: 2, url: "https://www.google.com", text: "Google" },
        { id: 3, url: "https://www.bing.com", text: "Bing" },
    ];
    const postIt = [ 
        { id:1, title: "Remember to check those web sites", links: links }
    ];

    return (
        <div>
        <a href="https://www.google.com">Google</a>
        { postIt.map((postIt) => {
            console.log(postIt);
            return (<PostIt key={postIt.id} title={postIt.title} links={postIt.links} />);
        })}
        </div>
    );
}
