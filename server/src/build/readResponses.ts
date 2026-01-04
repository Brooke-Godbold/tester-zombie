import { ResponseConfig } from "@common/types/responseConfig.types";
import { ResponseItem } from "@common/types/responseItem.types";
import { promises as fs } from "fs";
import path from "path";

export async function readResponses(dir: string): Promise<ResponseItem[]> {
    const items: ResponseItem[] = [];

    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        if (!entry.isDirectory()) continue;

        const folderPath = path.join(dir, entry.name);

        const files = await fs.readdir(folderPath);

        const configFile = files.find(f => f.endsWith(".config.json"));
        const responseFile = files.find(f => f.endsWith(".response.json"));

        if (configFile && responseFile) {
            const config: ResponseConfig = JSON.parse(await fs.readFile(path.join(folderPath, configFile), "utf-8"));
            const response = JSON.parse(await fs.readFile(path.join(folderPath, responseFile), "utf-8"));

            items.push({
                folderName: entry.name,
                config,
                response
            });
        }

        const nestedItems = await readResponses(folderPath);
        items.push(...nestedItems);
    }

    return items;
}