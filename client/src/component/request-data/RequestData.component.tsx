import { RequestLogItem } from "@common/types/requestLogItem.types";
import { CopyCurlButton, CopyCurlButtonContainer, RequestDataBodyContainer, RequestDataContainer, RequestDataContent, RequestDataField, RequestDataFieldLabel, RequestDataFieldValue, RequestDataPanel } from "./RequestData.styles";
import { ItemDataNoData } from "../item-data/ItemDataNoData.component";
import { ResponseDataInput } from "../response-data/ResponseData.styles";
import { readableDate } from "../../utils/dateUtils";
import { requestLogToCurl } from "../../utils/requestUtils";
import Notification from "../notification/Notification.component";
import toast from "react-hot-toast";
import { JsonContent } from "../json-content/JsonContent.component";

type RequestDataProps = {
    requestLog: RequestLogItem | null;
}

export function RequestData({ requestLog }: RequestDataProps) {
    async function handleCopyCurl() {
        if (!requestLog) return;

        await navigator.clipboard.writeText(requestLogToCurl(requestLog));

        toast(() => <Notification text="Copied CURL to Clipboard!" isError={false} />);
    }

    return (
        <RequestDataPanel>
            <RequestDataContainer>
                {
                    requestLog ?
                    <RequestDataContent>
                        <RequestDataField>
                            <RequestDataFieldLabel>Method</RequestDataFieldLabel>
                            <RequestDataFieldValue>{requestLog.method}</RequestDataFieldValue>
                        </RequestDataField>
                        <RequestDataField>
                            <RequestDataFieldLabel>Path</RequestDataFieldLabel>
                            <RequestDataFieldValue>{requestLog.path}</RequestDataFieldValue>
                        </RequestDataField>
                        <RequestDataField>
                            <RequestDataFieldLabel>Timestamp</RequestDataFieldLabel>
                            <RequestDataFieldValue>{readableDate(requestLog.timestamp)}</RequestDataFieldValue>
                        </RequestDataField>
                        <RequestDataField>
                            <RequestDataFieldLabel>CURL Request</RequestDataFieldLabel>
                            <RequestDataFieldValue>{requestLogToCurl(requestLog)}</RequestDataFieldValue>
                            <CopyCurlButtonContainer>
                                <CopyCurlButton onClick={handleCopyCurl}>Copy</CopyCurlButton>
                            </CopyCurlButtonContainer>
                        </RequestDataField>
                        <RequestDataBodyContainer>
                            {
                                (requestLog.method === "POST" || requestLog.method === "PUT") &&
                                <JsonContent
                                    value={JSON.stringify(requestLog.body, null, 2)}
                                    readonly={true}
                                    updateValue={() => {}}
                                    caret={false}
                                />
                            }
                        </RequestDataBodyContainer>
                    </RequestDataContent> :
                    <ItemDataNoData text="Select a Request to View Details" />
                }
            </RequestDataContainer>
        </RequestDataPanel>
    )
}