import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

export const ButtonStyles = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    
    transition: .4s;
    border-radius: .25rem;
    
    font-family: var(--font-primary);
    font-size: clamp(0.75rem, 7vw, 1rem);
    color: var(--color-grey-0);


    text-decoration: none;


    height: clamp(2.75rem, 7vw, 3rem);
    padding: 0 1.5rem;

    ${({colorStyle}) => {
        switch(colorStyle){
            case "grey":
                return css`

                background-color: var(--color-grey-1);

                :hover {
                    background-color: var(--color-grey-2);
                }

                `
            default:
                return css`

                    background-color: var(--color-primary);

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
        }
    }}
`

export const StyledButton = styled.button`
    ${ButtonStyles}

`

export const StyledLink = styled(Link)`
    ${ButtonStyles}

`

