import Image from "next/image";
import styles from "./page.module.css";
import PostIt from "./postit/postit";

const postItCorrect = (postIt) => {
    const template = {
        id: 0,
        title: "",
        text: "",
        subtitle: "",
        links: [],
    };
    return {
        id: typeof postIt.id === "number" ? postIt.id : template.id,
        title: typeof postIt.title === "string" ? postIt.title : template.title,
        text: typeof postIt.text === "string" ? postIt.text : template.text,
        subtitle:
            typeof postIt.subtitle === "string" ? postIt.subtitle : template.subtitle,
        links: Array.isArray(postIt.links) ? postIt.links : template.links,
    };
};

export default function Index() {
    const links = [
        { id: 2, url: "https://www.google.com", text: "Google" },
        { id: 3, url: "https://www.bing.com", text: "Bing" },
    ];
    const postIt = [
        { id: 1, title: "Remember to check those web sites", links: links },
        { id: 2, title: "Remember to check those web sites", links: [] },
    ];

    return (
        <div>
            <a href="https://www.google.com">Google</a>
            {postIt.map((postIt) => {
                const postItCorrected = postItCorrect(postIt);
                try {
                    return (
                        <PostIt
                            key={postItCorrected.id}
                            title={postItCorrected.title}
                            text={postItCorrected.text}
                            subtitle={postItCorrected.subtitle}
                            links={postItCorrected.links}
                        />
                    );
                } catch (e) {
                    console.log(e);
                }
            })}
        </div>
    );
}
