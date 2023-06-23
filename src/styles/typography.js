import styled, { css } from "styled-components"

export const TitleStyles = css`
    font-family: var(--font-primary);
    color: var(--color-grey-0);
    line-height: 1.6;
    font-size: clamp(0.75rem, 7vw, 1rem);
    font-weight: 700;
`

export const StyledTitleOne = styled.h1`
    ${TitleStyles}
`

export const StyledTitleTwo = styled.h2`
    ${TitleStyles}
`

export const StyledTitleThree = styled.h3`
    ${TitleStyles}
`

export const StyledHeadline = styled.h4`
    font-family: var(--font-primary);
    color: var(--color-grey-1);
    line-height: 1.6;
    font-size: clamp(0.5rem, 7vw, 0.75rem);
    font-weight: 400;

    ${({fontStyle}) => {
        switch(fontStyle){
            case "bold":
                return css`
                font-weight: 700;
                `
            case "italic":
                return css`
                font-weight: 400;
                font-style: italic;
            `
            default:
                return css`
                    font-weight: 400;
                `
        }
    }}
`