import { ResponseItem } from "@common/types/responseItem.types";
import { ResponseRegistry } from "../store/responseRegistry";

export async function readResponses(): Promise<ResponseItem[]> {
    const items: ResponseItem[] = [];

    ResponseRegistry.forEach((response) => {
        const item: ResponseItem = {
            config: response.config,
            response: response.response
        }
        items.push(item);
    });

    return items;
}