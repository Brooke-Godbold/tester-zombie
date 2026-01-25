import { readableDate } from "../../utils/dateUtils";
import { ItemListButton, ItemListContainer, ItemListEmpty, ItemListHeader, ItemListItem, ItemListPanel, RefreshListButton } from "./ItemList.styles";
import { RequestLogItem } from "@common/types/requestLogItem.types";
import { RefreshButtonContainer, RequestItemContainer, RequestItemDate, RequestItemPath } from "./RequestsList.styles";
import { MdOutlineRefresh } from "react-icons/md";

type RequestListProps = {
    requestLogs: RequestLogItem[];
    setCurrentLog: (timestamp: number) => void;
    currentLog: number;
    refreshRequests: () => Promise<void>;
}

export function RequestsList({ requestLogs, setCurrentLog, currentLog, refreshRequests }: RequestListProps) {
    async function handleRefresh() {
        await refreshRequests();

        setCurrentLog(0);
    }

    const sortedLogs = [...requestLogs].sort(
    (a, b) => b.timestamp - a.timestamp
    );

    return (
        <ItemListPanel>
            <ItemListHeader>Request Logs</ItemListHeader>
            <RefreshButtonContainer>
                <RefreshListButton onClick={handleRefresh}>
                    <MdOutlineRefresh />
                </RefreshListButton>
            </RefreshButtonContainer>
            {
                requestLogs.length === 0 ?
                <ItemListEmpty>No Request Logs</ItemListEmpty> :
                <ItemListContainer>
                    {
                        sortedLogs.map(log => 
                            <ItemListItem key={log.timestamp}>
                                <ItemListButton
                                    $isActive={currentLog === log.timestamp}
                                    onClick={() => setCurrentLog(log.timestamp)}
                                >
                                    <RequestItemContainer>
                                        <RequestItemDate>{readableDate(log.timestamp)}</RequestItemDate>
                                        <RequestItemPath>{log.path}</RequestItemPath>
                                    </RequestItemContainer>
                                </ItemListButton>
                            </ItemListItem>
                        )
                    }
                </ItemListContainer>
            }
        </ItemListPanel>
    )
}