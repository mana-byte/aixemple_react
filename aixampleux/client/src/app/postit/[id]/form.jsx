"use client";
import { useRouter } from "next/router";

export default function DeleteForm(props) {
    const deletePostit = async (e) => {
        e.preventDefault();
        const router = useRouter();
        const rep = await fetch(`http://localhost:4444/api/delete/${props.id}`, {
            method: "DELETE",
        });
        console.log(rep);
        router.push("/../..");
    };

    return (
        <div>
            <button onClick={deletePostit} type="button">
                Delete
            </button>
        </div>
    );
}
