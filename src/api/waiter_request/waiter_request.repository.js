const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	INSERT_NEW_WAITER_REQUEST
} = require('./waiter_request.queries')

async function insertNewWaiterRequestRepository (idMesa, idFuncionario, idContaCliente, produtos, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-waiter-request', text: INSERT_NEW_WAITER_REQUEST, values: [idMesa, idFuncionario, idContaCliente, JSON.stringify(produtos)]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi criar este pedido, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code}]`)
  }
  return camelize(response)
}

module.exports = {
	insertNewWaiterRequestRepository,
}