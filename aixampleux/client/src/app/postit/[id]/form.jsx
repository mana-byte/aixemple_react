"use client";
import { useRouter } from "next/router";

export default function DeleteForm(props) {
    const deletePostit = async (e) => {
        e.preventDefault();
        const rep = await fetch(`http://localhost:4444/api/delete?id=${props.id}`, {
            method: "DELETE",
        });
        console.log(rep);
        if (rep.status === 200) {
            window.location.replace("/");
        }
    };

    return (
        <div>
            <button onClick={deletePostit} type="button">
                Delete
            </button>
        </div>
    );
}
