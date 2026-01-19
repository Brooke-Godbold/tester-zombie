import { ResponseItem } from "@common/types/responseItem.types"
import { ResponseUpdate } from "@common/types/responseUpdate.types";
import { updateResponse } from "../../api/updateResponse";
import { useEffect, useState } from "react";
import { StatusCodeOptions } from "../status-code-options/StatusCodeOptions.component";
import { getAllResponses } from "../../api/getAllResponses";
import { ResponseDataContainer, ResponseDataHeader, ResponseDataHeaderText, ResponseDataInputContainer, ResponseDataManagementContainer, ResponseDataPanel, ResponseDataSubmitButton, ResponseDataSubmitContainer } from "./ResponseData.styles";
import toast from "react-hot-toast";
import Notification from "../notification/Notification.component";
import { LoadingOverlay } from "../loading-overlay/LoadingOverlay.component";
import { ItemDataNoData } from "../item-data/ItemDataNoData.component";
import { JsonContent } from "../json-content/JsonContent.component";
import { useResponse } from "../../hooks/useResponse";
import { ResponseDataManagement } from "../response-data-management/ResponseDataManagement.component";

type ResponseDataProps = {
    responseItem: ResponseItem | undefined;
    getResponsesList: () => Promise<void>;
}

export function ResponseData({ responseItem, getResponsesList }: ResponseDataProps) {
    const [updateStatusCode, setUpdateStatusCode] = useState<number>(200);
    const [updateValue, setUpdateValue] = useState<string>("");
    const [loading, setLoading] = useState<Boolean>(false);

    const { setResponses } = useResponse();

    useEffect(() => {
        if (!responseItem) return;

        const response = JSON.stringify(responseItem.response, null, 2);
        setUpdateValue(response);
        setUpdateStatusCode(responseItem.config.statusCode)
    }, [responseItem]);

    async function handleUpdate() {
        if (!responseItem) return;

        setLoading(true);
        toast.dismiss();

        try {
            responseItem.response = JSON.parse(updateValue);
            const responseUpdate: ResponseUpdate = {
                endpoint: responseItem.config.endpoint,
                response: responseItem
            };
            await updateResponse(responseUpdate);

            const responses = await getAllResponses();
            setResponses(responses);

            toast(() => <Notification text="Response Updated Successfully!" isError={false} />);
        }
        catch (err) {
            console.log(err);
            if (err instanceof SyntaxError) {
                toast.error(() => <Notification text={`The supplied JSON is invalid:\n${err.message}`} isError={true} />);
            }
            else {
                toast.error(() => <Notification text={`An unknown Error occured:\n${err}`} isError={true} />);
            }
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            {
                loading && <LoadingOverlay />
            }
            <ResponseDataPanel>
                {
                    responseItem ? 
                    <ResponseDataContainer>
                        <ResponseDataHeader>
                            <ResponseDataHeaderText>{responseItem.config.endpoint}</ResponseDataHeaderText>
                            <ResponseDataManagementContainer>
                                <ResponseDataManagement getResponsesList={getResponsesList} responseItem={responseItem} />
                            </ResponseDataManagementContainer>
                        </ResponseDataHeader>
                        <StatusCodeOptions
                            setUpdatedStatusCode={setUpdateStatusCode}
                            currentStatusCode={updateStatusCode}
                        />
                        <ResponseDataInputContainer>
                            <JsonContent
                                value={updateValue}
                                readonly={false}
                                updateValue={setUpdateValue}
                                caret={true}
                            />
                        </ResponseDataInputContainer>
                        <ResponseDataSubmitContainer>
                            <ResponseDataSubmitButton onClick={handleUpdate}>Update</ResponseDataSubmitButton>
                        </ResponseDataSubmitContainer>
                    </ResponseDataContainer> :
                    <ItemDataNoData text="Select an Endpoint" />
                }
            </ResponseDataPanel>
        </>
    )
}
