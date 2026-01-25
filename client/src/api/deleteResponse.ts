import axios from "axios";

export async function deleteResponse(endpoint: string) {
    try {
        const res = await axios.post(
            "http://localhost:3000/api/delete-response",
            {},
            {
                params: {
                    endpoint: endpoint
                }
            }
        );

        if (res.status >= 400) {
            throw new Error("Failed to update response");
        }

        return res.data;
    } catch (error) {
        console.error(error);
    }
}