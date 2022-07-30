import DAO from './DAO.js'



class DatabaseClienteMetodos extends DAO {
  static async criarTabelaClientes (){
    const query = `
        CREATE TABLE IF NOT EXISTS clientes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            endereco VARCHAR,
            formaDePagamento VARCHAR,
            cpf VARCHAR,
            telefone VARCHAR,
            email VARCHAR
        )`
    const resposta = await this.criarTabela(query)
    return resposta    
  }
  static async inserirCliente(cliente){
    const query = `INSERT INTO clientes (nome, endereco, formaDePagamento, cpf, telefone, email) VALUES (?,?,?,?,?,?)`
    const resposta = await this.inserir(cliente, query)
    return resposta  
  }
  static async listarTodosClientes(){
    const query = `SELECT * FROM clientes`
    const resposta = await this.listarTodos(query)
    return resposta
  }
  static async listarClientePorId(id){
    const query = `SELECT * FROM clientes WHERE id = ?`
    const resposta = await this.listarPorId(id, query)
    return resposta
  }
  static async deletarClientePorId(id){
    const query = `DELETE FROM clientes WHERE id = ?`
    const resposta = await this.deletarPorId(id, query)
    return resposta
  }
  static async atualizarClientePorId(id, cliente){
    const query = `UPDATE clientes
    SET nome = ?,
       endereco = ?,
       formaDePagamento = ?,
       cpf = ?,
       telefone = ?,
       email = ?
      WHERE id = ?`
    const resposta = await this.atualizarPorId(cliente,id, query)
    return resposta
  }

}

export default DatabaseClienteMetodos