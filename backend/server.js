import express from "express";
import pool from "./db/database.js";
import helmet from "helmet";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

function isValidId(id) {
    return Number.isInteger(Number(id)) && Number(id) > 0;
}

app.use(helmet());
app.use(express.json({ limit: "10kb" }));

app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:5173",
    })
);

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
    });
});

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

app.get("/api/resources/:id", async (req, res) => {
    try {
        if (!isValidId(req.params.id)) {
            return res.status(400).json({
                error: "Resource ID must be a positive integer",
            });
        }

        const result = await pool.query(
            "SELECT * FROM resources WHERE id = $1",
            [req.params.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: "Resource not found",
            });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to fetch resource",
        });
    }
});

app.post("/api/resources", async (req, res) => {
    try {
        const {
            title,
            category,
            description,
            audience = [],
            url = "",
            content = [],
        } = req.body;

        if (!title || !category || !description) {
            return res.status(400).json({
                error: "Title, category, and description are required",
            });
        }

        const result = await pool.query(
            `INSERT INTO resources
                (title, category, description, audience, url, content)
             VALUES
                ($1, $2, $3, $4, $5, $6)
             RETURNING *`,
            [
                title,
                category,
                description,
                JSON.stringify(audience),
                url,
                JSON.stringify(content),
            ]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to create resource",
        });
    }
});

app.put("/api/resources/:id", async (req, res) => {
    try {
        if (!isValidId(req.params.id)) {
            return res.status(400).json({
                error: "Resource ID must be a positive integer",
            });
        }

        const {
            title,
            category,
            description,
            audience = [],
            url = "",
            content = [],
        } = req.body;

        if (!title || !category || !description) {
            return res.status(400).json({
                error: "Title, category, and description are required",
            });
        }

        const result = await pool.query(
            `UPDATE resources
             SET
                title = $1,
                category = $2,
                description = $3,
                audience = $4,
                url = $5,
                content = $6
             WHERE id = $7
             RETURNING *`,
            [
                title,
                category,
                description,
                JSON.stringify(audience),
                url,
                JSON.stringify(content),
                req.params.id,
            ]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: "Resource not found",
            });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to update resource",
        });
    }
});

app.delete("/api/resources/:id", async (req, res) => {
    try {
        if (!isValidId(req.params.id)) {
            return res.status(400).json({
                error: "Resource ID must be a positive integer",
            });
        }
        
        const result = await pool.query(
            "DELETE FROM resources WHERE id = $1 RETURNING *",
            [req.params.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: "Resource not found",
            });
        }

        res.json({
            message: "Resource deleted successfully",
            resource: result.rows[0],
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to delete resource",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});