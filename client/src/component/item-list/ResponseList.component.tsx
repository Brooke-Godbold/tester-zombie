import { ItemListButton, ItemListContainer, ItemListHeader, ItemListItem, ItemListPanel } from "./ItemList.styles";
import { useResponse } from "../../hooks/useResponse";
import { ResponseDataManagement } from "../response-data-management/ResponseDataManagement.component";
import { ResponseListDataManagementContainer, ResponseListNewEndpointContainer, ResponseListOptions } from "./ResponseList.styles";
import { AppOptionButton } from "../response-data-management/ResponseDataManagement.styles";
import { BiSolidAddToQueue } from "react-icons/bi";

type ResponseListProps = {
    setEndpoint: (endpoint: string | null) => void;
    setAddEndpoint: (addEndpoint: Boolean) => void;
    currentEndpoint: string;
    getResponsesList: () => Promise<void>;
}

export function ResponsesList({ setEndpoint, currentEndpoint, getResponsesList, setAddEndpoint }: ResponseListProps) {
    const { responses } = useResponse();

    function handleAddEndpoint() {
        setEndpoint(null);
        setAddEndpoint(true);
    }

    return (
        <ItemListPanel>
            <ItemListHeader>Endpoints</ItemListHeader>
            <ResponseListOptions>
                <ResponseListNewEndpointContainer>
                    <AppOptionButton onClick={handleAddEndpoint}>
                        <BiSolidAddToQueue />
                    </AppOptionButton>
                </ResponseListNewEndpointContainer>
                <ResponseListDataManagementContainer>
                    <ResponseDataManagement getResponsesList={getResponsesList} responseItem={undefined} />
                </ResponseListDataManagementContainer>
            </ResponseListOptions>
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