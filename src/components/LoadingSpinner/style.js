import styled, { keyframes } from 'styled-components';

const spinnerAnimation = keyframes`
    0% {
        transform: rotate(0deg)
    }
    100% {
    transform: rotate(360deg)
    }
`
export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 5rem;
    height: 100vh;
    background: var(--color-grey-4);
`


export const StyledLoadingSpinner = styled.div`
    width: 50px;
    height: 50px;

    border: 10px solid var(--color-primary); 
    border-top: 10px solid var(--color-grey-2);
    border-radius: 50%;
    
    animation: ${spinnerAnimation} 1.5s linear infinite;
`
