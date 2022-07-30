export default class ValidacaoEstoque {
    static validaNomeIngrediente(nomeIngrediente){
      return nomeIngrediente.length >= 3
    }

    static validaQuantidadeIngrediente(quantidadeIngrediente){
        return quantidadeIngrediente >= 0   
    }

    static validaFornecedorIngrediente(fornecedorIngrediente){
        return fornecedorIngrediente.length >= 3
    }
    
    static isValid(nomeIngrediente, quantidadeIngrediente, fornecedorIngrediente){
      return this.validaNomeIngrediente(nomeIngrediente) && this.validaQuantidadeIngrediente(quantidadeIngrediente) && this.validaFornecedorIngrediente(fornecedorIngrediente)
    } 
  }
  
  