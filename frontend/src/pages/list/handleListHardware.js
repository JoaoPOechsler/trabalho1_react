import axios from "axios"

export async function handleListHardware() {
    const response = await axios.get("http://localhost:3000/hardware/listar_hardware")
    return response.data
}