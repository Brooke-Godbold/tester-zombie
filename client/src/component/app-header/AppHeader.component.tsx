import { useLocation } from "react-router-dom";
import { AppHeaderContainer, AppHeaderText, AppOptionButton, AppOptions } from "./AppHeader.styles";

export function AppHeader() {
    const location = useLocation();

    return (
        <AppHeaderContainer>
            <AppHeaderText>Tester Zombie</AppHeaderText>
            <AppOptions>
                <AppOptionButton to="/responses" $isActive={location.pathname.includes("/responses")}>Endpoints</AppOptionButton>
                <AppOptionButton to="/requests" $isActive={location.pathname.includes("/requests")}>Request Logs</AppOptionButton>
            </AppOptions>
        </AppHeaderContainer>
    );
}