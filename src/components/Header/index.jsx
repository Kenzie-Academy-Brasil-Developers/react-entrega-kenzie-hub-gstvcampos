import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"

import { StyledContainer } from "../../styles/container"
import { StyledHeader } from "./style"
import { StyledLink } from "../../styles/buttons"

function Header({ buttonTo, buttonText }) {
    return (
        <StyledHeader>
                <img src={logo} alt="Logo Kenzie Hub" />
                {buttonText ? 
                    <StyledLink
                        to={buttonTo}
                    >
                        {buttonText}
                    </StyledLink>
                : null}
        </StyledHeader>
    )
}

export default Header

