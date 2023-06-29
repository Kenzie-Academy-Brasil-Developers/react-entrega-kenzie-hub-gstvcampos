import Header from "../../components/Header"
import RegisterForm from "../../components/RegisterForm"

import { StyledHeadline, StyledTitleOne } from "../../styles/typography"
import { StyledRegisterPage } from "./style"
import { StyledSmallLink } from "../../styles/buttons"

import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

function RegisterPage() {
    const { userLogout } = useContext(UserContext)
    
    return (
        <StyledRegisterPage>
            <div className="main__container">
                <Header>
                    <StyledSmallLink to="/">
                        Voltar
                    </StyledSmallLink>
                </Header>
                <div className="form__container">
                    <StyledTitleOne>Crie sua conta</StyledTitleOne>
                    <StyledHeadline>Rapido e grátis, vamos nessa</StyledHeadline>
                    <RegisterForm />
                </div>
            </div>

        </StyledRegisterPage>
    )
}
export default RegisterPage
