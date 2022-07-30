export default class ValidacaoEstoque {
    static validaNomeIngrediente(nomeIngrediente){
      return nomeIngrediente ? nomeIngrediente.length >= 3 : false
    }

    static validaQuantidadeIngrediente(quantidadeIngrediente){
        return quantidadeIngrediente >= 0   
    }

    static validaFornecedorIngrediente(fornecedorIngrediente){
        return fornecedorIngrediente ? fornecedorIngrediente.length >= 3 : false
    }
    
    static isValid(nomeIngrediente, quantidadeIngrediente, fornecedorIngrediente){
      return this.validaNomeIngrediente(nomeIngrediente) && this.validaQuantidadeIngrediente(quantidadeIngrediente) && this.validaFornecedorIngrediente(fornecedorIngrediente)
    } 
  }
  
  