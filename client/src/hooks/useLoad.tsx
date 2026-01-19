import { useContext } from "react";
import { LoadContext } from "../store/loadContext";

export function useLoad() {
    const context = useContext(LoadContext);
    if (!context) {
        throw new Error("useLoad must be used within LoadProvider");
    }
    return context;
}