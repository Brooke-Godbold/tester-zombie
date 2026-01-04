import toast from "react-hot-toast";
import { StyledNotification } from "./Notification.styles";

function Notification({ text, isError }: NotificationProps) {
  return <StyledNotification onClick={() => toast.dismiss()} $isError={isError}>{text}</StyledNotification>;
}

type NotificationProps = {
  text: string;
  isError: boolean;
};

export default Notification;
