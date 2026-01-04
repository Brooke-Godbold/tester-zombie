import { promises as fs } from "fs";
import path from "path";
import { pathToFileURL } from "url";

export async function tryRunGenerator(folderPath: string, folderName: string) {
    const jsGeneratorPath = path.join(
        folderPath.replace("\\src\\", "\\dist\\"),
        `${folderName}.generate.js`
    );

    try {
        await fs.access(jsGeneratorPath);
    } catch {
        console.log(`No Response Generator found in folder ${jsGeneratorPath}, skipping response generation...`);
        return;
    }

    try {
        const module = await import(pathToFileURL(jsGeneratorPath).href);

        if (typeof module.generate === "function") {
            console.log(`Running generator: ${jsGeneratorPath}`);
            await module.generate();
        } else {
            console.warn(`No generate() export in ${jsGeneratorPath}`);
        }
    } catch (err) {
        console.error(`Failed to run generator ${jsGeneratorPath}:`, err);
    }
}