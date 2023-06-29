import logo from "../../assets/logo.svg"

import { StyledHeader } from "./style"

function Header({ children }) {

    return (
        <StyledHeader>
                <img src={logo} alt="Logo Kenzie Hub" />
                {children}
        </StyledHeader>
    )
}

export default Header
