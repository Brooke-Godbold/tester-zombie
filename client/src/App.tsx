import { Toaster } from "react-hot-toast";
import { AppContainer, AppHeader } from "./App.styles";
import { ResponseListPage } from "./page/ResponseListPage.page";
import GlobalStyles from "./styles/GlobalStyles";

export default function App() {
    return (
        <>
            <GlobalStyles />
            <Toaster
                toastOptions={{
                    style: {
                        boxShadow: "0px 0px 7px 1px rgb(31, 31, 31, 0.2)",
                        backgroundColor: "var(--color-brand-700)",
                        color: "var(--color-brand-300)",
                    },
                    error: {
                        duration: Infinity,
                        style: {
                            backgroundColor: "var(--color-red-800)",
                            color: "var(--color-red-100)",
                        },
                    },
                }}
            />
            <AppContainer>
                <AppHeader>Tester Zombie</AppHeader>
                <ResponseListPage />
            </AppContainer>
        </>
    );
}