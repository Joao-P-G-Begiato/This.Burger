export default class ValidacaoCardapio {
    static validaNomeItem(nomeItem){
      return nomeItem.length >= 3
    }

    static validaIngredientes(ingredientes){
        const ref = ["pao", "hamburguer", "queijo", "bacon", "ovo", "alface", "tomate", "cebola"]
        const teste = ingredientes.map(ingrediente => 
            ref.includes(ingrediente)
    )
    return !teste.includes(false)
    }

    static validaPreco(preco){
       return preco > 0       
    }
    
    static isValid(nomeItem, ingredientes, preco){
      return this.validaNomeItem(nomeItem) && this.validaIngredientes(ingredientes) && this.validaPreco(preco)
    } 
  }
  
  