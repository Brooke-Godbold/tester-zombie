export type RequestLogItem = {
    method: string;
    path: string;
    query: Record<string, any>;
    params: Record<string, any>;
    body: Record<string, any>;
    headers: Record<string, any>;
    timestamp: number;
}