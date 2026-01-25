import styled from "styled-components";

export const RequestDataPanel = styled.div`
    width: 75%;
    height: 100%;

    border-style: dashed;
    border-radius: var(--border-radius-sm);
    border-color: var(--color-brand-400);
`

export const RequestDataContainer = styled.div`
    width: 100%;
    height: 100%;

    padding: 2.4rem;
`

export const RequestDataContent = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    gap: 1.2rem;
`

export const RequestDataField = styled.div`
    width: 100%;
    flex: 1;

    display: flex;

    border-bottom: 1px solid var(--color-brand-400);
`

export const RequestDataFieldLabel = styled.h3`
    flex: 1;

    display: flex;
    align-items: center;

    font-size: 2.4rem;
`

export const RequestDataFieldValue = styled.p`
    flex: 9;

    display: flex;
    align-items: center;

    font-size: 2rem;

    min-height: 0;
    overflow-y: auto;
    padding: 0.75rem;

    scrollbar-color: transparent;

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar {
        width: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 3px;
    }
`

export const RequestDataBodyContainer = styled.div`
    width: 100%;
    flex: 9;
`

export const CopyCurlButtonContainer = styled.div`
    flex: 1;

    padding: 1.2rem;
    padding-top: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const CopyCurlButton = styled.button`
    width: 100%;
    
    font-family: "HauntedHillRegular", sans-serif;
    font-size: 2.4rem;

    padding: 1.2rem 0;

    border-style: dashed;
    border-color: var(--color-brand-400);
    border-radius: var(--border-radius-sm);

    background-color: transparent;
    color: var(--color-brand-300);

    &:hover {
        background-color: var(--color-brand-800);
    }
`