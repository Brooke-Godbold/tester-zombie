import styled from "styled-components";

export const ResponseListPanel = styled.div`
    flex: 1;
    height: 100%;

    padding: 2.4rem;

    border-style: dashed;
    border-radius: var(--border-radius-sm);
    border-color: var(--color-brand-400);
`

export const ResponseListContainer = styled.ul`
    list-style-type: none;

    padding: 1.2rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    padding-top: 5.4rem;
`

export const ResponseListItem = styled.li`
    display: block;
    width: 100%;
`

type ButtonProps = {
    $isActive: boolean;
}

export const ResponseListButton = styled.button<ButtonProps>`
    width: 100%;
    padding: 1.2rem;

    text-align: left;

    font-family: "HauntedHillRegular", sans-serif;
    font-size: 2.4rem;
    letter-spacing: 2px;

    border-style: none;
    border-radius: var(--border-radius-sm);

    background-color: ${props => props.$isActive ? "var(--color-brand-300)" : "transparent"};
    color: ${props => props.$isActive ? "var(--color-brand-900)" : "var(--color-brand-300)"};

    &:hover {
        background-color: var(--color-brand-300);
        color: var(--color-brand-900);
    }
`

export const ResponseListHeader = styled.h2`
    width: 100%;
    text-align: center;

    padding-top: 1.2rem;

    font-size: 4.8rem;
`