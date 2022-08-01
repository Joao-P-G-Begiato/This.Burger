import DAO from "./DAO.js";

class DatabasePedidoMetodo extends DAO {
  static async criarTabelaPedido() {
    const query = `
        CREATE TABLE IF NOT EXISTS pedido(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            idCliente INTEGER,
            itensPedido VARCHAR,
            quantidadeItens INTEGER,
            totalPedido INTEGER
        )`;
    const resposta = await this.criarTabela(query);
    return resposta;
  }
  static async inserirPedido(pedido) {
    const query = `INSERT INTO pedido(idCliente, itensPedido, quantidadeItens, totalPedido) VALUES (?,?,?,?)`;
    const resposta = await this.inserir(pedido, query);
    return resposta;
  }
  static async listarTodosPedidos() {
    const query = `SELECT * FROM pedido`;
    const resposta = await this.listarTodos(query);
    return resposta;
  }
  static async listarPedidosPorId(id) {
    const query = `SELECT * FROM pedido WHERE id = ?`;
    const resposta = await this.listarPorId(id, query);
    return resposta;
  }
  static async deletarPedidosPorId(id) {
    const query = `DELETE FROM pedido WHERE id = ?`;
    const resposta = await this.deletarPorId(id, query);
    return resposta;
  }
  static async atualizarPedidosPorId(id, pedido) {
    const query = `UPDATE pedido
    SET idCliente = ?,
    itensPedido = ?,
    quantidadeItens = ?,
    totalPedido = ?
    WHERE id = ?`;
    const resposta = await this.atualizarPorId(pedido, id, query);
    return resposta;
  }
}

export default DatabasePedidoMetodo;
