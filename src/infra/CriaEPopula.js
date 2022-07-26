import DatabaseMetodos from "../utils/DatabaseMetodos.js";

const cliente ={
    nome : "Marcos da Silva",
    endereco : "rua palmirinha, 222, loro jose",
    formaDePagamento : "credito",
    cpf : '00012311145',
    telefone : '11981457895',
    email : 'marcos@gmail.com'

}
try {

    const tabela = await DatabaseMetodos.criarTabela()
    console.log(tabela)

    const criada = await DatabaseMetodos.inserirCliente(cliente)
    console.log(criada)

} catch (e) {
    console.log(e)
}