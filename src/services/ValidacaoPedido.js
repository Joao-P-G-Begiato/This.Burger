export default class ValidacaoPedido {
    static validaIdCliente(idCliente){
      return idCliente > 0;
    }

    static validaItensPedido(itensPedido){
        return itensPedido ? itensPedido.length > 0 : false;
    }

    static validaQuantidadeItens(quantidadeItens){
        return quantidadeItens > 0;
    }

    // static validaTotalPedido(totalPedido) {
    //     return totalPedido > 0;
    // }
    
    static isValid(idCliente, itensPedido, quantidadeItens){
      return this.validaIdCliente(idCliente) && this.validaItensPedido(itensPedido) && this.validaQuantidadeItens(quantidadeItens)
    } 
  }