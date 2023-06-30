import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"


function TechCard() {
    const { techList } = useContext(TechContext)

    return (
        <ul>
            {techList.map((tech) => (
                <li key={tech.id} tech={tech}></li>
            ))}
        </ul>
    )
}

export default TechCard