export default class ValidacaoCliente {
  static validaNome(nome) {
    return nome.length >= 3;
  }
  static validaTelefone(telefone){
    const tel = parseInt(telefone)
    return telefone.length == 11 && `${tel}`.length == telefone.length
  }
  static validaCPF(cpf){
    const ref = parseInt(cpf)
    return cpf.length == 11 && `${ref}`.length == cpf.length
  }
  static validaEndereco(endereco) {
    return endereco.length >= 7;
  }
  static formaDePagamento(pagamento) {
    return (
      pagamento == "pix" ||
      pagamento == "credito" ||
      pagamento == "debito" ||
      pagamento == "dinheiro"
    );
  }

  static validaEmail(email) {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  }

  static isValid(nome, endereco, formaDePagamento, cpf, telefone, email) {
    return (
      this.validaNome(nome) &&
      this.validaTelefone(telefone) &&
      this.validaCPF(cpf) &&
      this.validaEmail(email) &&
      this.validaEndereco(endereco) &&
      this.formaDePagamento(formaDePagamento)
    );
  }
}
