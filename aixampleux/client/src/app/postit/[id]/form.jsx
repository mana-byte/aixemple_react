"use client";
import { useState } from "react";
import { useReportWebVitals } from "next/web-vitals";

export function DeleteForm(props) {
	useReportWebVitals((metric) => {
		console.log(metric);
	});
	const deletePostit = async (e) => {
		e.preventDefault();
		// query
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

export default function UpdateForm(props) {
	const [title, setTitle] = useState(props.title);
	const [text, setText] = useState(props.text);
	const [subtitle, setSubtitle] = useState(props.subtitle);
	const [link, setLink] = useState(props.link);
	const [linkText, setLinkText] = useState(props.linkText);

	const updatePost = async (e) => {
		e.preventDefault();
		const rep = await fetch("http://localhost:4444/api/update", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: props.id,
				title: title,
				text: text,
				subtitle: subtitle,
				link: link,
				linkText: linkText,
			}),
		});
		if (rep.status === 200) {
			window.location.replace(`/postit/${props.id}`);
		}
	};

	return (
		<div
			className="card postIt"
			style={{ width: "18rem", backgroundColor: "yellow" }}
		>
			<form onSubmit={updatePost} className="center">
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
