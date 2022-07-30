import express from 'express'
import Clientes from './src/controllers/Clientes.js'
import Cardapio from './src/controllers/Cardapio.js'

const port = process.env.PORT || 3000
const app = express()

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})

app.use(express.json())

Clientes.rotas(app)
Cardapio.rotas(app)