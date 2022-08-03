export default class ValidacaoEstoque {

  /**
   * 
   * @param {string} nomeIngrediente 
   * @returns boolean
   */
  static validaNomeIngrediente(nomeIngrediente) {
    return nomeIngrediente ? nomeIngrediente.length >= 3 : false;
  }

  /**
   * 
   * @param {number} quantidadeIngrediente 
   * @returns boolean
   */
  static validaQuantidadeIngrediente(quantidadeIngrediente) {
    return quantidadeIngrediente >= 0;
  }

  /**
   * 
   * @param {string} fornecedorIngrediente 
   * @returns boolean
   */
  static validaFornecedorIngrediente(fornecedorIngrediente) {
    return fornecedorIngrediente ? fornecedorIngrediente.length >= 3 : false;
  }

  /**
   * 
   * @param {string} nomeIngrediente 
   * @param {number} quantidadeIngrediente 
   * @param {string} fornecedorIngrediente 
   * @returns boolean
   */
  static isValid(
    nomeIngrediente,
    quantidadeIngrediente,
    fornecedorIngrediente
  ) {
    return (
      this.validaNomeIngrediente(nomeIngrediente) &&
      this.validaQuantidadeIngrediente(quantidadeIngrediente) &&
      this.validaFornecedorIngrediente(fornecedorIngrediente)
    );
  }
}
