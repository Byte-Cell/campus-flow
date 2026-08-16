import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, "resources_data.sql");

const dump = fs.readFileSync(dataPath, "utf8");

const copyStart = "COPY public.resources";
const startIndex = dump.indexOf(copyStart);

if (startIndex === -1) {
    throw new Error("Could not find resources COPY section.");
}

const dataStart = dump.indexOf("\n", startIndex) + 1;
const dataEnd = dump.indexOf("\n\\.", dataStart);

if (dataEnd === -1) {
    throw new Error("Could not find end of resources data.");
}

const data = dump
    .slice(dataStart, dataEnd)
    .trim();

const rows = data
    .split("\n")
    .filter(Boolean)
    .map((line) => {
        const [
            id,
            title,
            category,
            description,
            audience,
            url,
            content,
        ] = line.split("\t");

        return {
            id: Number(id),
            title,
            category,
            description,
            audience: JSON.parse(audience),
            url,
            content: JSON.parse(content),
        };
    });

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
});

try {
    await client.connect();

    console.log("Connected to PostgreSQL.");
    console.log(`Preparing to seed ${rows.length} resources.`);

    const existing = await client.query(
        "SELECT COUNT(*) FROM resources"
    );

    if (Number(existing.rows[0].count) > 0) {
        console.log("Resources already exist. Skipping seed.");
        process.exit(0);
    }

    for (const resource of rows) {
        await client.query(
            `INSERT INTO resources
                (id, title, category, description, audience, url, content)
             VALUES
                ($1, $2, $3, $4, $5, $6, $7)`,
            [
                resource.id,
                resource.title,
                resource.category,
                resource.description,
                JSON.stringify(resource.audience),
                resource.url,
                JSON.stringify(resource.content),
            ]
        );
    }

    await client.query(
        `SELECT setval(
            'public.resources_id_seq',
            (SELECT MAX(id) FROM resources),
            true
        )`
    );

    console.log(`Successfully seeded ${rows.length} resources.`);
} catch (error) {
    console.error("Database seeding failed:", error);
    process.exitCode = 1;
} finally {
    await client.end();
}