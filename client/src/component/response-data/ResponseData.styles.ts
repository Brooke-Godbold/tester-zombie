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
    padding: 2.4rem;
`

export const ResponseDataSubmitButton = styled.button`
    flex: 1;

    font-family: "HauntedHillRegular", sans-serif;
    font-size: 3.6rem;
    letter-spacing: 3px;

    background-color: var(--color-red-800);
    color: var(--color-red-100);

    border-radius: var(--border-radius-sm);
    border-color: var(--color-red-100);
    border-style: solid;

    &:hover {
        background-color: var(--color-red-100);
        color: var(--color-red-800);
        border-color: var(--color-red-800);
    }
`

export const ResponseDataHeader = styled.h2`
    flex: 2;

    width: 100%;
    text-align: center;

    padding-top: 1.2rem;

    font-size: 4.8rem;
`

export const ResponseDataNoData = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 5.4rem;
`

export const ResponseDataNoDataText = styled.p`
    flex: 1;

    font-size: 4.8rem;

    text-align: center;
    padding-top: 12rem;
`

export const ResponseDataNoDataImage = styled.img`
    flex: 4;
    width: 25%;
    object-fit: contain;
    aspect-ratio: 1/1;
`