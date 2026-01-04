import { promises as fs } from "fs";
import path from "path";
import { Express } from "express";
import { tryRegisterEndpoint } from "./tryRegisterEndpoint";
import { tryRunGenerator } from "./tryRunGenerator";

export async function loadResponses(app: Express, baseDir: string) {
    await walkDirectory(app, baseDir);
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