import { useLocation } from "react-router-dom";
import { AppHeaderContainer, AppHeaderText, AppOptionLink, AppOptions } from "./AppHeader.styles";

export function AppHeader() {
    const location = useLocation();

    return (
        <AppHeaderContainer>
            <AppHeaderText>Tester Zombie</AppHeaderText>
            <AppOptions>
                <AppOptionLink to="/responses" $isActive={location.pathname.includes("/responses")}>Endpoints</AppOptionLink>
                <AppOptionLink to="/requests" $isActive={location.pathname.includes("/requests")}>Request Logs</AppOptionLink>
            </AppOptions>
        </AppHeaderContainer>
    );
}