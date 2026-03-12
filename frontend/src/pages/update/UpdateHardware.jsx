import { useState } from "react"
import { useParams } from "react-router-dom"
import { handleUpdateHardware } from "./handleUpdateHardware"

function UpdateHardware(){

  const {id} = useParams()

  const [form,setForm] = useState({
    nome:"",
    marca:"",
    categoria:"",
    preco:"",
    estoque:""
  })

  function handleChange(e){

    setForm({
      ...form,
      [e.target.name]:e.target.value
    })

  }

  async function handleSubmit(e){

    e.preventDefault()

    await handleUpdateHardware(id,form)

    alert("Atualizado!")

  }

  return(

    <div className="container">

      <h2>Atualizar Hardware</h2>

      <form onSubmit={handleSubmit}>

        <input name="nome" placeholder="Nome" onChange={handleChange} />

        <input name="marca" placeholder="Marca" onChange={handleChange} />

        <input name="categoria" placeholder="Categoria" onChange={handleChange} />

        <input name="preco" placeholder="Preço" onChange={handleChange} />

        <input name="estoque" placeholder="Estoque" onChange={handleChange} />

        <button type="submit">Atualizar</button>

      </form>

    </div>

  )

}

export default UpdateHardware