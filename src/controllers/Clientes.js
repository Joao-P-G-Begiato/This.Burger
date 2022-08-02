import DatabaseClienteMetodo from "../DAO/DatabaseClienteMetodo.js";
import ClienteModel from "../models/ClienteModel.js";
import ValidacaoCliente from "../services/ValidacaoCliente.js";

DatabaseClienteMetodo.criarTabelaClientes();

class Cliente {
  static rotas(app) {
    app.get("/clientes", async (req, res) => {
      const response = await DatabaseClienteMetodo.listarTodosClientes();
      res.status(200).json(response);
    });
    app.get("/clientes/:id", async (req, res) => {
      try {
        const cliente = await DatabaseClienteMetodo.listarClientePorId(
          req.params.id
        );
        if (!cliente) {
          throw new Error("Cliente não encontrado para esse Id");
        }
        res.status(200).json(cliente);
      } catch (error) {
        res.status(404).json(error.message);
      }
    });
    app.post("/clientes", async (req, res) => {
      const isValid = ValidacaoCliente.isValid(...Object.values(req.body));
      try {
        if (isValid) {
          const cliente = new ClienteModel(...Object.values(req.body));
          const response = await DatabaseClienteMetodo.inserirCliente(cliente);
          res.status(201).json(response);
        } else {
          throw new Error("Requisição incorreta, revise o corpo da mesma.");
        }
      } catch (error) {
        res.status(400).json(error.message);
      }
    });
    app.put("/clientes/:id", async (req, res) => {
      const isValid = ValidacaoCliente.isValid(...Object.values(req.body));
      try {
        const clienteId = await DatabaseClienteMetodo.listarClientePorId(
          req.params.id
        );
        if (!clienteId) {
          throw new Error(
            "Cliente não existente para esse id, utilize o método post"
          );
        }
        if (isValid) {
          const cliente = new ClienteModel(...Object.values(req.body));
          const response = await DatabaseClienteMetodo.atualizarClientePorId(
            req.params.id,
            cliente
          );
          res.status(200).json(response);
        } else {
          throw new Error("Requisição incorreta, revise o corpo da mesma.");
        }
      } catch (error) {
        res.status(400).json(error.message);
      }
    });
    app.delete("/clientes/:id", async (req, res) => {
      try {
        const clienteId = await DatabaseClienteMetodo.listarClientePorId(
          req.params.id
        );
        if (!clienteId) {
          throw new Error("Cliente não encontrado");
        }
        const cliente = await DatabaseClienteMetodo.deletarClientePorId(
          req.params.id
        );
        res.status(200).json(cliente);
      } catch (error) {
        console.log(error);
        res.status(404).json({ Error: error.message });
      }
    });
  }
}

export default Cliente;
