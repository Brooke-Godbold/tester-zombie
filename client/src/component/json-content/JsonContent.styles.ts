import styled from "styled-components";

export const JsonContentContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;

    overflow-y: auto;
`

export const JsonContentLineNumbers = styled.div`
    text-align: right;
    user-select: none;
    font-family: monospace;

    padding: 2.4rem 0.25rem;

    line-height: 1.525rem;
    font-size: 1.2rem;

    width: 25px;

    background-color: var(--color-brand-800);
    color: var(--color-brand-300);
`

export const JsonContentTextarea = styled.textarea`
    flex: 1;
    
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