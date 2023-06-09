import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import companyRoutes from "./routes/companyRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
const app: express.Application = express();
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/company", companyRoutes);
app.use("/project", projectRoutes);
app.use("/task", taskRoutes);

const port: number = 3000;
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
