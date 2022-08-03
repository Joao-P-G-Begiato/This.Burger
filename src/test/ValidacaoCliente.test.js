import ValidacaoCliente from "../services/ValidacaoCliente";

/*Validacao nome*/
test("Validar se o nome tem 3 caracteres ou mais.", () => {
  expect(ValidacaoCliente.validaNome("Rui")).toBe(true);
});

test("Validar se o nome tem 3 caracteres ou mais.", () => {
  expect(ValidacaoCliente.validaNome("JP")).toBe(false);
});

/*Validacao Telefone*/
test("Validar se o telefone é numero e com 11 caracteres.", () => {
  expect(ValidacaoCliente.validaTelefone("12345678945")).toBe(true);
});

test("Validar se o telefone é numero e com 11 caracteres.", () => {
  expect(ValidacaoCliente.validaTelefone("124578")).toBe(false);
});

/*Validacao CPF*/
test("Validar se o cpf possui 11 caractes.", () => {
  expect(ValidacaoCliente.validaCPF("12345678945")).toBe(true);
});

test("Validar se o preço é maior do que zero.", () => {
  expect(ValidacaoCliente.validaCPF("124578")).toBe(false);
});

/*Validacao endereço*/
test("Validar se o endereço possui 7 ou mais caracteres.", () => {
  expect(ValidacaoCliente.validaEndereco("Rua das palmirinhas")).toBe(true);
});

test("Validar se o endereço possui 7 ou mais caracteres.", () => {
  expect(ValidacaoCliente.validaEndereco("Rua X")).toBe(false);
});

/*Validacao forma de pagamento*/
test("Validar se a forma de pagamento se encaixa na lista pré-montada.", () => {
  expect(ValidacaoCliente.formaDePagamento("pix")).toBe(true);
});

test("Validar se a forma de pagamento se encaixa na lista pré-montada.", () => {
  expect(ValidacaoCliente.formaDePagamento("cheque")).toBe(false);
});

/*Validacao email*/
test("Validar se o email se encaixa na regex montada.", () => {
  expect(ValidacaoCliente.validaEmail("zezinho@gmail.com")).toBe(true);
});

test("Validar se o email se encaixa na regex montada.", () => {
  expect(ValidacaoCliente.validaEmail("zezinhogmail.com")).toBe(false);
});
