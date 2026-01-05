import { NextFunction, Request, Response } from "express";
import { addRequestLog } from "../store/requestStore";

const IGNORE_PATHS = [
    "/api/request",
    "/api/list-responses",
    "/api/update-response"
]

export function requestLogger(
    req: Request,
    _res: Response,
    next: NextFunction
) {
    if (IGNORE_PATHS.some(path => req.path.includes(path))) {
        next();
        return;
    }

    addRequestLog({
        method: req.method,
        path: req.originalUrl,
        query: req.query,
        params: req.params,
        body: req.body,
        headers: req.headers,
        timestamp: Date.now(),
    });

    next();
}