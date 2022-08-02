import DatabaseCardapioMetodo from "../DAO/DatabaseCardapioMetodo.js";
import CardapioModel from "../models/cardapioModel.js";
import ValidacaoCardapio from "../services/validacaoCardapio.js";

DatabaseCardapioMetodo.criarTabelaCardapio();

class Cardapio {
  static rotas(app) {
    app.get("/cardapio", async (req, res) => {
      const response = await DatabaseCardapioMetodo.listarTodosCardapio();
      res.status(200).json(response);
    });
    app.get("/cardapio/:id", async (req, res) => {
      try {
        const cardapio = await DatabaseCardapioMetodo.listarCardapioPorId(
          req.params.id
        );
        if (!cardapio) {
          throw new Error("Item não encontrado para esse Id");
        }
        res.status(200).json(cardapio);
      } catch (error) {
        res.status(404).json(error.message);
      }
    });
    app.post("/cardapio", async (req, res) => {
      const isValid = ValidacaoCardapio.isValid(...Object.values(req.body));
      try {
        if (isValid) {
          const cardapio = new CardapioModel(...Object.values(req.body));
          const response = await DatabaseCardapioMetodo.inserirCardapio(
            cardapio
          );
          res.status(201).json(response);
        } else {
          throw new Error("Requisição incorreta, revise o corpo da mesma.");
        }
      } catch (error) {
        res.status(400).json(error.message);
      }
    });
    app.put("/cardapio/:id", async (req, res) => {
      const isValid = ValidacaoCardapio.isValid(...Object.values(req.body));
      try {
        const cardapioId = await DatabaseCardapioMetodo.listarCardapioPorId(
          req.params.id
        );
        if (!cardapioId) {
          throw new Error(
            "Item não existente para esse id, utilize o método post"
          );
        }
        if (isValid) {
          const cardapio = new CardapioModel(...Object.values(req.body));
          const response = await DatabaseCardapioMetodo.atualizarCardapioPorId(
            req.params.id,
            cardapio
          );
          res.status(200).json(response);
        } else {
          throw new Error("Requisição incorreta, revise o corpo da mesma.");
        }
      } catch (error) {
        res.status(400).json(error.message);
      }
    });
    app.delete("/cardapio/:id", async (req, res) => {
      try {
        const cardapioId = await DatabaseCardapioMetodo.listarCardapioPorId(
          req.params.id
        );
        if (!cardapioId) {
          throw new Error("Cardapio não encontrado");
        }
        const cardapio = await DatabaseCardapioMetodo.deletarCardapioPorId(
          req.params.id
        );
        res.status(200).json(cardapio);
      } catch (error) {
        console.log(error);
        res.status(404).json({ Error: error.message });
      }
    });
  }
}

export default Cardapio;
