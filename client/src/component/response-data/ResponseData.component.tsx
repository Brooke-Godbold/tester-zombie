import { ResponseItem } from "@common/types/responseItem.types"
import { ResponseUpdate } from "@common/types/responseUpdate.types";
import { updateResponse } from "../../api/updateResponse";
import { useEffect, useState } from "react";
import { StatusCodeOptions } from "../status-code-options/StatusCodeOptions.component";
import { getAllResponses } from "../../api/getAllResponses";
import { ResponseDataContainer, ResponseDataHeader, ResponseDataInput, ResponseDataInputContainer, ResponseDataNoData, ResponseDataNoDataImage, ResponseDataNoDataText, ResponseDataPanel, ResponseDataSubmitButton, ResponseDataSubmitContainer } from "./ResponseData.styles";
import toast from "react-hot-toast";
import Notification from "../notification/Notification.component";
import { LoadingOverlay } from "../loading-overlay/LoadingOverlay.component";
import TesterZombie from "../../assets/images/TesterZombie.png";

type ResponseDataProps = {
    responseItem: ResponseItem | undefined;
    setResponses: (responses: ResponseItem[]) => void;
}

export function ResponseData({ responseItem, setResponses }: ResponseDataProps) {
    const [updateStatusCode, setUpdateStatusCode] = useState<number>(200);
    const [updateValue, setUpdateValue] = useState<string>("");
    const [loading, setLoading] = useState<Boolean>(false);

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
            const responseUpdate: ResponseUpdate = {
                folderName: responseItem.folderName,
                statusCode: updateStatusCode,
                response: JSON.parse(updateValue)
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
                        <ResponseDataHeader>{responseItem.config.endpoint}</ResponseDataHeader>
                        <StatusCodeOptions
                            setUpdatedStatusCode={setUpdateStatusCode}
                            currentStatusCode={updateStatusCode}
                        />
                        <ResponseDataInputContainer>
                            <ResponseDataInput
                                value={updateValue}
                                onChange={e => setUpdateValue(e.target.value)}
                                readOnly={false}
                            />
                        </ResponseDataInputContainer>
                        <ResponseDataSubmitContainer>
                            <ResponseDataSubmitButton onClick={handleUpdate}>Update</ResponseDataSubmitButton>
                        </ResponseDataSubmitContainer>
                    </ResponseDataContainer> :
                    <ResponseDataNoData>
                        <ResponseDataNoDataText>
                            Select an Endpoint
                        </ResponseDataNoDataText>
                        <ResponseDataNoDataImage src={TesterZombie} />
                    </ResponseDataNoData>
                }
            </ResponseDataPanel>
        </>
    )
}