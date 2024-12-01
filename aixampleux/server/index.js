import express from "express";  // might change, thus was not added to package.json for now

import api from "./app.js";

const app = express();

const hostname = "127.0.0.1";
const port = 4444;

app.get("/PostIts", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(api.getPostIts());
});

app.get("/PostIts/:id", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(api.findPostIt(req.params.id));
});

app.post("/api/create", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(api.newPostIt(req.query.title, req.query.content));
});

app.post("/api/update", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(api.updatePostIt(req.query.id, req.query.title, req.query.content));
});

app.use("/api/delete", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(api.deletePostIt(req.query.id));
});

app.use(function (req, res) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("Not found");
});

app.listen(port, hostname);
