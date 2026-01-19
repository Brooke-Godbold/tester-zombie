import { ResponseItem } from "@common/types/responseItem.types";
import { createContext } from "react";

type ResponseState = {
    responses: ResponseItem[];
    setResponses: (responses: ResponseItem[]) => void;
};

export const ResponseContext = createContext<ResponseState>([] as unknown as ResponseState);