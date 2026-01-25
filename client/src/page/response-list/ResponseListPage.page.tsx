import { useEffect, useState } from "react";
import { getAllResponses } from "../../api/getAllResponses";
import { ResponsesList } from "../../component/item-list/ResponseList.component";
import { ResponseData } from "../../component/response-data/ResponseData.component";
import { ResponseListPageParent, ResponsePageContainer } from "./ResponseListPage.styles";
import { LoadingOverlay } from "../../component/loading-overlay/LoadingOverlay.component";
import toast from "react-hot-toast";
import Notification from "../../component/notification/Notification.component";
import { useResponse } from "../../hooks/useResponse";
import { AddEndpoint } from "../../component/add-endpoint/AddEndpoint.component";
import { useLoad } from "../../hooks/useLoad";

export function ResponseListPage() {
    const [endpoint, setEndpoint] = useState<string | null>(null);
    const [addEndpoint, setAddEndpoint] = useState<Boolean>(false);

    const { loading, setLoading } = useLoad();
    const { responses, setResponses } = useResponse();

    useEffect(() => {
        getResponsesList();
    }, [])

    useEffect(() => {
        if (!endpoint) return;

        setAddEndpoint(false);
    }, [endpoint])

    async function getResponsesList() {
        setLoading(true);
        try {
            const responsesList = await getAllResponses();
            setResponses(responsesList);
        }
        catch (err) {
            toast.error(() => <Notification text={`Unable to Retrieve Responses:\n${err}`} isError={true} />);
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
            <ResponseListPageParent>
                {
                    responses && (
                        <ResponsePageContainer>
                            <ResponsesList
                                setEndpoint={setEndpoint}
                                currentEndpoint={endpoint ?? ""}
                                getResponsesList={getResponsesList}
                                setAddEndpoint={setAddEndpoint}
                            />
                            {
                                addEndpoint ?
                                <AddEndpoint setEndpoint={setEndpoint} /> :
                                <ResponseData
                                    responseItem={responses.find(res => res.config.endpoint == endpoint)}
                                    getResponsesList={getResponsesList}
                                    setEndpoint={setEndpoint}
                                />
                            }
                        </ResponsePageContainer>
                    )
                }
            </ResponseListPageParent>
        </>
    )
}