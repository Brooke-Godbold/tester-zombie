import styled from "styled-components";

export const ResponseDataPanel = styled.div`
    flex: 2;
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

    padding: 2.4rem;
`

export const ResponseDataInputContainer = styled.div`
    flex: 14;
    width: 100%;

    padding: 1.2rem;

    display: flex;
    flex-direction: column;
    min-height: 0;
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

export const ResponseDataHeader = styled.h2`
    flex: 2;

    width: 100%;
    text-align: center;

    padding-top: 1.2rem;

    font-size: 4.8rem;
`