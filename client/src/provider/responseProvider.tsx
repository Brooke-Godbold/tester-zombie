import { ResponseItem } from "@common/types/responseItem.types";
import { useState } from "react";
import { ResponseContext } from "../store/responseContext";

export function ResponseProvider({ children }: { children: React.ReactNode }) {
    const [responses, setResponses] = useState<ResponseItem[]>([]);

    return (
        <ResponseContext.Provider value={{ responses, setResponses }}>
            {children}
        </ResponseContext.Provider>
    )
}