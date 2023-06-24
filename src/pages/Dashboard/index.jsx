import { StyledContainer } from "../../styles/container"
import Header from "../../components/Header"
import { StyledDashboardPage } from "./style"
import { StyledHeadline, StyledTitleOne, StyledTitleTwo } from "../../styles/typography"

function DashboardPage() {
    const userData = JSON.parse(localStorage.getItem("@USER"))

   const handleLogout = () => {
    localStorage.clear()
   }

    return (
        <StyledContainer>
            <StyledDashboardPage>
                <Header buttonText="Sair" buttonTo="/" onButtonClick={handleLogout} />

                <div>
                    <StyledTitleOne>Olá, {userData.name}</StyledTitleOne>
                    <StyledHeadline>{userData.course_module}</StyledHeadline>
                </div>

                <main>
                    <StyledTitleTwo>Que pena! Estamos em desenvolvimento :(</StyledTitleTwo>
                    <StyledHeadline>Nossa aplicação está em desenvolvimento, em breve teremos novidades</StyledHeadline>
                </main>
            </StyledDashboardPage>

        </StyledContainer>
    )
}

export default DashboardPage