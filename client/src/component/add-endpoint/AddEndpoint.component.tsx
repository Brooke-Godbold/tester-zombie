import { useState } from "react";
import { AddEndpointContainer, AddEndpointField, AddEndpointHeader, AddEndpointInner, AddEndpointLabel, AddEndpointResponseContainer, AddEndpointValue, AddEndpointValueContainer } from "./AddEndpoint.styles";
import { ResponseDataSubmitButton, ResponseDataSubmitContainer } from "../response-data/ResponseData.styles";
import { JsonContent } from "../json-content/JsonContent.component";
import { Dropdown, DropdownOption } from "../dropdown/Dropdown.component";
import { ResponseItem } from "@common/types/responseItem.types";
import { ResponseConfig } from "@common/types/responseConfig.types";
import { ResponseUpdate } from "@common/types/responseUpdate.types";
import toast from "react-hot-toast";
import Notification from "../notification/Notification.component";
import { getAllResponses } from "../../api/getAllResponses";
import { updateResponse } from "../../api/updateResponse";
import { useResponse } from "../../hooks/useResponse";
import { LoadingOverlay } from "../loading-overlay/LoadingOverlay.component";

type FormValues = {
    endpoint: string;
    statusCode: number;
    method: string;
    response: string;
}

type AddEndpointProps = {
    setEndpoint: (endpoint: string) => void;
}

export function AddEndpoint({ setEndpoint }: AddEndpointProps) {
    const [loading, setLoading] = useState<Boolean>(false);
    const [values, setValues] = useState<FormValues>({
        endpoint: "",
        statusCode: 200,
        method: "GET",
        response: ""
    });

    const { setResponses } = useResponse();

    const statusCodeOptions: DropdownOption<number>[] = [
        { label: "200", value: 200 },
        { label: "400", value: 400 },
        { label: "500", value: 500 }
    ]

    const methodOptions: DropdownOption<string>[] = [
        { label: "GET", value: "GET" },
        { label: "POST", value: "POST" },
        { label: "PUT", value: "PUT" },
        { label: "DELETE", value: "DELETE" }
    ]

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setValues(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleResponseUpdate(update: string) {
        setValues(prev => ({
            ...prev,
            response: update
        }));
    }

    function handleStatusCodeChange(statusCode: number) {
        setValues(prev => ({
            ...prev,
            statusCode: statusCode
        }));
    }

    function handleMethodChange(method: string) {
        setValues(prev => ({
            ...prev,
            method: method
        }));
    }

    async function handleSubmit() {
        toast.dismiss();

        var isError = false;
        if (!values.endpoint || values.endpoint.trim() === "") {
            toast.error(() => <Notification text={"An Endpoint is required"} isError={true} />);
            isError = true;
        }
        if (!values.response) {
            toast.error(() => <Notification text={"A Response is required"} isError={true} />);
            isError = true;
        }
        if (isError) return;

        try {
            const response = JSON.parse(values.response);

            const cleanedEndpoint = values.endpoint.trim().replace(" ", "");
            const config: ResponseConfig = {
                endpoint: cleanedEndpoint,
                method: values.method,
                statusCode: values.statusCode
            }
            const responseItem: ResponseItem = {
                config: config,
                response: response
            }

            const responseUpdate: ResponseUpdate = {
                endpoint: values.endpoint,
                response: responseItem
            };

            setLoading(true);
            await updateResponse(responseUpdate);

            const responses = await getAllResponses();
            setResponses(responses);

            toast(() => <Notification text="Response Updated Successfully!" isError={false} />);
            setEndpoint(values.endpoint);
            setValues({
                endpoint: "",
                statusCode: 200,
                method: "GET",
                response: ""
            })
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
            <AddEndpointContainer>
                <AddEndpointInner>
                    <AddEndpointHeader>Add New Endpoint</AddEndpointHeader>
                    <AddEndpointField>
                        <AddEndpointLabel>Endpoint</AddEndpointLabel>
                        <AddEndpointValue name="endpoint" value={values.endpoint} onChange={handleChange} />
                    </AddEndpointField>
                    <AddEndpointField>
                        <AddEndpointLabel>Status Code</AddEndpointLabel>
                        <AddEndpointValueContainer>
                            <Dropdown options={statusCodeOptions} value={values.statusCode} onChange={handleStatusCodeChange} />
                        </AddEndpointValueContainer>
                    </AddEndpointField>
                    <AddEndpointField>
                        <AddEndpointLabel>Method</AddEndpointLabel>
                        <AddEndpointValueContainer>
                            <Dropdown options={methodOptions} value={values.method} onChange={handleMethodChange} />
                        </AddEndpointValueContainer>
                    </AddEndpointField>
                    <AddEndpointResponseContainer>
                        <AddEndpointLabel>Response</AddEndpointLabel>
                        <JsonContent
                            value={values.response}
                            readonly={false}
                            updateValue={handleResponseUpdate}
                            caret={true}
                        />
                    </AddEndpointResponseContainer>
                    <ResponseDataSubmitContainer>
                        <ResponseDataSubmitButton onClick={handleSubmit}>Add Endpoint</ResponseDataSubmitButton>
                    </ResponseDataSubmitContainer>
                </AddEndpointInner>
            </AddEndpointContainer>
        </>
    )
}
