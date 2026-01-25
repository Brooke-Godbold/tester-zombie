import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AppHeaderContainer = styled.div`
    width: 100%;
    height: 20%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-style: dashed;
    border-radius: var(--border-radius-sm);
    border-color: var(--color-brand-400);

    padding: 1.2rem;
`

export const AppHeaderText = styled.h1`
    width: 100%;
    height: 50%;

    text-align: center;

    font-size: 4.2rem;
    letter-spacing: 5px;

    border-bottom: 2px dashed var(--color-brand-400);
`

export const AppOptions = styled.div`
    width: 100%;
    height: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.75rem;
    padding-bottom: 0;
    gap: 3.2rem;
`

type ButtonProps = {
    $isActive: boolean;
}

export const AppOptionLink = styled(NavLink)<ButtonProps>`
    flex: 1;

    padding: 0.75rem;

    font-family: "HauntedHillRegular", sans-serif;
    font-size: 2.8rem;
    letter-spacing: 2px;

    text-align: center;
    text-decoration: none;

    border-radius: var(--border-radius-sm);
    border-bottom-width: 4px;
    border-bottom-style: solid;

    border-bottom-color: ${props => props.$isActive ? "var(--color-brand-300)" : "transparent"};
    color: var(--color-brand-300);

    &:hover {
        border-bottom-color: var(--color-brand-300);
    }
`