import DAO from "./DAO.js";

class DatabaseFornecedorMetodo extends DAO {
  static async criarTabelaFornecedor() {
    const query = `
        CREATE TABLE IF NOT EXISTS fornecedor(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nomeFornecedor VARCHAR,
          taxa VARCHAR,
          endereco VARCHAR,
          item VARCHAR,
          telefone VARCHAR,
          cnpj VARCHAR
        )`;
    const resposta = await this.criarTabela(query);
    return resposta;
  }
  static async inserirFornecedor(fornecedor) {
    const query = `INSERT INTO fornecedor(nomeFornecedor, taxa, endereco, item, telefone, cnpj ) VALUES (?,?,?,?,?,?)`;
    const resposta = await this.inserir(fornecedor, query);
    return resposta;
  }
  static async listarTodosFornecedor() {
    const query = `SELECT * FROM fornecedor`;
    const resposta = await this.listarTodos(query);
    return resposta;
  }
  static async listarFornecedorPorId(id) {
    const query = `SELECT * FROM fornecedor WHERE id = ?`;
    const resposta = await this.listarPorId(id, query);
    return resposta;
  }
  static async deletarFornecedorPorId(id) {
    const query = `DELETE FROM fornecedor WHERE id = ?`;
    const resposta = await this.deletarPorId(id, query);
    return resposta;
  }
  static async atualizarFornecedorPorId(id, fornecedor) {
    const query = `UPDATE fornecedor
    SET nomeFornecedor = ?,
      taxa = ?,
      endereco = ?,
      item = ?,
      telefone = ?,
      cnpj = ?
    WHERE id = ?`;
    const resposta = await this.atualizarPorId(fornecedor, id, query);
    return resposta;
  }
}

export default DatabaseFornecedorMetodo;
