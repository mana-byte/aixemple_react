import express from "express";
import cors from "cors";
import api from "./app.js";

const app = express();

const hostname = "127.0.0.1";
const port = 4444;

app.use(cors());
app.use(express.json());

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

app.get("/PostIts/:id",async (req, res) => {
	try {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html; charset=utf-8");
        const json = await api.findPostIt(req.params.id);
        res.json(json);
	} catch (e) {
		res.statusCode = 500;
		console.log(e);
		res.end("Internal server error");
	}
});

app.post("/api/create", (req, res) => {
    console.log(req.body);
	try {
        const { title, text, subtitle, link, linkText } = req.body;
		res.statusCode = 200;
		res.json(api.newPostIt(title, text, subtitle, link, linkText));
	} catch (e) {
		res.statusCode = 500;
		console.log(e);
		res.end("Internal server error");
	}
});

app.post("/api/update", (req, res) => {
	try {
        const { id, title, text, subtitle, link, linkText } = req.body;
		res.statusCode = 200;
		res.end(api.updatePostIt(id, title, text, subtitle, link, linkText));
	} catch (e) {
		res.statusCode = 500;
		console.log(e);
		res.end("Internal server error");
	}
});

app.use("/api/delete",async (req, res) => {
    const id = req.query.id;
	try {
		res.json(await api.deletePostIt(id));
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
