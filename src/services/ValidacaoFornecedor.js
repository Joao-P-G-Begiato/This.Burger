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
      const tel = parseInt(telefone)
      return telefone.length == 11 && tel == telefone
    }

    static validaCNPJ(cnpj) {
      const ref = parseInt(cnpj)
      return cnpj.length == 14 && ref == cnpj
    }
    
    static isValid(nomeFornecedor, taxa, endereco, item, telefone, cnpj ){
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

