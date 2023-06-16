import styled, { css } from "styled-components"

export const StyledFieldBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const StyledInput = styled.input`
    font-family: var(--font-primary);
    font-size: 1rem;
    color: var(--color-grey-0);

    background: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
    border-radius: .25rem;

    height: 3rem;
    padding: 0 1rem;

    ${({error}) => {
        if(error){
            return css`
                border: 1px solid var(--color-negative);
            `
        }
    }}
`

export const StyledLabel = styled.label`
    font-family: var(--font-primary);
    font-size: .75rem;
    font-weight: 400;
    color: var(--color-grey-0);
`
