import Header from "../../components/Header"
import { StyledSmallLink } from "../../styles/buttons"

import { StyledContainer } from "../../styles/container"
import { StyledDashboardPage } from "./style"
import { StyledHeadline, StyledTitleOne, StyledTitleTwo } from "../../styles/typography"

import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

function DashboardPage() {
    const { user, userLogout} = useContext(UserContext)

    return (
        <StyledContainer>
            <StyledDashboardPage>
                <Header>
                    <StyledSmallLink onClick={userLogout}>
                        Sair
                    </StyledSmallLink>
                </Header>

                <div>
                    <StyledTitleOne>Olá, {user.name}</StyledTitleOne>
                    <StyledHeadline>{user.course_module}</StyledHeadline>
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
