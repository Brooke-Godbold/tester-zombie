import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AppHeaderContainer = styled.div`
    width: 100%;
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-style: dashed;
    border-radius: var(--border-radius-sm);
    border-color: var(--color-brand-400);

    padding: 2.4rem;
`

export const AppHeaderText = styled.h1`
    width: 100%;
    flex: 1;

    text-align: center;

    font-size: 6.4rem;
    letter-spacing: 5px;

    border-bottom: 2px dashed var(--color-brand-400);
`

export const AppOptions = styled.div`
    width: 100%;
    flex: 1;

    display: flex;

    padding: 3.2rem;
    padding-bottom: 0;
    gap: 3.2rem;
`

type ButtonProps = {
    $isActive: boolean;
}

export const AppOptionButton = styled(NavLink)<ButtonProps>`
    flex: 1;

    padding: 1.2rem;

    font-family: "HauntedHillRegular", sans-serif;
    font-size: 3.2rem;
    letter-spacing: 2px;

    text-align: center;
    text-decoration: none;

    border-style: none;
    border-radius: var(--border-radius-sm);

    background-color: ${props => props.$isActive ? "var(--color-brand-300)" : "transparent"};
    color: ${props => props.$isActive ? "var(--color-brand-900)" : "var(--color-brand-300)"};

    &:hover {
        background-color: var(--color-brand-300);
        color: var(--color-brand-900);
    }
`