import ValidacaoCardapio from "../services/validacaoCardapio.js";

/*Validacao nomeItem*/
test("Validar se o nome tem 3 caracteres ou mais.", () => {
  expect(ValidacaoCardapio.validaNomeItem("Rui")).toBe(true);
});

test("Validar se o nome tem 3 caracteres ou mais.", () => {
  expect(ValidacaoCardapio.validaNomeItem("JP")).toBe(false);
});

/*Validacao Ingredientes*/
test("Validar se o ingrediente consta no array pré-montada.", () => {
  expect(ValidacaoCardapio.validaIngredientes(["queijo"])).toBe(true);
});

test("Validar se o ingrediente consta no array pré-montada.", () => {
  expect(ValidacaoCardapio.validaIngredientes(["lucas"])).toBe(false);
});

/*Validacao Preço*/
test("Validar se o preço é maior do que zero.", () => {
  expect(ValidacaoCardapio.validaPreco(5)).toBe(true);
});

test("Validar se o preço é maior do que zero.", () => {
  expect(ValidacaoCardapio.validaPreco("cinco")).toBe(false);
});
