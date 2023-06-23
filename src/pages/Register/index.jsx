import Header from "../../components/Header"
import RegisterFrom from "../../components/registerForm"
import { StyledHeadline, StyledTitleOne } from "../../styles/typography"

import { StyledRegisterPage } from "./style"

function RegisterPage() {
    return (
        <StyledRegisterPage>
            <div className="main__container">
                <Header buttonText="Voltar" buttonTo="/"/>
                <div className="form__container">
                    <StyledTitleOne>Crie sua conta</StyledTitleOne>
                    <StyledHeadline>Rapido e grátis, vamos nessa</StyledHeadline>
                    <RegisterFrom />
                </div>
            </div>

        </StyledRegisterPage>
    )
}
export default RegisterPage
