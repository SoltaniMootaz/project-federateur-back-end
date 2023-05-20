import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import companyRoutes from "./routes/companyRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
const app = express();
app.use(cors());
app.use(cors({
    origin: "http://localhost:4200",
}));
app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/company", companyRoutes);
app.use("/project", projectRoutes);
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map