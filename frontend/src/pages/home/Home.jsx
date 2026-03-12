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
        <div className="container">
            <h2>Cotações do Dia</h2>
            <p>USD: R$ {cotacoes.USDBRL.bid}</p>
            <p>EUR: R$ {cotacoes.EURBRL.bid}</p>
            <p>BTC: R$ {cotacoes.BTCBRL.bid}</p>
            <p>Variação USD: {cotacoes.USDBRL.pctChange}%</p>
        </div>
    )
}

export default Home