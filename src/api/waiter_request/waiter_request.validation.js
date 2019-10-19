const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewWaiterRequest (idMesa, idFuncionario, idContaCliente, valorTotal, produtos) {
  if (!await validateParam(idMesa)) throw new DefaultError(`Não identificamos a Mesa deste pedido e este é um campo obrigatório. Por favor, tente novamente.`, 'idMesa nulo ou vazio')
  if (!await validateParam(idFuncionario)) throw new DefaultError(`Não identificamos o Funcionario deste pedido e este é um campo obrigatório. Por favor, tente novamente.`, 'idFuncionario nulo ou vazio')
  if (!await validateParam(idContaCliente)) throw new DefaultError(`Não identificamos a Conta do Cliente deste pedido e este é um campo obrigatório. Por favor, tente novamente.`, 'idContaCliente nulo ou vazio')
  if (!await validateParam(valorTotal)) throw new DefaultError(`Não identificamos o valor total deste pedido e este é um campo obrigatório. Por favor, tente novamente.`, 'valorTotal nulo ou vazio')
  if (!await validateParam(produtos)) throw new DefaultError(`Não identificamos nenhum Produto neste pedido e este é um campo obrigatório. Por favor, tente novamente.`, 'produtos nulo ou vazio')
}

module.exports = {
	validateNewWaiterRequest
}