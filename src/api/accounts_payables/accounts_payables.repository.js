const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	SELECT_ACCOUNTS_PAYABLES,
	SELECT_ACCOUNT_PAYABLE_BY_ID,
	SELECT_ACCOUNT_PAYABLE_BY_NUMBER,
	INSERT_NEW_ACCOUNT_PAYABLE,
	UPDATE_ACCOUNT_PAYABLE,
	DELETE_ACCOUNT_PAYABLE
} = require('./accounts_payables.queries')

async function getAccountPayablesListRepository (transaction = null) {
  let accountPayablesList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-accounts-payables', text: SELECT_ACCOUNTS_PAYABLES})
    accountPayablesList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de contas a pagar, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(accountPayablesList)
}

async function getAccountPayableByIdRepository (id, transaction = null) {
  let accountPayable
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-account-payable', text: SELECT_ACCOUNT_PAYABLE_BY_ID, values: [id]})
    accountPayable = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar esta conta a pagar, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(accountPayable)
}

async function getAccountPayableByNumberRepository (number, transaction = null) {
  let accountPayable
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-account-payable-by-number', text: SELECT_ACCOUNT_PAYABLE_BY_NUMBER, values: [number]})
    accountPayable = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar esta conta a pagar, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(accountPayable)
}

async function postAccountPayableRepository (number, issueDay, dueDay, installmentValue, totalValue, historic, observations, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento,  transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-account-payable', text: INSERT_NEW_ACCOUNT_PAYABLE, values: [number, issueDay, dueDay, installmentValue, totalValue, historic, observations, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento]})
    console.log('QUERY')
    console.log(QUERY)
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar esta conta a pagar, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putAccountPayableRepository (id, number, issueDay, dueDay, installmentValue, totalValue, historic, observations, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-account-payable', text: UPDATE_ACCOUNT_PAYABLE, values: [id, number, issueDay, dueDay, installmentValue, totalValue, historic, observations, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar esta conta a pagar, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}
async function deleteAccountPayableRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-state', text: DELETE_ACCOUNT_PAYABLE, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar esta conta a pagar, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
	getAccountPayablesListRepository,
  getAccountPayableByIdRepository,
  getAccountPayableByNumberRepository,
  postAccountPayableRepository,
  putAccountPayableRepository,
  deleteAccountPayableRepository
}