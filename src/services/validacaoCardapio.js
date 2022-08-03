export default class ValidacaoCardapio {

  /**
   * 
   * @param {string} nomeItem 
   * @returns boolean
   */
  static validaNomeItem(nomeItem) {
    return nomeItem.length >= 3;
  }

  /**
  * 
  * @param {Array|string} ingredientes 
  * @returns boolean
  */
  static validaIngredientes(ingredientes) {
    const ref = [
      "pao",
      "hamburguer",
      "queijo",
      "bacon",
      "ovo",
      "alface",
      "tomate",
      "cebola",
    ];
    const teste = ingredientes.map((ingrediente) => ref.includes(ingrediente));
    return !teste.includes(false);
  }

  /**
   * 
   * @param {float} preco 
   * @returns boolean
   */
  static validaPreco(preco) {
    return preco > 0;
  }

  /**
   * 
   * @param {string} nomeItem 
   * @param {Array|string} ingredientes 
   * @param {float} preco 
   * @returns boolean
   */
  static isValid(nomeItem, ingredientes, preco) {
    return (
      this.validaNomeItem(nomeItem) &&
      this.validaIngredientes(ingredientes) &&
      this.validaPreco(preco)
    );
  }
}
