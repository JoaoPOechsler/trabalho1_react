import { useEffect, useState } from "react"
import axios from "axios"

function Home() {
    const [cotacoes, setCotacoes] = useState(null)

    useEffect(() => {
        axios.get("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
            .then(res => {
                setCotacoes(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    if (!cotacoes) {
        return <p>Carregando as cotações</p>
    }

    return (
        <div className="home">
            <h2>Cotações do Dia</h2>

            <div className="cotacoes">

                <div className="card-cotacao">
                    <h3>💵 Dólar</h3>
                    <p>R$ 5.24</p>
                </div>

                <div className="card-cotacao">
                    <h3>💶 Euro</h3>
                    <p>R$ 6.03</p>
                </div>

                <div className="card-cotacao">
                    <h3>₿ Bitcoin</h3>
                    <p>R$ 368051</p>
                </div>

                <div className="card-cotacao">
                    <h3>📈 Variação USD</h3>
                    <p>1.80%</p>
                </div>

            </div>
        </div>
    )
}

export default Home