export default class ValidacaoCliente {

  /**
   * 
   * @param {string} nome 
   * @returns boolean
   */
  static validaNome(nome) {
    return nome.length >= 3;
  }

  /**
   * 
   * @param {string} telefone 
   * @returns boolean
   */
  static validaTelefone(telefone){
    const tel = parseInt(telefone)
    return telefone.length == 11 && `${tel}`.length == telefone.length
  }

  /**
   * 
   * @param {string} cpf 
   * @returns boolean
   */
  static validaCPF(cpf){
    const ref = parseInt(cpf)
    return cpf.length == 11 && `${ref}`.length == cpf.length
  }

  /**
   * 
   * @param {string} endereco 
   * @returns boolean
   */
  static validaEndereco(endereco) {
    return endereco.length >= 7;
  }

  /**
   * 
   * @param {string} pagamento 
   * @returns boolean
   */
  static formaDePagamento(pagamento) {
    return (
      pagamento == "pix" ||
      pagamento == "credito" ||
      pagamento == "debito" ||
      pagamento == "dinheiro"
    );
  }

  /**
   * 
   * @param {string} email 
   * @returns boolean
   */
  static validaEmail(email) {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  }

  /**
   * 
   * @param {string} nome 
   * @param {string} endereco 
   * @param {string} formaDePagamento 
   * @param {string} cpf 
   * @param {string} telefone 
   * @param {string} email 
   * @returns boolean
   */
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
