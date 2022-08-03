import Database from "../infra/Database.js";

class DAO {
  static async activePragma() {
    const query = "PRAGMA foreign_keys = ON";

    Database.run(query, (e) => {
      if (e) {
        console.log(e);
      } else {
        console.log("Entidade está ativa");
      }
    });
  }

  static criarTabela(query) {
    this.activePragma();

    return new Promise((resolve, reject) => {
      Database.run(query, (e) => {
        if (e) {
          reject(e.message);
        } else {
          resolve("Tabela criada com sucesso!");
        }
      });
    });
  }

  static inserir(entidade, query) {
    const body = Object.values(entidade);

    return new Promise((resolve, reject) => {
      Database.run(query, [...body], (e) => {
        if (e) {
          reject(e.message);
        } else {
          resolve({ error: false, message: "Cadastrado com sucesso!" });
        }
      });
    });
  }
  static listarTodos(query) {
    return new Promise((resolve, reject) => {
      Database.all(query, (e, resultado) => {
        if (e) {
          reject(e.message);
        } else {
          return resolve(resultado);
        }
      });
    });
  }
  static listarPorId(id, query) {
    return new Promise((resolve, reject) => {
      Database.get(query, id, (e, resultado) => {
        if (e) {
          reject(e.message);
        } else {
          return resolve(resultado);
        }
      });
    });
  }
  static deletarPorId(id, query) {
    return new Promise((resolve, reject) => {
      Database.run(query, id, (e) => {
        if (e) {
          reject(e.message);
        } else {
          resolve({
            erro: false,
            message: `Registro com Id ${id} deletado com sucesso`,
          });
        }
      });
    });
  }
  static atualizarPorId(entidade, id, query) {
    const body = Object.values(entidade);
    return new Promise((resolve, reject) => {
      Database.run(query, [...body, id], (e) => {
        if (e) {
          reject(e.message);
        } else {
          resolve({message: `ID ${id} atualizado com sucesso.`});
        }
      });
    });
  }
}

export default DAO;
