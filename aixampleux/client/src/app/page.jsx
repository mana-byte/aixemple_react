import Image from "next/image";
import styles from "./page.module.css";
import PostIt from "./postit/postit";

const postItCorrect = (postIt) => {
    const template = {
        id: 0,
        title: "",
        text: "",
        subtitle: "",
        link: "",
        linkText: "",
    };
    return {
        id: typeof postIt.id === "number" ? postIt.id : template.id,
        title: typeof postIt.title === "string" ? postIt.title : template.title,
        text: typeof postIt.text === "string" ? postIt.text : template.text,
        subtitle:
            typeof postIt.subtitle === "string" ? postIt.subtitle : template.subtitle,
        link: typeof postIt.link === "string" ? postIt.link : template.link,
        linkText:
            typeof postIt.linkText === "string" ? postIt.linkText : template.linkText,
    };
};

export default async function Index() {
    const postIt = await fetch("http://localhost:4444/PostIts").then((res) =>
        res.json(),
    );
    console.log(postIt, "postIt");

    return (
        <div>
            {postIt.map((postIt) => {
                const postItCorrected = postItCorrect(postIt);
                try {
                    return (
                        <PostIt
                            key={postItCorrected.id}
                            title={postItCorrected.title}
                            text={postItCorrected.text}
                            subtitle={postItCorrected.subtitle}
                            link={postItCorrected.link}
                            linkText={postItCorrected.linkText}
                        />
                    );
                } catch (e) {
                    console.log(e);
                }
            })}
        </div>
    );
}
