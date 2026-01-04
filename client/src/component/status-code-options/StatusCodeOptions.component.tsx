import { StatusCodeButton } from "../status-code-button/StatusCodeButton.component";
import { StatusCodeOptionItem, StatusCodeOptionsList } from "./StatusCodeOptions.styles";

type StatusCodeListProps = {
    setUpdatedStatusCode: (endpoint: number) => void;
    currentStatusCode: number;
}

export function StatusCodeOptions({ setUpdatedStatusCode, currentStatusCode }: StatusCodeListProps) {
    return (
        <StatusCodeOptionsList>
            <StatusCodeOptionItem key={200}><StatusCodeButton statusCode={200} setUpdatedStatusCode={setUpdatedStatusCode} currentStatusCode={currentStatusCode} /></StatusCodeOptionItem>
            <StatusCodeOptionItem key={400}><StatusCodeButton statusCode={400} setUpdatedStatusCode={setUpdatedStatusCode} currentStatusCode={currentStatusCode} /></StatusCodeOptionItem>
            <StatusCodeOptionItem key={500}><StatusCodeButton statusCode={500} setUpdatedStatusCode={setUpdatedStatusCode} currentStatusCode={currentStatusCode} /></StatusCodeOptionItem>
        </StatusCodeOptionsList>
    )
}