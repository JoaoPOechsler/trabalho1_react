import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CadastrarHardware() {
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [marca, setMarca] = useState("");
    const [categoria, setCategoria] = useState("");
    const [preco, setPreco] = useState("");
    const [estoque, setEstoque] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/hardware/cadastrar_hardware", {
                nome,
                marca,
                categoria,
                preco,
                estoque,
            });

            alert("Hardware cadastrado com sucesso!");

            navigate("/listar");
        } catch (error) {
            console.error("Erro ao cadastrar hardware", error);
        }
    }

    return (
        <div className="form-container">
            <h2>Cadastrar Hardware</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Marca"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Preço"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Estoque"
                        value={estoque}
                        onChange={(e) => setEstoque(e.target.value)}
                    />

                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default CadastrarHardware;