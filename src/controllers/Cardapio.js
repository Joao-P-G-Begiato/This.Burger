import DatabaseCardapioMetodo from '../DAO/DatabaseCardapioMetodo.js'
import cardapioModel from '../models/cardapioModel.js'
import validacaoCardapio from '../services/validacaoCardapio.js'

DatabaseCardapioMetodo.criarTabelaCardapio()

class Cardapio {
  static rotas(app) {
    app.get("/cardapio", async (req,res)=>{
      const response = await DatabaseCardapioMetodo.listarTodosCardapio()
      res.status(200).json(response)
    })
    app.get("/cardapio/:id", async (req, res)=>{
      try {
          const cardapio = await DatabaseCardapioMetodo.listarCardapioPorId(req.params.id)
          if(!cardapio){
              throw new Error("cardapio não encontrado para esse Id")
          }
          res.status(200).json(cardapio)
      } catch (error) {
          res.status(404).json(error.message)
      }
    })
    app.post("/cardapio", async (req, res)=>{
    const isValid = validacaoCardapio.isValid(...Object.values(req.body))
    try {
        if(isValid){
            const cardapio = new cardapioModel(...Object.values(req.body))
            const response = await DatabaseCardapioMetodo.inserirCardapio(cardapio)
            res.status(201).json(response)
        } else {
            throw new Error("Requisição incompleta, revise o corpo da mesma.")
        }
    } catch(error) {
        res.status(400).json(error.message)
    }
    })
    app.put("/cardapio/:id", (req, res)=> {
      const isValid = validacaoCardapio.isValid(...Object.values(req.body))

      if(isValid){
          const cardapio = new cardapioModel(...Object.values(req.body))
          const response = DatabaseCardapioMetodo.atualizarCardapioPorId(req.params.id, cardapio)
          res.status(201).json(response)
      } else {
          res.status(400).json({Erro:"Erro"})
      }
    })
    app.delete("/cardapio/:id", async (req, res) => {
      try {                
          const cardapio = await DatabaseCardapioMetodo.deletarCardapioPorId(req.params.id)
          if(!cardapio){
              throw new Error("cardapio não encontrado")
          }
          res.status(200).json(cardapio)
      } catch (error) {    
        console.log(error)
          res.status(404).json({Error: error.message})
      }
                  
    })
  }
}

export default Cardapio