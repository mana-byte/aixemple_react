import PostIt from "../postit";
import { DeleteForm } from "./form.jsx";
import UpdateForm from "./form.jsx";

export default async function Index(context) {
    const { params } = await context;
    const { id } = await params;

    const postIt = await fetch(`http://localhost:4444/PostIts/${id}`, {
        cache: "no-store",
    })
        .then((res) => res.json())
        .catch((e) => console.log(e));
    if (!postIt) {
        return (
            <PostIt
                id={-1}
                title="Error"
                text="PostIt not found"
                subtitle=""
                link=""
                linkText=""
            />
        );
    }

    return (
        <div>
            <UpdateForm
                id={postIt.id}
                title={postIt.title}
                text={postIt.text}
                subtitle={postIt.subtitle}
                link={postIt.link}
                linkText={postIt.linkText}
            />
            <DeleteForm id={postIt.id} />
        </div>
    );
}
