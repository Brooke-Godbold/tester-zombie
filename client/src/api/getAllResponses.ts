import axios from "axios";

export async function getAllResponses() {
    try {
        const res = await axios.get("http://localhost:3000/api/list-responses");

        if (res.status >= 400) {
            throw new Error("Failed to fetch responses");
        }

        return res.data;
    } catch (error) {
        console.error(error);
    }
}