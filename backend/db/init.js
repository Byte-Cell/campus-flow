import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schemaPath = path.join(__dirname, "schema.sql");
const schema = fs.readFileSync(schemaPath, "utf8");

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

    await client.query(schema);

    console.log("Database schema initialized successfully.");
} catch (error) {
    console.error("Database initialization failed:", error);
    process.exitCode = 1;
} finally {
    await client.end();
}