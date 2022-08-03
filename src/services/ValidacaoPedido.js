export default class ValidacaoPedido {
  /**
   * 
   * @param {number} idCliente 
   * @returns boolean
   */
  static validaIdCliente(idCliente) {
    return idCliente > 0;
  }

  /**
   * 
   * @param {Array|string} itensPedido 
   * @returns boolean
   */
  static validaItensPedido(itensPedido) {
    return itensPedido ? itensPedido.length > 0 : false;
  }

  /**
   * 
   * @param {number} quantidadeItens 
   * @returns boolean
   */
  static validaQuantidadeItens(quantidadeItens) {
    if (typeof quantidadeItens === "number") {
      return quantidadeItens > 0;
    } else {
      return false;
    }
  }

  /**
   * 
   * @param {float} totalPedido 
   * @returns boolean
   */
  static validaTotalPedido(totalPedido) {
    return totalPedido > 0;
  }

  /**
   * 
   * @param {number} idCliente 
   * @param {Array|string} itensPedido 
   * @param {number} quantidadeItens 
   * @param {float} totalPedido 
   * @returns boolean
   */
  static isValid(idCliente, itensPedido, quantidadeItens, totalPedido) {
    return (
      this.validaIdCliente(idCliente) &&
      this.validaItensPedido(itensPedido) &&
      this.validaQuantidadeItens(quantidadeItens) &&
      this.validaTotalPedido(totalPedido)
    );
  }
}
