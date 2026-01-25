import { promises as fs } from "fs";
import path from "path";
import { Express } from "express";
import { tryRegisterEndpoint } from "./tryRegisterEndpoint";
import { tryRunGenerator } from "./tryRunGenerator";

export async function loadResponses(app: Express, baseDir: string) {
    try {
        await walkDirectory(app, baseDir);
    } catch (err: any) {
        if (err.code !== "ENOENT") {
            throw err;
        }

        console.log("No responses directory found, skipping pre-built responses setup")
    }
}

async function walkDirectory(app: Express, dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        if (!entry.isDirectory()) continue;

        const fullPath = path.join(dir, entry.name);

        await tryRunGenerator(fullPath, entry.name);
        await tryRegisterEndpoint(app, fullPath);
        await walkDirectory(app, fullPath);
    }
}