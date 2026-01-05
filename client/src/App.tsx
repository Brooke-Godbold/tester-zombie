import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppContainer, AppPageContainer } from "./App.styles";
import { ResponseListPage } from "./page/response-list/ResponseListPage.page";
import GlobalStyles from "./styles/GlobalStyles";
import { RequestListPage } from "./page/request-list/RequestListPage.page";
import { AppHeader } from "./component/app-header/AppHeader.component";

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
                <BrowserRouter>
                    <AppHeader />
                    <AppPageContainer>
                        <Routes>
                            <Route path="responses" element={<ResponseListPage />} />
                            <Route path="requests" element={<RequestListPage />} />
                            <Route path="*" element={<Navigate replace to="responses" />} />
                        </Routes>
                    </AppPageContainer>
                </BrowserRouter>
            </AppContainer>
        </>
    );
}