import styled from "styled-components"

export const StyledDashboardPage = styled.div`
    header {
        border-bottom: 1px solid var(--color-grey-3);
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 120px;
        border-bottom: 1px solid var(--color-grey-3);
    }

    main {
        margin-top: 3rem;

        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
`