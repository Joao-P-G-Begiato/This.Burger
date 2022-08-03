import ValidacaoFornecedor from "../services/ValidacaoFornecedor.js";

/*Validacao nomeFornecedor*/
test("nome.", () => {
  expect(ValidacaoFornecedor.validaNomeFornecedor("Friboi")).toBe(true);
});

test("Validar se o nome do fornecedor tem 3 caracteres ou mais.", () => {
  expect(ValidacaoFornecedor.validaNomeFornecedor("JP")).toBe(false);
});

/*Validacao Taxa*/
test("Validar se o valor da taxa é maior do que zero.", () => {
  expect(ValidacaoFornecedor.validataxa(5)).toBe(true);
});

test("Validar se o valor da taxa é maior do que zero.", () => {
  expect(ValidacaoFornecedor.validataxa(0)).toBe(false);
});

/*Validacao Endereço*/
test("Validar se o endereço possui 7 ou mais caracteres.", () => {
  expect(ValidacaoFornecedor.validaEndereco("Rua das hortas")).toBe(true);
});

test("Validar se o endereço possui 7 ou mais caracteres.", () => {
  expect(ValidacaoFornecedor.validaEndereco("Rua Y")).toBe(false);
});

/*Validacao Item*/
test("Validar se o nome do item tem 3 caracteres ou mais.", () => {
  expect(ValidacaoFornecedor.validaItem("hamburguer")).toBe(true);
});

test("Validar se o nome do item tem 3 caracteres ou mais.", () => {
  expect(ValidacaoFornecedor.validaItem("pc")).toBe(false);
});

/*Validacao telefone*/
test("Validar se o telefone é numero e com 11 caracteres.", () => {
  expect(ValidacaoFornecedor.validaTelefone("12345678945")).toBe(true);
});

test("Validar se o telefone é numero e com 11 caracteres.", () => {
  expect(ValidacaoFornecedor.validaTelefone("658743")).toBe(false);
});

/*Validacao CNPJ*/
test("Validar se o CNPJ é numero e com 14 caracteres.", () => {
  expect(ValidacaoFornecedor.validaCNPJ("12345874587412")).toBe(true);
});

test("Validar se o CNPJ é numero e com 14 caracteres.", () => {
  expect(ValidacaoFornecedor.validaCNPJ("1254789")).toBe(false);
});
