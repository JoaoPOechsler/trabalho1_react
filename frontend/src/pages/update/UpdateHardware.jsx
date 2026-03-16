import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateHardware() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");

  useEffect(() => {
    carregarHardware();
  }, []);

  async function carregarHardware() {
    try {
      const response = await axios.get(
        `http://localhost:3000/hardware/listar_hardware/${id}`
      );

      const hardware = response.data;

      setNome(hardware.nome);
      setMarca(hardware.marca);
      setCategoria(hardware.categoria);
      setPreco(hardware.preco);
      setEstoque(hardware.estoque);
    } catch (error) {
      console.error("Erro ao carregar hardware", error);
    }
  }

  async function handleUpdate(e) {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/hardware/atualizar_hardware/${id}`, {
        nome,
        marca,
        categoria,
        preco,
        estoque,
      });

      alert("Hardware atualizado com sucesso!");
      navigate("/listar");
    } catch (error) {
      console.error("Erro ao atualizar", error);
    }
  }

  return (
    <div className="form-container">
      <h2>Atualizar Hardware</h2>

      <form onSubmit={handleUpdate}>
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

          <button type="submit">Atualizar</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateHardware;