import Header from "../../components/Header"
import LoginFrom from "../../components/LoginForm"
import { StyledTitleOne } from "../../styles/typography"
import { StyledLoginPage } from "./style"


function LoginPage() {
    return (
        <StyledLoginPage>
            <div className="main__container">
                <Header/>
                <div className="form__container">
                    <StyledTitleOne>Login</StyledTitleOne>
                    <LoginFrom/>
                </div>
            </div>
        </StyledLoginPage>
    )
}
export default LoginPage
