import { ResponseItemsRecord } from "@common/types/responseItemsRecord.types";
import { isResponseItemsRecord } from "../../../common/types/responseItemsRecord.types";

export function uploadResponseItems(file: File): Promise<ResponseItemsRecord> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            try {
                const parsed = JSON.parse(reader.result as string);

                if (!isResponseItemsRecord(parsed)) {
                    throw new Error("Invalid response items record format.");
                }

                resolve(parsed);
            } catch (error) {
                reject(error);
            }
        };

        reader.onerror = () => {
            reject(new Error("Failed to read the file."));
        };

        reader.readAsText(file);
    });
}