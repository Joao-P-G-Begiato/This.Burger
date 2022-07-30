import DatabasePedidoMetodo from '../DAO/DatabasePedidoMetodo.js'
import PedidoModel from '../models/PedidoModel.js'
import ValidacaoPedido from '../services/ValidacaoPedido.js'

DatabasePedidoMetodo.criarTabelaPedido()

class Pedido {
  static rotas(app) {
    app.get("/pedido", async (req,res)=>{
      const response = await DatabasePedidoMetodo.listarTodosPedidos()
      res.status(200).json(response)
    })
    app.get("/pedido/:id", async (req, res)=>{
      try {
          const pedido = await DatabasePedidoMetodo.listarPedidosPorId(req.params.id)
          if(!pedido){
              throw new Error("Pedido não encontrado para esse Id")
          }
          res.status(200).json(pedido)
      } catch (error) {
          res.status(404).json(error.message)
      }
    })
    app.post("/pedido", async (req, res)=>{
    const isValid = ValidacaoPedido.isValid(...Object.values(req.body))
    try {
        if(isValid){
            const pedido = new PedidoModel(...Object.values(req.body))
            const response = await DatabasePedidoMetodo.inserirPedido(pedido)
            res.status(201).json(response)
        } else {
            throw new Error("Requisição incompleta, revise o corpo da mesma.")
        }
    } catch(error) {
        res.status(400).json(error.message)
    }
    })
    app.put("/pedido/:id", (req, res)=> {
      const isValid = ValidacaoPedido.isValid(...Object.values(req.body))

      if(isValid){
          const pedido = new PedidoModel(...Object.values(req.body))
          const response = DatabasePedidoMetodo.atualizarPedidosPorId(req.params.id, pedido)
          res.status(201).json(response)
      } else {
          res.status(400).json({Erro:"Erro"})
      }
    })
    app.delete("/pedido/:id", async (req, res) => {
      try {                
          const pedido = await DatabasePedidoMetodo.deletarPedidosPorId(req.params.id)
          if(!pedido){
              throw new Error("Pedido não encontrado")
          }
          res.status(200).json(pedido)
      } catch (error) {    
        console.log(error)
          res.status(404).json({Error: error.message})
      }
                  
    })
  }
}

export default Pedido