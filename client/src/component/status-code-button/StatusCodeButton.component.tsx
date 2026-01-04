import { StatusCodeOptionButton } from "./StatusCodeButton.styles";

type StatusCodeButtonProps = {
    statusCode: number;
    setUpdatedStatusCode: (endpoint: number) => void;
    currentStatusCode: number;
}

export function StatusCodeButton({ statusCode, setUpdatedStatusCode, currentStatusCode }: StatusCodeButtonProps) {
    return (
        <StatusCodeOptionButton
            $isActive={currentStatusCode === statusCode}
            value={statusCode}
            onClick={() => setUpdatedStatusCode(statusCode)}
        >
            {statusCode}
        </StatusCodeOptionButton>
    )
}