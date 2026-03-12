import { useParams, useNavigate } from "react-router-dom"
import { handleDeleteHardware } from "./handleDeleteHardware"

function DeleteHardware() {

    const { id } = useParams()
    const navigate = useNavigate()

    async function deletar() {
        await handleDeleteHardware(id)
        alert("Produto deletado!")
        navigate("/listar")
    }

    return (

        <div className="container">
            <h2>Deletar Hardware</h2>
            <p>Tem certeza que deseja remover este item do estoque?</p>

            <button onClick={deletar}>
                Confirmar exclusão
            </button>

            <button onClick={() => navigate("/listar")}>
                Cancelar
            </button>
        </div>

    )

}

export default DeleteHardware