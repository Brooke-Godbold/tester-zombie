import styled from "styled-components";

export const ItemListPanel = styled.div`
    flex: 1;
    height: 100%;

    padding: 2.4rem;

    border-style: dashed;
    border-radius: var(--border-radius-sm);
    border-color: var(--color-brand-400);

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

export const ItemListHeader = styled.h2`
    width: 100%;
    text-align: center;

    padding-top: 1.2rem;

    font-size: 4.8rem;

    flex: 1;
`

export const ItemListContainer = styled.ul`
    flex: 9;
    list-style-type: none;

    padding: 1.2rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    padding-top: 5.4rem;

    min-height: 0;
    overflow-y: auto;

    border-top: 2px dashed var(--color-brand-400);

    scrollbar-color: transparent;

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 6px;
    }
`

export const ItemListItem = styled.li`
    display: block;
    width: 100%;
`

type ButtonProps = {
    $isActive: boolean;
}

export const ItemListButton = styled.button<ButtonProps>`
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

export const ItemListEmpty = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 3.2rem;
`

export const RefreshListButton = styled.button`
    display:  flex;
    gap: 4.8rem;
    justify-content: center;
    align-items: center;

    font-family: "HauntedHillRegular", sans-serif;
    font-size: 3.2rem;
    letter-spacing: 2px;

    border-style: dashed;
    border-color: var(--color-brand-400);
    border-radius: var(--border-radius-sm);

    background-color: transparent;
    color: var(--color-brand-300);

    &:hover {
        background-color: var(--color-brand-800);
    }

    padding: 1.2rem 2.4rem;
    margin: 0 12.8rem;
    margin-bottom: 2.4rem;
`