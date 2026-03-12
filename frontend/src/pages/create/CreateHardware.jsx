import { useState } from "react"
import { handleCreateHardware } from "./handleCreateHardware"

function CreateHardware() {

    const [form, setForm] = useState({
        nome: "",
        marca: "",
        categoria: "",
        preco: "",
        estoque: ""
    })

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await handleCreateHardware(form)
        alert("Produto cadastrado!")
    }

    return (

        <div className="container">
            <h2>Cadastrar Hardware</h2>

            <form onSubmit={handleSubmit}>
                <input name="nome" placeholder="Nome" onChange={handleChange} />
                <input name="marca" placeholder="Marca" onChange={handleChange} />
                <input name="categoria" placeholder="Categoria" onChange={handleChange} />
                <input name="preco" placeholder="Preço" onChange={handleChange} />
                <input name="estoque" placeholder="Estoque" onChange={handleChange} />
                <button type="submit">Cadastrar</button>
            </form>
        </div>

    )

}

export default CreateHardware