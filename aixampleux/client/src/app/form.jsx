"use client";
import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

export default function FormAdd() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [link, setLink] = useState("");
    const [linkText, setLinkText] = useState("");

    const createPostIt = async (e) => {
        if (title === "") {
            alert("Title cannot be empty");
            return;
        }
        console.log("createPostIt");
        e.preventDefault();
        const rep = await fetch("http://localhost:4444/api/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                text: text,
                subtitle: subtitle,
                link: link,
                linkText: linkText,
            }),
        });
        if (rep.status === 200) {
            window.location.replace("/");
        }
    };

    return (
        <div
            className="card postIt"
            style={{ width: "18rem", backgroundColor: "yellow" }}
        >
            <form onSubmit={createPostIt} className="center">
                <h4>
                    <strong>new Post It </strong>
                </h4>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Subtitle"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                />
                <textarea
                    placeholder="content"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Text to display for link"
                    value={linkText}
                    onChange={(e) => setLinkText(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
