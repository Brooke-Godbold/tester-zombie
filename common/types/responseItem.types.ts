import { ResponseConfig } from "./responseConfig.types";

export interface ResponseItem {
  folderName: string;
  config: ResponseConfig;
  response: Record<string, any>;
}