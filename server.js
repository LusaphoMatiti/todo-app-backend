import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiTasks from "./routes/tasks.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "https://my-daily-task-dun.vercel.app", // Production frontend
  "http://localhost:5173", // Local development
];

// Specify your frontend URL

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
app.use(express.json());

app.use("/tasks", apiTasks);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
