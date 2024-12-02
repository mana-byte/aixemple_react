import express from "express";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import model from "./model.js";
import cors from "cors";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const hostname = "127.0.01";
const port = 4444;

app.use(express.static(`${__dirname}/../out/`));
app.use(express.json());
app.use(cors()); 

app.get("/", (req, res) => {
	res.statusCode = 200;
	res.sendFile("index.html", { root: `${__dirname}/../out` });
});

app.get("/api/users", async (req, res) => {
	try {
		const data = await model.model.User.findAll();
		const jsonData = data.map((user) => user.toJSON());
		res.statusCode = 200;
		res.json(jsonData);
	} catch (e) {
		res.statusCode = 500;
		console.log(e);
		res.json({ error: "Internal server error" });
	}
});

app.post("/api/create", async (req, res) => {
    console.log(req.body);
	const { name, surname } = req.body;
	try {
		const data = await model.model.User.create({
			name: name,
			surname: surname,
		});
		res.statusCode = 201;
		res.json(data.toJSON());
	} catch (e) {
		res.statusCode = 500;
		console.log(e);
		res.json({ error: "Internal server error" });
	}
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
