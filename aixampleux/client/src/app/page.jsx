import PostIt from "./postit/postit";
import FormAdd from "./form";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";

const postItCorrect = (postIt) => {
    const template = {
        id: -1,
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
    const postIt = await fetch("http://localhost:4444/PostIts", {
        cache: "no-store",
    }).then((res) =>
        res.json(),
    );

    return (

        <div className={styles.myPageContainer}>
            <div className={styles.navbar}>
                <h1 className={styles.navTitle}>gestion des post-its</h1>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.cardContainer}>
                {postIt.map((postIt) => {
                    const postItCorrected = postItCorrect(postIt);
                    try {
                        return (
                            <PostIt
                                key={postItCorrected.id}
                                id={postItCorrected.id}
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
            <FormAdd />
            </div>
        </div>
    );
}
