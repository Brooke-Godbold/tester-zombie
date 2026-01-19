import "dotenv/config";
import { promises as fs } from "fs";
import path from "path";
import { Express } from "express";
import { ResponseConfig } from "@common/types/responseConfig.types";
import { updateResponseRegistry } from "../store/responseRegistry";
import { registerEndpoint } from "../api/registerEndpoint";
import { ResponseItem } from "@common/types/responseItem.types";

export async function tryRegisterEndpoint(
    app: Express,
    folderPath: string
) {
    const files = await fs.readdir(folderPath);

    const configFile = files.find(f => f.endsWith(".config.json"));
    const responseFile = files.find(f => f.endsWith(".response.json"));

    if (!configFile) console.log(`No Config found in folder ${folderPath}!`);
    if (!responseFile) console.log(`No response found in folder ${folderPath}!`);

    if (!configFile || !responseFile) return;

    const configPath = path.join(folderPath, configFile);
    const responsePath = path.join(folderPath, responseFile);

    const config: ResponseConfig = JSON.parse(
        await fs.readFile(configPath, "utf-8")
    );
    const fullEndpoint: string = `${process.env.BASE_API}${config.endpoint}`;

    const responseJson = JSON.parse(
        await fs.readFile(responsePath, "utf-8")
    );

    const response: ResponseItem = {
        config: config,
        response: responseJson
    }
    updateResponseRegistry(
        config.endpoint,
        response
    );

    registerEndpoint(app, config, fullEndpoint);

    console.log(`Registered GET ${fullEndpoint}`);
}