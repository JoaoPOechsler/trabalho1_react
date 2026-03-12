import axios from "axios"

export async function handleUpdateHardware(id, data) {

    const response = await axios.put(`http://localhost:3000/hardware/atualizar_hardware/${id}`,data)

    return response.data

}