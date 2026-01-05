import { useEffect, useState } from "react";
import { RequestListPageParent, RequestPageContainer } from "./RequestListPage.styles";
import { LoadingOverlay } from "../../component/loading-overlay/LoadingOverlay.component";
import { toast } from "react-hot-toast";
import Notification from "../../component/notification/Notification.component";
import { RequestLogItem } from "@common/types/requestLogItem.types";
import { getAllRequestLogs } from "../../api/getRequestLogs";
import { RequestsList } from "../../component/item-list/RequestsList.component";
import { RequestData } from "../../component/request-data/RequestData.component";

export function RequestListPage() {
    const [requests, setRequests] = useState<RequestLogItem[]>([]);
    const [currentLog, setCurrentLog] = useState<number>(0);
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
        getRequestLogs();
    }, []);

    async function getRequestLogs() {
        setLoading(true);
        try {
            const requestLogs = await getAllRequestLogs();
            setRequests(requestLogs);
        }
        catch (err) {
            toast.error(() => <Notification text={`Unable to Retrieve Request Logs:\n${err}`} isError={true} />);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <RequestListPageParent>
            {
                loading ?
                <LoadingOverlay /> :
                <RequestPageContainer>
                    <RequestsList
                        requestLogs={requests}
                        setCurrentLog={setCurrentLog}
                        currentLog={currentLog}
                        refreshRequests={getRequestLogs}
                    />
                    <RequestData requestLog={requests.find(log => log.timestamp === currentLog) || null} />
                </RequestPageContainer>
            }
        </RequestListPageParent>
    );
}