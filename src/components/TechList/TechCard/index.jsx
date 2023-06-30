export const techCard = ({ tech }) => {
    //deleteTech from use context

    return (
        <li>
            <p>{tech.name}</p>
            <p>{tech.level}</p>
            <button>deletar</button>
        </li>
    )
}