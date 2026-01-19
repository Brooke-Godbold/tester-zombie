import { Express, Response } from "express";
import { ResponseRegistry } from "../store/responseRegistry";
import { ResponseConfig } from "@common/types/responseConfig.types";

export function registerEndpoint(app: Express, config: ResponseConfig, fullEndpoint: string) {
    if (config.method === "POST") app.post(fullEndpoint, (_req, res) => endpointHandler(config, res));
    else if (config.method === "GET") app.get(fullEndpoint, (_req, res) => endpointHandler(config, res));
    else if (config.method === "PUT") app.put(fullEndpoint, (_req, res) => endpointHandler(config, res));
    else if (config.method === "DELETE") app.delete(fullEndpoint, (_req, res) => endpointHandler(config, res));
}

function endpointHandler(config: ResponseConfig, res: Response) {
    const runtimeResponse = ResponseRegistry.get(config.endpoint);

    if (!runtimeResponse) {
        res.status(404).json({ error: "Response not found" });
        return;
    }

    res.statusCode = runtimeResponse.config.statusCode;
    res.json(runtimeResponse.response);
}