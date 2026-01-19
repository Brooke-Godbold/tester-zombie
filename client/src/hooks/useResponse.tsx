import { useContext } from "react";
import { ResponseContext } from "../store/responseContext";

export function useResponse() {
    const context = useContext(ResponseContext);
    if (!context) {
        throw new Error("useResponse must be used within ResponseProvider");
    }
    return context;
}