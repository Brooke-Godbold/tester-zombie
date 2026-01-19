import { ResponseConfig } from "./responseConfig.types";

export interface ResponseItem {
  config: ResponseConfig;
  response: Record<string, any>;
}

export function isResponseItem(obj: any): obj is ResponseItem {
  return (
    obj &&
    typeof obj === "object" &&
    typeof obj.config === "object" &&
    typeof obj.response === "object"
  );
}