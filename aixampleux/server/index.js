import express from "express";

import api from "./app.js";

const app = express();

const hostname = "127.0.0.1";
const port = 4444;

app.get("/PostIts", async (req, res) => {
	try {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		res.json(await api.getPostIts());
	} catch (e) {
		res.statusCode = 500;
		console.log(e);
		res.end("Internal server error");
	}
});

app.get("/PostIts/:id", (req, res) => {
    try {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(api.findPostIt(req.body.id));
    } catch (e) {
        res.statusCode = 500;
        console.log(e);
        res.end("Internal server error");
    }
});

app.post("/api/create", (req, res) => {
    try {
        title, text, subtitle, link, linkText = req.body;
        res.statusCode = 200;
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        res.end(api.newPostIt(title, text, subtitle, link, linkText));
    } catch (e) {
        res.statusCode = 500;
        console.log(e);
        res.end("Internal server error");
    }
});

app.post("/api/update", (req, res) => {
    try {
        id, title, text, subtitle, link, linkText = req.body;
        res.statusCode = 200;
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        res.end(api.updatePostIt(id, title, text, subtitle, link, linkText));
    } catch (e) {
        res.statusCode = 500;
        console.log(e);
        res.end("Internal server error");
    }
});

app.use("/api/delete", (req, res) => {
    try {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(api.deletePostIt(req.query.id));
    } catch (e) {
        res.statusCode = 500;
        console.log(e);
        res.end("Internal server error");
    }
});

app.use((req, res) => {
	res.statusCode = 404;
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.end("Not found");
});

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);
