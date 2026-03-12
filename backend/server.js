const express = require('express')
const cors = require('cors')

const hardwareRoutes = require('./routes/hardware.routes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/hardware', hardwareRoutes)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})