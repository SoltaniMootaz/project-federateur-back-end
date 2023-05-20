import express from "express";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port localhost:${port}`);
});
//# sourceMappingURL=app.js.map