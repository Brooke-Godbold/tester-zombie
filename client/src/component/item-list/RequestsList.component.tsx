import { readableDate } from "../../utils/dateUtils";
import { ItemListButton, ItemListContainer, ItemListEmpty, ItemListHeader, ItemListItem, ItemListPanel, RefreshListButton } from "./ItemList.styles";
import { RequestLogItem } from "@common/types/requestLogItem.types";
import { RequestItemContainer, RequestItemDate, RequestItemPath } from "./RequestsList.styles";

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

    return (
        <ItemListPanel>
            <ItemListHeader>Request Logs</ItemListHeader>
            {
                requestLogs.length === 0 ?
                <ItemListEmpty>No Request Logs</ItemListEmpty> :
                <>
                    <RefreshListButton onClick={handleRefresh}>
                        Refresh Requests
                    </RefreshListButton>
                    <ItemListContainer>
                        {
                            requestLogs.map(log => 
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
                </>
            }
        </ItemListPanel>
    )
}