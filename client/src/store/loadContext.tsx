import { createContext } from "react";

type LoadState = {
    loading: Boolean;
    setLoading: (loading: Boolean) => void;
};

export const LoadContext = createContext<LoadState>({
    loading: false,
    setLoading: () => {},
});