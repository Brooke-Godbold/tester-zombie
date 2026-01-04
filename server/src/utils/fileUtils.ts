import { promises as fs } from "fs";

export async function writeFile(filePath: string, json: Record<string, any>) {
    await fs.writeFile(
        filePath,
        JSON.stringify(json, null, 2),
        "utf-8"
    );
}