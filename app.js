import express from 'express'
import * as dotenv from "dotenv"
import Clientes from './src/controllers/Clientes.js'
import Cardapio from './src/controllers/Cardapio.js'
import Estoque from './src/controllers/Estoque.js'
import Pedido from './src/controllers/Pedido.js'
import Fornecedor from './src/controllers/Fornecedor.js'
import cors from 'cors'

dotenv.config()

const port = process.env.PORT || 3000
const app = express()

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use(cors())
app.use(express.json());

Clientes.rotas(app);
Cardapio.rotas(app);
Estoque.rotas(app);
Pedido.rotas(app);
Fornecedor.rotas(app);
