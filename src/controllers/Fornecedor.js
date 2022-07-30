import DatabaseFornecedorMetodo from '../DAO/DatabaseFornecedorMetodo.js'
import FornecedorModel from '../models/FornecedorModel.js'
import ValidacaoFornecedor from '../services/ValidacaoFornecedor.js'

DatabaseFornecedorMetodo.criarTabelaFornecedor()

class Fornecedor {
  static rotas(app) {
    app.get("/fornecedor", async (req,res)=>{
      const response = await DatabaseFornecedorMetodo.listarTodosFornecedor()
      res.status(200).json(response)
    })
    app.get("/fornecedor/:id", async (req, res)=>{
      try {
          const fornecedor = await DatabaseFornecedorMetodo.listarFornecedorPorId(req.params.id)
          if(!fornecedor){
              throw new Error("Fornecedor não encontrado para esse Id")
          }
          res.status(200).json(fornecedor)
      } catch (error) {
          res.status(404).json(error.message)
      }
    })
    app.post("/fornecedor", async (req, res)=>{
    const isValid = ValidacaoFornecedor.isValid(...Object.values(req.body))
    try {
        if(isValid){
            const fornecedor = new FornecedorModel(...Object.values(req.body))
            const response = await DatabaseFornecedorMetodo.inserirFornecedor(fornecedor)
            res.status(201).json(response)
        } else {
            throw new Error("Requisição incompleta, revise o corpo da mesma.")
        }
    } catch(error) {
        res.status(400).json(error.message)
    }
    })
    app.put("/fornecedor/:id", (req, res)=> {
      const isValid = ValidacaoFornecedor.isValid(...Object.values(req.body))

      if(isValid){
          const fornecedor = new FornecedorModel(...Object.values(req.body))
          const response = DatabaseFornecedorMetodo.atualizarFornecedorPorId(req.params.id, fornecedor)
          res.status(201).json(response)
      } else {
          res.status(400).json({Erro:"Erro"})
      }
    })
    app.delete("/fornecedor/:id", async (req, res) => {
      try {                
          const fornecedor = await DatabaseFornecedorMetodo.deletarFornecedorPorId(req.params.id)
          if(!fornecedor){
              throw new Error("Fornecedor não encontrado")
          }
          res.status(200).json(fornecedor)
      } catch (error) {    
        console.log(error)
          res.status(404).json({Error: error.message})
      }
                  
    })
  }
}

export default Fornecedor