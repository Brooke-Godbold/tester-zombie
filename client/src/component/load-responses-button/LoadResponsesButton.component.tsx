import { ResponseItemsRecord } from "@common/types/responseItemsRecord.types"
import { uploadResponseItems } from "../../helper/uploadResponseItems";
import { useRef } from "react";
import toast from "react-hot-toast";
import Notification from "../notification/Notification.component";
import { ImFolderUpload } from "react-icons/im";
import { AppOptionButton } from "../response-data-management/ResponseDataManagement.styles";

type LoadResponsesButtonProps = {
    onLoad: (record: ResponseItemsRecord) => void;
    children: React.ReactNode,
};

export function LoadResponsesButton({ onLoad, children }: LoadResponsesButtonProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    function openFileDialog() {
        inputRef.current?.click();
    }

    async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];

        if (!file) return;

        try {
            const record = await uploadResponseItems(file);
            onLoad(record);
        }
        catch (error) {
            toast.error(() => <Notification text={`Unable to Upload Responses:\n${error}`} isError={true} />);
        }
        finally {
            event.target.value = "";
        }
    }

    return (
        <>
            <AppOptionButton onClick={openFileDialog}>
                { children }
                <ImFolderUpload />
            </AppOptionButton>
            <input
                ref={inputRef}
                type="file"
                accept="application/json"
                onChange={handleFileChange}
                hidden
            />
        </>
    )
}