import styled from "styled-components";

export const RequestItemContainer = styled.div`
    display: flex;

    gap: 0.5rem;

    width: 100%;
    height: 100%;
`

export const RequestItemDate = styled.p`
    flex: 1;
`

export const RequestItemPath = styled.p`
    flex: 1;

    overflow: hidden;
    text-overflow: ellipsis;
`

export const RefreshButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`