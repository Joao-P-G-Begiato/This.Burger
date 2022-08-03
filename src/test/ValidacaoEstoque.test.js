import ValidacaoEstoque from "../services/validacaoEstoque.js";

/*Validacao nomeIngredientes*/
test("Validar se o nome tem 3 caracteres ou mais.", () => {
  expect(ValidacaoEstoque.validaNomeIngrediente("pao")).toBe(true);
});

test("Validar se o nome tem 3 caracteres ou mais.", () => {
  expect(ValidacaoEstoque.validaNomeIngrediente("bu")).toBe(false);
});

/*Validacao quantidadeIngredientes*/
test("Validar se a quantidade de ingredientes tem o valor maior ou igual a zero.", () => {
  expect(ValidacaoEstoque.validaQuantidadeIngrediente(5)).toBe(true);
});

test("Validar se a quantidade de ingredientes tem o valor maior ou igual a zero..", () => {
  expect(ValidacaoEstoque.validaQuantidadeIngrediente(-2)).toBe(false);
});

/*Validacao fornecedorIngredientes*/
test("Validar se o nome do ingrediente tem 3 caracteres ou mais.", () => {
  expect(ValidacaoEstoque.validaFornecedorIngrediente("tomate")).toBe(true);
});

test("Validar se o nome do ingrediente tem 3 caracteres ou mais.", () => {
  expect(ValidacaoEstoque.validaFornecedorIngrediente("po")).toBe(false);
});
