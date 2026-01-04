import { Express } from "express";
import { readResponses } from "../build/readResponses";

export function getResponseList(app: Express, baseDir: string) {
  app.get("/api/list-responses", async (_req, res) => {
    try {
      const responses = await readResponses(baseDir);
      res.json(responses);
    } catch (err) {
      console.error("Failed to retrieve responses list:", err);
      res.status(500).json({ error: "Failed to retrieve responses list" });
    }
  });
}