import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Optionally, run a simple query
const [results] = await db.query("SELECT 1");
console.log("Database query successful:", results);

export default db;
