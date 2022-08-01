export default class ValidacaoPedido {
  static validaIdCliente(idCliente) {
    return idCliente > 0;
  }

  static validaItensPedido(itensPedido) {
    return itensPedido ? itensPedido.length > 0 : false;
  }

  static validaQuantidadeItens(quantidadeItens) {
    if (typeof quantidadeItens === "number") {
      return quantidadeItens > 0;
    } else {
      return false;
    }
  }

  static validaTotalPedido(totalPedido) {
    return totalPedido > 0;
  }

  static isValid(idCliente, itensPedido, quantidadeItens, totalPedido) {
    return (
      this.validaIdCliente(idCliente) &&
      this.validaItensPedido(itensPedido) &&
      this.validaQuantidadeItens(quantidadeItens) &&
      this.validaTotalPedido(totalPedido)
    );
  }
}
