import { ResponseItem } from "@common/types/responseItem.types";
import { ResponseListButton, ResponseListContainer, ResponseListHeader, ResponseListItem, ResponseListPanel } from "./ResponseList.styles";

type ResponseListProps = {
    responses: ResponseItem[];
    setEndpoint: (endpoint: string) => void;
    currentEndpoint: string;
}

export function ResponseList({ responses, setEndpoint, currentEndpoint }: ResponseListProps) {
    return (
        <ResponseListPanel>
            <ResponseListHeader>Endpoints</ResponseListHeader>
            <ResponseListContainer>
                {
                    responses.map(res => 
                        <ResponseListItem key={res.config.endpoint}>
                            <ResponseListButton
                                $isActive={currentEndpoint === res.config.endpoint}
                                onClick={() => setEndpoint(res.config.endpoint)}
                            >
                                {res.config.endpoint}
                            </ResponseListButton>
                        </ResponseListItem>
                    )
                }
            </ResponseListContainer>
        </ResponseListPanel>
    )
}