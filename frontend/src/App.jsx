import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

import Home from "./pages/home/Home"
import ListHardware from "./pages/list/ListHardware"
import CreateHardware from "./pages/create/CreateHardware"
import UpdateHardware from "./pages/update/UpdateHardware"
import DeleteHardware from "./pages/delete/DeleteHardware"

function App() {
  return (
    <BrowserRouter>

      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listar" element={<ListHardware />} />
        <Route path="/cadastrar" element={<CreateHardware />} />
        <Route path="/atualizar/:id" element={<UpdateHardware />} />
        <Route path="/deletar/:id" element={<DeleteHardware />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App