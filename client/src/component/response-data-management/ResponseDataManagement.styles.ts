import styled from "styled-components";

export const ResponseDataManagementContainer = styled.div`
    width: 100%;

    display: flex;
    gap: 2.4rem;
    align-items: center;
    justify-content: space-around;
`;

export const AppOptionButton = styled.button`
    padding: 1.2rem;

    display: flex;
    gap: 2.4rem;
    justify-content: center;
    align-items: center;

    font-family: "HauntedHillRegular", sans-serif;
    font-size: 2.4rem;
    letter-spacing: 2px;

    text-align: center;
    text-decoration: none;

    background-color: transparent;
    color: var(--color-brand-300);

    border-color: var(--color-brand-400);
    border-style: dashed;

    height: 6.4rem;
    border-radius: 50%;
    aspect-ratio: 1/1;

    &:hover {
        background-color: var(--color-brand-800);
    }
`