import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiTasks from "./routes/tasks.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/tasks", apiTasks);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
