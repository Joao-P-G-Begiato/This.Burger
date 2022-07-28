import Database from "../infra/Database.js";

class DatabaseMetodos{
    static activePragma(){
        const pragma = "PRAGMA foreign_keys = ON"

        Database.run(pragma, (e)=>{
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras estão ativas")
            }
        })
    }

    static criarTabela(){
        
        this.activePragma()

        const query = `
        CREATE TABLE IF NOT EXISTS clientes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            endereco VARCHAR,
            formaDePagamento VARCHAR,
            cpf VARCHAR,
            telefone VARCHAR,
            email VARCHAR
        )
        `
        return new Promise((resolve, reject)=>{
            Database.run(query, (e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela clientes criada com sucesso!")
                }
            })
        })
    }

    static inserirCliente(cliente){
        const query = `INSERT INTO clientes (nome, endereco, formaDePagamento, cpf, telefone, email) VALUES (?,?,?,?,?,?)`

        const body = Object.values(cliente)

        return new Promise((resolve, reject)=>{
            Database.run(query, [...body], (e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve({error: false, message: "Cliente cadastrado com sucesso!"})
                }
            })
        })
    }
    static listarTodosClientes(){
        const query = `SELECT * FROM clientes`
        return new Promise((resolve, reject)=>{
            Database.all(query, (e, resultado)=>{
                if(e){
                    reject(e.message)
                } else {
                    return resolve(resultado)
                }
            })
        })
    }
}

export default DatabaseMetodos