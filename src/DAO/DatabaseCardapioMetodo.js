import DAO from './DAO.js'



class DatabaseCardapioMetodos extends DAO {
  static async criarTabelaCardapio (){
    const query = `
        CREATE TABLE IF NOT EXISTS cardapio(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nomeItem VARCHAR,
            ingredientes VARCHAR,
            preco INTEGER
        )`
    const resposta = await this.criarTabela(query)
    return resposta    
  }
  static async inserirCardapio(cardapio){
    const query = `INSERT INTO cardapio(nomeItem, ingredientes, preco) VALUES (?,?,?)`
    const resposta = await this.inserir(cardapio, query)
    return resposta  
  }
  static async listarTodosCardapio(){
    const query = `SELECT * FROM cardapio`
    const resposta = await this.listarTodos(query)
    return resposta
  }
  static async listarCardapioPorId(id){
    const query = `SELECT * FROM cardapio WHERE id = ?`
    const resposta = await this.listarPorId(id, query)
    return resposta
  }
  static async deletarCardapioPorId(id){
    const query = `DELETE FROM cardapio WHERE id = ?`
    const resposta = await this.deletarPorId(id, query)
    return resposta
  }
  static async atualizarCardapioPorId(id, cardapio){
    const query = `UPDATE cardapio
    SET nomeItem = ?,
       ingredientes = ?,
       preco = ?
      WHERE id = ?`
    const resposta = await this.atualizarPorId(cardapio,id, query)
    return resposta
  }

}

export default DatabaseCardapioMetodos