import Header from "../../components/Header"
import { StyledSmallLink } from "../../styles/buttons"
import { StyledContainer } from "../../styles/container"
import { StyledDashboardPage } from "./style"
import { StyledHeadline, StyledTitleOne, StyledTitleTwo } from "../../styles/typography"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import Tech from "../../components/Tech"

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

                <div className="user__container">
                    <StyledTitleOne>Olá, {user.name}</StyledTitleOne>
                    <StyledHeadline>{user.course_module}</StyledHeadline>
                </div>

                <main>
                   <Tech/>
                </main>
            </StyledDashboardPage>

        </StyledContainer>
    )
}

export default DashboardPage
