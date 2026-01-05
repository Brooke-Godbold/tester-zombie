import { ResponseItem } from "@common/types/responseItem.types";
import { ItemListButton, ItemListContainer, ItemListHeader, ItemListItem, ItemListPanel } from "./ItemList.styles";

type ResponseListProps = {
    responses: ResponseItem[];
    setEndpoint: (endpoint: string) => void;
    currentEndpoint: string;
}

export function ResponsesList({ responses, setEndpoint, currentEndpoint }: ResponseListProps) {
    return (
        <ItemListPanel>
            <ItemListHeader>Endpoints</ItemListHeader>
            <ItemListContainer>
                {
                    responses.map(res => 
                        <ItemListItem key={res.config.endpoint}>
                            <ItemListButton
                                $isActive={currentEndpoint === res.config.endpoint}
                                onClick={() => setEndpoint(res.config.endpoint)}
                            >
                                {res.config.endpoint}
                            </ItemListButton>
                        </ItemListItem>
                    )
                }
            </ItemListContainer>
        </ItemListPanel>
    )
}