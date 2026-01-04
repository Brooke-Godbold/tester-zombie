import styled from "styled-components";

type ButtonProps = {
    $isActive: boolean;
}

export const StatusCodeOptionButton = styled.button<ButtonProps>`
    flex: 1;

    font-family: "HauntedHillRegular", sans-serif;
    font-size: 2.4rem;

    background-color: ${props => props.$isActive ? "var(--color-brand-300)" : "var(--color-brand-700)"};
    color: ${props => props.$isActive ? "var(--color-brand-700)" : "var(--color-brand-300)"};

    border-radius: var(--border-radius-sm);
    border-color: ${props => props.$isActive ? "var(--color-brand-700)" : "var(--color-brand-400)"};
    border-style: solid;

    &:hover {
        background-color: var(--color-brand-300);
        color: var(--color-brand-700);
        border-color: var(--color-brand-700);
    }
`