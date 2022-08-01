class ClienteModel {
  constructor(nome, endereco, formaDePagamento, cpf, telefone, email) {
    this.nome = nome;
    this.endereco = endereco;
    this.formaDePagamento = formaDePagamento;
    this.cpf = cpf;
    this.telefone = telefone;
    this.email = email;
  }
}

export default ClienteModel;
