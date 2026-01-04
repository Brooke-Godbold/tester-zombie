import { Spinner } from "../spinner/Spinner.styles";
import { BlurOverlay } from "./LoadingOverlay.styles";

export function LoadingOverlay() {
    return (
        <BlurOverlay>
            <Spinner />
        </BlurOverlay>
    )
}