import { Express } from "express";
import { deleteFromResponseRegistry, ResponseRegistry, updateResponseRegistry } from "../store/responseRegistry";

export function deleteResponse(app: Express) {
  app.post("/api/delete-response", async (req, res) => {
    const endpoint = req.query.endpoint;

    if (!endpoint) {
        return res.status(400).json({
            message: "Endpoint not supplied"
        })
    }

    if (!ResponseRegistry.has(endpoint.toString())) {
        return res.status(404).json({
            message: "Endpoint does not exist"
        })
    }

    deleteFromResponseRegistry(endpoint.toString())

    res.json({
        message: "Response Updated"
    });
  });
}