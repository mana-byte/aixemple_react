"user client";
import { useState } from "react";

export default function FormAdd(props) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");


    return (
        <form onSubmit={props.func}>
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
