import axios from "axios"

export async function handleDeleteHardware(id){

  const response = await axios.delete(
    `http://localhost:3000/hardware/deletar_hardware/${id}`
  )

  return response.data

}