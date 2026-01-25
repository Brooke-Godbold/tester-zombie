import styled from "styled-components";

export const ResponseDataPanel = styled.div`
    width: 75%;
    height: 100%;

    border-style: dashed;
    border-radius: var(--border-radius-sm);
    border-color: var(--color-brand-400);
`

export const ResponseDataContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    padding: 4.8rem 15rem;

    min-height: 0;
    overflow-y: auto;

    gap: 3.2rem;
`

export const ResponseDataInputContainer = styled.div`
    flex: 14;
    width: 100%;

    padding: 1.2rem;

    display: flex;
    flex-direction: column;
`;

export const ResponseDataInput = styled.textarea`
    width: 100%;
    height: 100%;

    padding: 2.4rem;
    border-radius: var(--border-radius-sm);

    background-color: var(--color-brand-700);
    color: var(--color-brand-100);
    border-color: transparent;

    resize: none;

    &:hover {
        cursor: text;
    }
`

export const ResponseDataSubmitContainer = styled.div`
    flex: 2;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.4rem;
`

export const ResponseDataSubmitButton = styled.button`
    width: 75%;

    padding: 1.2rem 2.4rem;

    font-family: "HauntedHillRegular", sans-serif;
    font-size: 3.6rem;
    letter-spacing: 3px;

    background-color: var(--color-brand-800);
    color: var(--color-brand-300);

    border-radius: var(--border-radius-sm);
    border-color: var(--color-brand-400);
    border-style: dashed;

    &:hover {
        background-color: var(--color-red-800);
        border-color: var(--color-red-100);
        color: var(--color-red-100);
    }
`

export const ResponseDataHeader = styled.div`
    width: 100%;
    flex: 2;

    display: flex;
    align-items: center;

    padding: 0 2.4rem;
`

export const ResponseDataHeaderText = styled.h2`
    width: 50%;

    height: 100%;
    text-align: start;

    padding-top: 1.2rem;

    font-size: 4.8rem;
`

export const ResponseDataManagementContainer = styled.div`
    width: 33%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const DeleteEndpointContainer = styled.div`
    width: 17%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`