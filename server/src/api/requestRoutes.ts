import { Router } from "express";
import { clearRequestLogs, getRequestLogs } from "../store/requestStore";

const router = Router();

router.get("/requests", (_req, res) => {
    res.json(getRequestLogs());
});

router.delete("/requests", (_req, res) => {
    clearRequestLogs();
    res.status(204).send();
});

export default router;