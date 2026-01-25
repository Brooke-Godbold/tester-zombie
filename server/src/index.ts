import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { loadResponses } from "./build/loadResponse";
import { getResponseList } from "./api/getResponseList";
import { updateResponse } from "./api/updateResponse";
import { requestLogger } from "./middleware/requestLogger";
import requestRoutes from "./api/requestRoutes";
import { deleteResponse } from "./api/deleteResponse";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://10.0.2.2:3000",
    "http://127.0.0.1:3000",
    /^http:\/\/192\.168\.\d+\.\d+:3000$/,
    /^http:\/\/10\.\d+\.\d+\.\d+:3000$/
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));
app.use(express.json());
app.use(requestLogger);

const responseDir = path.join(__dirname, "response");

loadResponses(app, responseDir)
.then(() => {
    getResponseList(app);
    updateResponse(app);
    deleteResponse(app);

    app.use("/api", requestRoutes);

    app.listen(Number(PORT), '0.0.0.0', () => {
        console.log(`Server running at http://localhost:${PORT}`);
    })
}).catch(err => {
    console.error("Failed to load responses:", err);
})
