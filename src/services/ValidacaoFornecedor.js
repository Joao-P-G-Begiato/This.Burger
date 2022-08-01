export default class ValidacaoFornecedor {
  static validaNomeFornecedor(nomeFornecedor) {
    return nomeFornecedor.length >= 3;
  }

  static validataxa(taxa) {
    return taxa > 0;
  }

  static validaEndereco(endereco) {
    return endereco ? endereco.length >= 7 : false;
  }

  static validaItem(item) {
    return item ? item.length >= 3 : false;
  }

  static validaTelefone(telefone) {
    const tel = parseInt(telefone);
    return tel == telefone;
  }

  static validaCNPJ(cnpj) {
    const regex = /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/;
    return regex.test(cnpj);
  }

  static isValid(nomeFornecedor, taxa, endereco, item, telefone, cnpj) {
    return (
      this.validaNomeFornecedor(nomeFornecedor) &&
      this.validataxa(taxa) &&
      this.validaEndereco(endereco) &&
      this.validaItem(item) &&
      this.validaTelefone(telefone) &&
      this.validaCNPJ(cnpj)
    );
  }
}
