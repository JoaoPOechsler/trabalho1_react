import { useEffect, useState } from "react"
import { handleListHardware } from "./handleListHardware"
import { Link } from "react-router-dom"
import axios from "axios"

function ListHardware() {
    const [lista, setLista] = useState([])

    useEffect(() => {
        carregar()
    }, [])

    async function carregar() {
        const dados = await handleListHardware()

        setLista(dados)
    }

    async function deletar(id) {
        await axios.delete(
            `http://localhost:3000/hardware/deletar_hardware/${id}`
        )

        carregar();
    }

    return (
        <div className="container">

            <h2>Peças cadastradas</h2>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                        <th>Estoque</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {lista.map(item => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td>{item.marca}</td>
                            <td>{item.categoria}</td>
                            <td>{item.preco}</td>
                            <td>{item.estoque}</td>

                            <td>
                                <Link to={`/atualizar/${item.id}`}>
                                    Editar
                                </Link>

                                <Link to={`/deletar/${item.id}`}>
                                    Deletar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListHardware