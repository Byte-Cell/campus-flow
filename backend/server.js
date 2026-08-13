import express from "express";
import resources from "./data/resources.js";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.json({
        message: "Campus Flow API is running."
    });
});

app.get("/api/resources", (req, res) => {
    res.json(resources);
});

app.get("/api/resources/:id", (req, res) => {
    const resource = resources.find(
        (resource) => resource.id === Number(req.params.id)
    );

    if (!resource) {
        return res.status(404).json({
            message: "Resource not found",
        });
    }

    res.json(resource);
});

app.listen(PORT, () => {
    console.log(`Campus Flow API running on port ${PORT}`);
});