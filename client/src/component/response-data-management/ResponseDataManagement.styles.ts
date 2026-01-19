import styled from "styled-components";

export const ResponseDataManagementContainer = styled.div`
    width: 100%;

    display: flex;

    gap: 2.4rem;
`;

export const AppOptionButton = styled.button`
    flex: 1;

    padding: 1.2rem;

    display: flex;
    gap: 2.4rem;
    justify-content: center;
    align-items: center;

    font-family: "HauntedHillRegular", sans-serif;
    font-size: 1.6rem;
    letter-spacing: 2px;

    text-align: center;
    text-decoration: none;

    background-color: transparent;
    color: var(--color-brand-300);

    border-radius: var(--border-radius-sm);
    border-color: var(--color-brand-400);
    border-style: dashed;

    &:hover {
        background-color: var(--color-brand-800);
    }
`