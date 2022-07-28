import DAOClientes from '../DAO/DAOClientes.js'
import Database from '../infra/database.js'
import ClienteModel from '../models/clienteModel.js'
import ValidacaoCliente from '../services/ValidacaoCliente.js'

class Cliente {
  static rotas(app) {
    app.get("/clientes", async (req,res)=>{
      const response = await DAOClientes.listarTodosClientes()
      res.status(200).json(response)
  })
  app.post("/clientes", async (req, res)=>{
    const isValid = ValidacaoCliente.isValid(...Object.values(req.body))
    try {
        if(isValid){
            const cliente = new ClienteModel(...Object.values(req.body))
            const response = await DAOClientes.inserirCliente(cliente)
            res.status(201).json(response)
        } else {
            throw new Error("Requisição incompleta, revise o corpo da mesma.")
        }
    } catch(error) {
        res.status(400).json(error.message)
    }
  });
  }
  
}

export default Cliente