import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiTasks from "./routes/tasks.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Specify your frontend URL

app.use(cors({ origin: "*" }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Todo API!"); // Response for root URL
});

app.use("/tasks", apiTasks);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

// netstat -ano | findstr :PORT_NUMBER
// taskkill /PID 11288 /F
