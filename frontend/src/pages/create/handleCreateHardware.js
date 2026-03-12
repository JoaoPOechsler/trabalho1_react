import axios from "axios"

export async function handleCreateHardware(data) {

    const response = await axios.post(
        "http://localhost:3000/hardware/cadastrar_hardware",
        data
    )

    return response.data

}