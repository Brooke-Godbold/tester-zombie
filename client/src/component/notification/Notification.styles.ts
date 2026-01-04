import { styled } from "styled-components";

type NotificationProps = {
    $isError: boolean;
}

const StyledNotification = styled.div<NotificationProps>`
    padding: 0.8rem 2rem;
    font-size: 1.8rem;

    border-style: dashed;
    border-radius: var(--border-radius-sm);
    border-color: ${props => props.$isError ? "var(--color-red-600)" : "var(--color-brand-400)"};
`;

export { StyledNotification };
