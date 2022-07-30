class pedidoModel {
    constructor(idCliente, itensPedido, quantidadeItens) {
        this.idCliente = idCliente
        this.itensPedido = itensPedido
        this.quantidadeItens = quantidadeItens
    }

   totalPedido = Object.values(this.itensPedido).reduce((a,b)=> a+b);
}


export default pedidoModel