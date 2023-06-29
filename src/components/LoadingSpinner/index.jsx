import { StyledContainer, StyledLoadingSpinner } from "./style";
import logo from "../../assets/logo.svg"

function LoadingSpinner() {
  return (
    <StyledContainer>
        <img src={logo} alt="Logo Kenzie Hub" />
        <StyledLoadingSpinner>
            
        </StyledLoadingSpinner>
    </StyledContainer>
  )
}

export default LoadingSpinner