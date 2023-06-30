import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { StyledTitleThree } from "../../styles/typography"
import { StyledGreyButton } from "../../styles/buttons"
import { StyledTech } from "./style"


function Tech() {
    const { techlist } = useContext(TechContext)

    return (
        <StyledTech>
            <div>
                <StyledTitleThree>Tecnologias</StyledTitleThree>
                <StyledGreyButton>+</StyledGreyButton>
            </div>
            <ul>
            </ul>
        </StyledTech>
    )
}

export default Tech