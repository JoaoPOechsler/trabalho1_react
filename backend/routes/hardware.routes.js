const express = require('express')
const router = express.Router()

const { readFile, writeFile } = require('../utils/fileHandler')

const path = './data/hardware.json'

router.get('/listar_hardware', (req, res) => {
  const data = readFile(path)
  res.json(data)
})

router.get('/listar_hardware/:id', (req, res) => {
  const data = readFile(path)

  const item = data.find(p => p.id == req.params.id)

  if (!item) {
    return res.status(404).json({ mensagem: "Produto não encontrado" })
  }

  res.json(item)
})

router.post('/cadastrar_hardware', (req, res) => {

  const data = readFile(path)

  const novo = {
    id: Date.now(),
    ...req.body
  }

  data.push(novo)

  writeFile(path, data)

  res.json(novo)
})

router.put('/atualizar_hardware/:id', (req, res) => {

  const data = readFile(path)

  const index = data.findIndex(p => p.id == req.params.id)

  if (index === -1) {
    return res.status(404).json({ mensagem: "Produto não encontrado" })
  }

  data[index] = {
    ...data[index],
    ...req.body
  }

  writeFile(path, data)

  res.json(data[index])
})

router.delete('/deletar_hardware/:id', (req, res) => {

  let data = readFile(path)

  const novoArray = data.filter(p => p.id != req.params.id)

  writeFile(path, novoArray)

  res.json({ mensagem: "Produto removido" })
})

module.exports = router