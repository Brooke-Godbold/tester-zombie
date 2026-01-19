import { isResponseItem, ResponseItem } from "./responseItem.types";

export interface ResponseItemsRecord {
    responseItems: ResponseItem[];
}

export function isResponseItemsRecord(obj: any): obj is ResponseItemsRecord {
    return (
        obj &&
        typeof obj === "object" &&
        Array.isArray(obj.responseItems) &&
        obj.responseItems.every(isResponseItem)
    );
}