import { ResponseUpdate } from "@common/types/responseUpdate.types";
import { Express } from "express";
import path from "path";
import { promises as fs } from "fs";
import { ResponseConfig } from "@common/types/responseConfig.types";
import { writeFile } from "../utils/fileUtils";
import { updateResponseRegistry } from "../store/responseRegistry";

export function updateResponse(app: Express, baseDir: string) {
  app.post("/api/update-response", async (req, res) => {
    const responseUpdate: ResponseUpdate = req.body;
    const folderPath: string = path.join(baseDir, responseUpdate.folderName);
    const configFilePath = path.join(folderPath, `${responseUpdate.folderName}.config.json`);
    const responseFilePath = path.join(folderPath, `${responseUpdate.folderName}.response.json`);

    try {
        const config: ResponseConfig = JSON.parse(
            await fs.readFile(configFilePath, "utf-8")
        );
        config.statusCode = responseUpdate.statusCode;
        await writeFile(configFilePath, config);
        await writeFile(responseFilePath, responseUpdate.response);

        updateResponseRegistry(
            config.endpoint,
            config.statusCode,
            responseUpdate.response
        );

        res.json({
            message: "Response Updated"
        });
    } catch (err) {
        console.error("Failed to update response:", err);
        res.status(500).json({ error: "Failed to update response" });
    }
  });
}