import styled from "styled-components";

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    padding: 1.2rem;

    gap: 1.2rem;
`

export const AppHeader = styled.h1`
    width: 100%;
    flex: 1;

    text-align: center;

    padding-top: 1.2rem;

    font-size: 8.4rem;
    letter-spacing: 5px;

    border-style: dashed;
    border-radius: var(--border-radius-sm);
    border-color: var(--color-brand-400);
`