import { RequestLogItem } from "@common/types/requestLogItem.types";

const requestLogs: RequestLogItem[] = [];

export function addRequestLog(log: RequestLogItem) {
    requestLogs.push(log);
}

export function getRequestLogs(): RequestLogItem[] {
    return requestLogs;
}

export function clearRequestLogs() {
    requestLogs.length = 0;
}