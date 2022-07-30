import DAO from './DAO.js'



class DatabaseEstoqueMetodos extends DAO {
  static async criarTabelaEstoque (){
    const query = `
        CREATE TABLE IF NOT EXISTS estoque(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nomeIngrediente VARCHAR,
            quantidadeIngrediente INTEGER,
            fornecedorIngrediente VARCHAR
        )`
    const resposta = await this.criarTabela(query)
    return resposta    
  }
  static async inserirEstoque(estoque){
    const query = `INSERT INTO estoque(nomeIngrediente, quantidadeIngrediente, fornecedorIngrediente) VALUES (?,?,?)`
    const resposta = await this.inserir(estoque, query)
    return resposta  
  }
  static async listarTodosEstoque(){
    const query = `SELECT * FROM estoque`
    const resposta = await this.listarTodos(query)
    return resposta
  }
  static async listarEstoquePorId(id){
    const query = `SELECT * FROM estoque WHERE id = ?`
    const resposta = await this.listarPorId(id, query)
    return resposta
  }
  static async deletarEstoquePorId(id){
    const query = `DELETE FROM estoque WHERE id = ?`
    const resposta = await this.deletarPorId(id, query)
    return resposta
  }
  static async atualizarEstoquePorId(id, estoque){
    const query = `UPDATE estoque
    SET nomeIngrediente = ?,
        quantidadeIngrediente = ?,
        fornecedorIngrediente = ?
    WHERE id = ?`
    const resposta = await this.atualizarPorId(estoque,id, query)
    return resposta
  }

}

export default DatabaseEstoqueMetodos