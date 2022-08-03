import ValidacaoPedido from "../services/ValidacaoPedido.js";

/*Validacao idCliente*/
test("Validar se o id do cliente é maior do que zero.", () => {
  expect(ValidacaoPedido.validaIdCliente(1)).toBe(true);
});

test("Validar se o id do cliente é maior do que zero.", () => {
  expect(ValidacaoPedido.validaIdCliente(0)).toBe(false);
});

/*Validacao itensPedido*/
test("Validar se a quantidade de pedidos foi maior do que zero.", () => {
  expect(ValidacaoPedido.validaItensPedido("x-bug", "if-salada")).toBe(true);
});

test("Validar se a quantidade de pedidos foi maior do que zero.", () => {
  expect(ValidacaoPedido.validaItensPedido("")).toBe(false);
});

/*Validacao quantidadeItens*/
test("Validar se a quantidade de itens foi maior do que zero.", () => {
  expect(ValidacaoPedido.validaQuantidadeItens(3)).toBe(true);
});

test("Validar se a quantidade de itens foi maior do que zero.", () => {
  expect(ValidacaoPedido.validaQuantidadeItens(0)).toBe(false);
});

/*Validacao totalPedido*/
test("Validar se o valor total do pedido foi maior do que zero.", () => {
  expect(ValidacaoPedido.validaTotalPedido(15)).toBe(true);
});

test("Validar se o valor total do pedido foi maior do que zero.", () => {
  expect(ValidacaoPedido.validaTotalPedido(0)).toBe(false);
});
