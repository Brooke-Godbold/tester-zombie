import { RequestLogItem } from "@common/types/requestLogItem.types";

const SKIP_HEADERS = [
  "host",
  "content-length",
  "connection",
  "accept-encoding"
];

function formatHeaders(headers: Record<string, any>): string {
  return Object.entries(headers)
    .filter(([key, value]) => {
      if (!value) return false;
      return !SKIP_HEADERS.includes(key.toLowerCase());
    })
    .map(
      ([key, value]) => `-H "${key}: ${String(value)}"`
    )
    .join(" ");
}

export function requestLogToCurl(
  log: RequestLogItem,
  baseUrl = "http://localhost:3000"
): string {
  const method = log.method.toUpperCase();

  const url = `${baseUrl}${log.path}`;

  const headers = formatHeaders(log.headers);

  const body =
    log.body && Object.keys(log.body).length > 0
      ? `-d '${JSON.stringify(log.body)}'`
      : "";

  return [
    "curl",
    `-X ${method}`,
    headers,
    body,
    `"${url}"`
  ]
    .filter(Boolean)
    .join(" ");
}