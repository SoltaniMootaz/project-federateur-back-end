import express from "express";
import mysql from "mysql";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";
const app: express.Application = express();

app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

const port: number = 3000;
app.listen(port, () => {
  console.log(`Server running on port localhost:${port}`);
});
