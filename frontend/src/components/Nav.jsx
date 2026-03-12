import { Link } from "react-router-dom"
import "./layout.css"

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>

      <Link to="/listar">
        Listar Peças
      </Link>

      <Link to="/cadastrar">
        Cadastrar Peça
      </Link>
    </nav>
  )
}

export default Nav