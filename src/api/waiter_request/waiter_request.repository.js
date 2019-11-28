const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	INSERT_NEW_WAITER_REQUEST,
  DELETE_WAITER_REQUERET,
	REVERT_PRODUCT_CURRENT_QUANTITY
} = require('./waiter_request.queries')

async function insertNewWaiterRequestRepository (idMesa, idFuncionario, idContaCliente, produtos, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-waiter-request', text: INSERT_NEW_WAITER_REQUEST, values: [idMesa, idFuncionario, idContaCliente, JSON.stringify(produtos)]})
    response = await transaction.query(QUERY)
  } catch (error) {
      if( error.message === 'new row for relation "produto" violates check constraint "qtd_atual_nonnegative"') {
        throw new DefaultError(`Não foi criar este pedido, por favor, tente novamente. Detalhes do erro: A quantidade do produto em estoque é insufiente para realizar uma venda.`)
      } else {
        throw new DefaultError(`Não foi criar este pedido, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code}]`)
      }
  }
  return camelize(response)
}

async function deleteWaiterRequestRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-waiter-request', text: DELETE_WAITER_REQUERET, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar este pedido, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function revertProductCurrentQuantityRepository (id, quantity, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'revert-product-current-quantity', text: REVERT_PRODUCT_CURRENT_QUANTITY, values: [id, quantity]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível voltar a quantidade deste produto, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
	insertNewWaiterRequestRepository,
  deleteWaiterRequestRepository,
  revertProductCurrentQuantityRepository
}