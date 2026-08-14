import express from "express";
import pool from "./db/database.js";

const app = express();
const PORT = 5000;

app.get("/api/resources", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM resources ORDER BY id"
        );

        res.json(result.rows);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to fetch resources",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});