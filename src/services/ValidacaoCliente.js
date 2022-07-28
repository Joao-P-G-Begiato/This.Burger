export default class ValidacaoCliente {
  static validaNome(nome){
    return nome.length >= 3
  }
  static validaTelefone(telefone){
    const tel = parseInt(telefone)
    return tel == telefone
  }
  static validaCPF(cpf){
    const regex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
    return regex.test(cpf)
  }
  static validaEndereco(endereco){
    return endereco.length >= 7
  }
  static formaDePagamento(pagamento){
    
      return pagamento == 'pix' || pagamento == 'credito' || pagamento == 'debito' || pagamento == 'dinheiro'
      }

  static validaEmail(email){
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regex.test(email)
  }

  static isValid(nome, endereco, formaDePagamento, cpf, telefone, email){
    return this.validaNome(nome) && this.validaTelefone(telefone) && this.validaCPF(cpf) && this.validaEmail(email) && this.validaEndereco(endereco) && this.formaDePagamento(formaDePagamento)
  } 
}

