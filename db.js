import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();
const db = mysql.createPool({
  host: process.env.DB_HOST || "autorack.proxy.rlwy.net", // Railway's host
  user: process.env.DB_USER || "root", // Your MySQL user (root)
  password: process.env.DB_PASSWORD || "", // Leave empty if there's no password
  database: process.env.DB_NAME || "railway", // Ensure this matches your Railway DB name
  port: process.env.DB_PORT || 57525, // Railway's port for MySQL
  ssl: {
    rejectUnauthorized: false, // To handle SSL issues
  },
});

export default db;
