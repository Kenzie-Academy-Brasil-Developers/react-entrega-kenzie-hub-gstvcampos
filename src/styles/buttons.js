import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

export const ButtonStyles = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    transition: .4s;
    border-radius: .25rem;
    
    font-family: var(--font-primary);
    color: var(--color-grey-0);
    text-decoration: none;
`

export const StyledButton = styled.button`
    ${ButtonStyles}

    font-weight: 500;
    font-size: clamp(0.75rem, 7vw, 1rem);

    background-color: var(--color-primary);

    height: clamp(2.75rem, 7vw, 3rem);
    padding: 0 1.5rem;

    :hover {
        background-color: var(--color-primary-focus);
    }

    &:disabled{
        cursor: not-allowed;
        background-color: var(--color-grey-1);
    }
    &:disabled:hover{
        cursor: not-allowed;
        background-color: var(--color-grey-2);
    }
`

export const StyledLink = styled(Link)`
    ${ButtonStyles}
    font-weight: 500;
    font-size: clamp(0.75rem, 7vw, 1rem);

    background-color: var(--color-grey-1);

    height: clamp(2.75rem, 7vw, 3rem);
    padding: 0 1.5rem;

    :hover {
        background-color: var(--color-grey-2);
    }
`

export const StyledSmallLink = styled(Link)`
    ${ButtonStyles}
    font-weight: 600;
    font-size: clamp(0.50rem, 7vw, 0.75rem);

    height: clamp(2.0rem, 7vw, 2.5rem);
    padding: 0 1rem;

    background-color: var(--color-grey-3);
    
    :hover {
        background-color: var(--color-grey-2);
    }
`
