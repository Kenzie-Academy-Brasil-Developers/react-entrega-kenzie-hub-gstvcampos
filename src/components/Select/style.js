import styled from "styled-components"

export const StyledSelectBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    select {
        font-family: var(--font-primary);
        font-size: 1rem;
        color: var(--color-grey-0);

        background: var(--color-grey-2);
        border: 1px solid var(--color-grey-2);
        border-radius: .25rem;

        height: 3rem;
        padding: 0 1rem;
    }
`