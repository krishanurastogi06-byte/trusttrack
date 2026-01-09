import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import { verifyToken, allowRoles } from "./middleware/auth.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("TrustTrack Backend Running");
});

app.get("/api/admin-only", allowRoles("admin"), (req, res) => {
    res.json({ message: "Welcome Admin" });
});

app.get(
    "/api/admin-only",
    verifyToken,
    allowRoles("admin"),
    (req, res) => {
        res.json({ message: "Welcome Admin" });
    }
);

export default app;
