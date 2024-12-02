import express from "express";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import model from "./model.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const hostname = "127.0.01";
const port = 4444;

app.use(express.static(`${__dirname}/public`));
app.use(express.json());

app.get("/", (req, res) => {
    // here
	res.sendFile(`${__dirname}/public/index.html`);
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
		res.end("Internal server error");
	}
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
