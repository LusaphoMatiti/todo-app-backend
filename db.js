import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME,
  connectionLimit: 10, // You can increase the connection limit if needed
  waitForConnections: true,
  connectTimeout: 10000, // Increase the timeout (in milliseconds)
  queueLimit: 0,
});

export default db;
