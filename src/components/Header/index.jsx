import logo from "../../assets/logo.svg"

import { StyledHeader } from "./style"
import { StyledSmallLink } from "../../styles/buttons"

function Header({ buttonTo, buttonText, onButtonClick }) {
    const handleClick = onButtonClick ? onButtonClick : null

    return (
        <StyledHeader>
                <img src={logo} alt="Logo Kenzie Hub" />
                {buttonText ? 
                    <StyledSmallLink
                        to={buttonTo}
                        onClick={handleClick}
                    >
                        {buttonText}
                    </StyledSmallLink>
                : null}
        </StyledHeader>
    )
}

export default Header
