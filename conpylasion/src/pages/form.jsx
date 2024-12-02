"use client";
import { useState } from "react";

export default function FormAdd() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const addUser = async (e) => {
        e.preventDefault();
        const rep = await fetch("http://localhost:4444/api/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                surname: surname,
            }),
        });
        if (rep.status === 200) {
            window.location.replace("/");
        }
    };

    return (
        <form onSubmit={addUser}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
            />
            <button type="submit">Add user</button>
        </form>
    );
}
