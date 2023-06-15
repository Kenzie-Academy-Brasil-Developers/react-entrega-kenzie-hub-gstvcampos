import styled, { css } from "styled-components"

export const StyledFieldBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const InputGeneralStyles = css`
    font-family: var(--font-primary);
    font-size: 1rem;
    color: var(--color-grey-0);

    background: var(--color-grey-2);

    ${({error}) => {
        if(error){
            return css`
                border: 2px solid red;
            `
        }
    }}
`

