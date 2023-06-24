import styled from "styled-components"

export const StyledRegisterPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--color-grey-4);

    padding: 0.5rem;

    h1, h4 {
        text-align: center;
        padding: 0.5rem;
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
