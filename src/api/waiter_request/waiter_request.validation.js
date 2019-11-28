const DefaultError = require('../../handlers/default-error.handler')

async function validateNewWaiterRequest (idMesa, idFuncionario, idContaCliente,  produtos) {
  if (!idMesa) throw new DefaultError(`Não identificamos a Mesa deste pedido e este é um campo obrigatório. Por favor, tente novamente.`, 'idMesa nulo ou vazio')
  if (!idFuncionario) throw new DefaultError(`Não identificamos o Funcionario deste pedido e este é um campo obrigatório. Por favor, tente novamente.`, 'idFuncionario nulo ou vazio')
  if (!idContaCliente) throw new DefaultError(`Não identificamos a Conta do Cliente deste pedido e este é um campo obrigatório. Por favor, tente novamente.`, 'idContaCliente nulo ou vazio')
  if (!produtos) throw new DefaultError(`Não identificamos nenhum Produto neste pedido e este é um campo obrigatório. Por favor, tente novamente.`, 'produtos nulo ou vazio')
}

module.exports = {
	validateNewWaiterRequest
}