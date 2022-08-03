export default class ValidacaoFornecedor {

  /**
   * 
   * @param {string} nomeFornecedor 
   * @returns boolean
   */
  static validaNomeFornecedor(nomeFornecedor) {
    return nomeFornecedor.length >= 3;
  }

  /**
   * 
   * @param {string} taxa 
   * @returns boolean
   */
  static validataxa(taxa) {
    return taxa > 0;
  }

  /**
   * 
   * @param {string} endereco 
   * @returns boolean
   */
  static validaEndereco(endereco) {
    return endereco ? endereco.length >= 7 : false;
  }

  /**
   * 
   * @param {string} item 
   * @returns boolean
   */
  static validaItem(item) {
    return item ? item.length >= 3 : false;
  }

  /**
   * 
   * @param {string} telefone 
   * @returns boolean
   */
  static validaTelefone(telefone) {
    const tel = parseInt(telefone)
    return telefone.length == 11 && tel == telefone
  }

  /**
   * 
   * @param {string} cnpj 
   * @returns boolean
   */
  static validaCNPJ(cnpj) {
    const ref = parseInt(cnpj)
    return cnpj.length == 14 && ref == cnpj
  }
    
  /**
   * 
   * @param {string} nomeFornecedor 
   * @param {string} taxa 
   * @param {string} endereco 
   * @param {string} item 
   * @param {string} telefone 
   * @param {string} cnpj 
   * @returns boolean
   */
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

