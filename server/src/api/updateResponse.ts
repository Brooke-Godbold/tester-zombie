import { ResponseUpdate } from "@common/types/responseUpdate.types";
import { Express } from "express";
import { ResponseRegistry, updateResponseRegistry } from "../store/responseRegistry";
import { registerEndpoint } from "./registerEndpoint";

export function updateResponse(app: Express) {
  app.post("/api/update-response", async (req, res) => {
    const responseUpdate: ResponseUpdate = req.body;

    if (!ResponseRegistry.has(responseUpdate.endpoint)) {
      const fullEndpoint: string = `${process.env.BASE_API}${responseUpdate.endpoint}`;
      registerEndpoint(app, responseUpdate.response.config, fullEndpoint);
    }

    updateResponseRegistry(
        responseUpdate.endpoint,
        responseUpdate.response,
    );

    res.json({
        message: "Response Updated"
    });
  });
}