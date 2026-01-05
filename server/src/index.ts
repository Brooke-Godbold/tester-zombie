import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { loadResponses } from "./build/loadResponse";
import { getResponseList } from "./api/getResponseList";
import { updateResponse } from "./api/updateResponse";
import { requestLogger } from "./middleware/requestLogger";
import requestRoutes from "./api/requestRoutes";

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(express.json());
app.use(requestLogger);

const responseDir = path.join(__dirname, "response");

loadResponses(app, responseDir)
.then(() => {
    getResponseList(app, responseDir);
    updateResponse(app, responseDir);

    app.use("/api", requestRoutes);

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    })
}).catch(err => {
    console.error("Failed to load responses:", err);
})
