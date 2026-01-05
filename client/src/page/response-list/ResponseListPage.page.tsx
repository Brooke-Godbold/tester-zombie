import { ResponseItem } from "@common/types/responseItem.types";
import { useEffect, useState } from "react";
import { getAllResponses } from "../../api/getAllResponses";
import { ResponsesList } from "../../component/item-list/ResponseList.component";
import { ResponseData } from "../../component/response-data/ResponseData.component";
import { ResponseListPageParent, ResponsePageContainer } from "./ResponseListPage.styles";
import { LoadingOverlay } from "../../component/loading-overlay/LoadingOverlay.component";
import toast from "react-hot-toast";
import Notification from "../../component/notification/Notification.component";

export function ResponseListPage() {
    const [responses, setResponses] = useState<ResponseItem[]>([]);
    const [loading, setLoading] = useState<Boolean>(false);
    const [endpoint, setEndpoint] = useState<string | null>(null);

    useEffect(() => {
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

        getResponsesList();
    }, [])

    return (
        <ResponseListPageParent>
            {
                loading ?
                <LoadingOverlay /> :
                (
                    responses && (
                        <ResponsePageContainer>
                            <ResponsesList responses={responses} setEndpoint={setEndpoint} currentEndpoint={endpoint ?? ""} />
                            <ResponseData responseItem={responses.find(res => res.config.endpoint == endpoint)} setResponses={setResponses} />
                        </ResponsePageContainer>
                    )
                )
            }
        </ResponseListPageParent>
    )
}