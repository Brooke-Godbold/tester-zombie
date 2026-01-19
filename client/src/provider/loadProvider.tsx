import { useState } from "react";
import { LoadContext } from "../store/loadContext";

export function LoadProvider({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState<Boolean>(false);

    return (
        <LoadContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadContext.Provider>
    )
}