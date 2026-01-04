import { Express } from "express";
import { ResponseRegistry } from "../store/responseRegistry";
import { ResponseConfig } from "@common/types/responseConfig.types";

export function registerEndpoint(app: Express, config: ResponseConfig, fullEndpoint: string) {
    app.get(fullEndpoint, (_req, res) => {
        const runtimeResponse = ResponseRegistry.get(config.endpoint);

        if (!runtimeResponse) {
            res.status(404).json({ error: "Response not found" });
            return;
        }

        res.statusCode = runtimeResponse.statusCode;
        res.json(runtimeResponse.body);
    });
}