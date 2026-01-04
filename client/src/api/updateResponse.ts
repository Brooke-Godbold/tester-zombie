import { ResponseUpdate } from "@common/types/responseUpdate.types";
import axios from "axios";

export async function updateResponse(data: ResponseUpdate) {
    try {
        const res = await axios.post(
            "http://localhost:3000/api/update-response",
            data
        );

        if (res.status >= 400) {
            throw new Error("Failed to update response");
        }

        return res.data;
    } catch (error) {
        console.error(error);
    }
}