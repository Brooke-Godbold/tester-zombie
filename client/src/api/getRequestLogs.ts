import axios from "axios";

export async function getAllRequestLogs() {
    try {
        const res = await axios.get("http://localhost:3000/api/requests");

        if (res.status >= 400) {
            throw new Error("Failed to fetch request logs");
        }

        return res.data;
    } catch (error) {
        console.error(error);
    }
}