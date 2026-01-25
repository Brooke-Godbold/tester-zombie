import { ResponseItem } from "@common/types/responseItem.types";

export const ResponseRegistry = new Map<string, ResponseItem>();

export function updateResponseRegistry(
    endpoint: string,
    response: ResponseItem,
) {
    ResponseRegistry.set(endpoint, response);
}

export function deleteFromResponseRegistry(
    endpoint: string,
) {
    ResponseRegistry.delete(endpoint)
}