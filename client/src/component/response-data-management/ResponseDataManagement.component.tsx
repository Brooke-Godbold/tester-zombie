import { useResponse } from "../../hooks/useResponse";
import { AppOptionButton, ResponseDataManagementContainer } from "./ResponseDataManagement.styles";
import { downloadResponseItems } from "../../helper/downloadResponseItems";
import { ResponseItemsRecord } from "@common/types/responseItemsRecord.types";
import { ImFolderDownload } from "react-icons/im";
import { LoadResponsesButton } from "../load-responses-button/LoadResponsesButton.component";
import toast from "react-hot-toast";
import Notification from "../notification/Notification.component";
import { updateResponse } from "../../api/updateResponse";
import { ResponseUpdate } from "@common/types/responseUpdate.types";
import { ResponseItem } from "@common/types/responseItem.types";

type ResponseDataManagementProps = {
    getResponsesList: () => Promise<void>;
    responseItem: ResponseItem | undefined;
}

export function ResponseDataManagement({ getResponsesList, responseItem }: ResponseDataManagementProps) {
    const { responses } = useResponse();

    function handleSaveResponses() {
        const responseItems: ResponseItemsRecord = {
            responseItems: responseItem ? [responseItem] : responses
        }
        downloadResponseItems(responseItems, "response-items.json");
    }

    async function handleLoadResponses(record: ResponseItemsRecord) {
        record.responseItems.forEach(async (recordItem) => {
            try {
                const responseUpdate: ResponseUpdate = {
                    endpoint: recordItem.config.endpoint,
                    response: recordItem
                };
                await updateResponse(responseUpdate);
            }
            catch (err) {
                toast.error(() => <Notification text={`Error loading Response for endpoint: ${recordItem.config.endpoint}`} isError={true} />);
            }
        })

        await getResponsesList();
    }

    return (
        <ResponseDataManagementContainer>
            <AppOptionButton onClick={handleSaveResponses}>
                <p>{ responseItem ? "Save Response" : "Save Responses"}</p>
                <ImFolderDownload />
            </AppOptionButton>
            <LoadResponsesButton onLoad={handleLoadResponses}>
                <p>{ responseItem ? "Load Response" : "Load Responses"}</p>
            </LoadResponsesButton>
        </ResponseDataManagementContainer>
    )
}