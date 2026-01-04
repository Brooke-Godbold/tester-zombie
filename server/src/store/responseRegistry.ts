import { RuntimeResponse } from "@common/types/runtimeResponse.types";

export const ResponseRegistry = new Map<string, RuntimeResponse>();

export function updateResponseRegistry(
    endpoint: string,
    statusCode: number,
    body: Record<string, any>
) {
    ResponseRegistry.set(endpoint, {
        statusCode: statusCode,
        body: body
    });
}