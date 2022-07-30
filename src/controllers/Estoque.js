import DatabaseEstoqueMetodo from '../DAO/DatabaseEstoqueMetodo.js'
import estoqueModel from '../models/estoqueModel.js'
import ValidacaoEstoque from '../services/ValidacaoEstoque.js'

DatabaseEstoqueMetodo.criarTabelaEstoque()

class Estoque {
  static rotas(app) {
    app.get("/estoque", async (req,res)=>{
      const response = await DatabaseEstoqueMetodo.listarTodosEstoque()
      res.status(200).json(response)
    })
    app.get("/estoque/:id", async (req, res)=>{
      try {
          const Estoque = await DatabaseEstoqueMetodo.listarEstoquePorId(req.params.id)
          if(!Estoque){
              throw new Error("Estoque não encontrado para esse Id")
          }
          res.status(200).json(Estoque)
      } catch (error) {
          res.status(404).json(error.message)
      }
    })
    app.post("/estoque", async (req, res)=>{
    const isValid = ValidacaoEstoque.isValid(...Object.values(req.body))
    try {
        if(isValid){
            const estoque = new estoqueModel(...Object.values(req.body))
            const response = await DatabaseEstoqueMetodo.inserirEstoque(estoque)
            res.status(201).json(response)
        } else {
            throw new Error("Requisição incompleta, revise o corpo da mesma.")
        }
    } catch(error) {
        res.status(400).json(error.message)
    }
    })
    app.put("/estoque/:id", (req, res)=> {
      const isValid = ValidacaoEstoque.isValid(...Object.values(req.body))

      if(isValid){
          const Estoque = new estoqueModel(...Object.values(req.body))
          const response = DatabaseEstoqueMetodo.atualizarEstoquePorId(req.params.id, Estoque)
          res.status(201).json(response)
      } else {
          res.status(400).json({Erro:"Erro"})
      }
    })
    app.delete("/estoque/:id", async (req, res) => {
      try {                
          const estoque = await DatabaseEstoqueMetodo.deletarEstoquePorId(req.params.id)
          if(!estoque){
              throw new Error("Estoque não encontrado")
          }
          res.status(200).json(estoque)
      } catch (error) {    
        console.log(error)
          res.status(404).json({Error: error.message})
      }
                  
    })
  }
}

export default Estoque