import express from 'express'
import DAOClientes from './src/DAO/DAOClientes.js'

const port = process.env.PORT || 3000
const app = express()

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
    DAOClientes.criarTabela()
})

app.use(express.json())