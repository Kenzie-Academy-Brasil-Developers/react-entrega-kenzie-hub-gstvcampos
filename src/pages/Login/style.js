import styled from "styled-components"

export const StyledLoginPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--color-grey-4);

    padding: 0.5rem;
    
    header {
        margin-top: ;
        justify-content: center;
    }

    h1, h4 {
        padding-top: 1rem;
        text-align: center;
    }

    h4 {
        margin-bottom: 1rem;
    }

    .form__container {
        background-color: var(--color-grey-3);
        border-radius: .25rem;
    }

    form {
        display: flex;
        flex-direction: column;

        padding: 1rem;
    }

    form > p {
        color: red;
        font-size: clamp(0.50rem, 7vw, 0.75rem);
        margin-bottom: 0.5rem;
        height: 1rem;
    }

    .main__container {

    }
`
