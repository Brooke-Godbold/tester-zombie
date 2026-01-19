import styled from "styled-components";

export const AddEndpointContainer = styled.div`
    flex: 2;
    height: 100%;

    border-style: dashed;
    border-radius: var(--border-radius-sm);
    border-color: var(--color-brand-400);
`

export const AddEndpointInner = styled.div`
    width: 100%;
    height: 100%;

    padding: 4.8rem 15rem;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    min-height: 0;
    overflow-y: auto;
`

export const AddEndpointHeader = styled.h1`
    font-size: 5.2rem;

    flex: 2;
    width: 100%;

    text-align: center;

    padding-bottom: 4.8rem;
`

export const AddEndpointField = styled.div`
    width: 100%;
    flex: 1;

    display: flex;
    gap: 3.2rem;

    align-items: center;
    justify-content: center;
`

export const AddEndpointLabel = styled.h3`
    flex: 1;

    text-align: start;

    font-size: 2.4rem;
`

export const AddEndpointValueContainer = styled.div`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const AddEndpointValue = styled.input`
    flex: 1;

    padding: 0.75rem;

    border-radius: var(--border-radius-sm);
    border-style: dashed;
    border-color: var(--color-brand-400);

    font-size: 2.4rem;
    font-family: "HauntedHillRegular", sans-serif;

    background-color: var(--color-brand-800);
    color: var(--color-brand-300);
`

export const AddEndpointResponseContainer = styled.div`
    flex: 10;
    width: 100%;

    display: flex;
    flex-direction: column;
`;