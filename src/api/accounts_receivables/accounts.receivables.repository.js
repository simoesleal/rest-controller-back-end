const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	CREATE_NEW_ACCOUNT_RECEIVABLES,
  SELECT_ACCOUNTS_RECEIVABLES,
	SELECT_ACCOUNTS_RECEIVABLES_BY_IDENTIFIER,
  UPDATE_ACCOUNT_RECEIVABLE,
  DELETE_ACCOUNT_RECEIVABLE,
	DELETE_ACCOUNT_INSTALLMENTS,
} = require('./accounts.receivables.queries')

async function createNewAccountReceivablesRepository (identifier, qtdInstallment, totalValue, description, idCliente, idTipoDocumento, idContaBancaria, idMoeda, Installment, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'create-new-account-receivables', text: CREATE_NEW_ACCOUNT_RECEIVABLES, values: [identifier, qtdInstallment, totalValue, description, idCliente, idTipoDocumento, idContaBancaria, idMoeda, JSON.stringify(Installment)]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi criar esta conta a receber, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code}]`)
  }
  return camelize(response)
}

async function getAccountReceivablesListRepository (transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-accounts-receivables', text: SELECT_ACCOUNTS_RECEIVABLES})
    response = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de contas a receber, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code}]`)
  }
  return camelize(response)
}

async function getAccountReceivablesByIdentifierRepository (identifier, transaction = null) {
  let response

  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-account-receivables-by-identifier', text: SELECT_ACCOUNTS_RECEIVABLES_BY_IDENTIFIER, values: [identifier]})
    response = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar esta conta a receber, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putAccountReceivableRepository (id, idCliente, idMoeda, idTipoDocumento, idContaBancaria, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-account-receivable', text: UPDATE_ACCOUNT_RECEIVABLE, values: [id, idCliente, idMoeda, idTipoDocumento, idContaBancaria]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar esta conta a receber, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function deleteAccountReceivableRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-account-receivable', text: DELETE_ACCOUNT_RECEIVABLE, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar esta conta a receber e suas parcelas, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function deleteAccountInstallmentsRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-account-installments', text: DELETE_ACCOUNT_INSTALLMENTS, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar as parcelas desta conta, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
  createNewAccountReceivablesRepository,
  getAccountReceivablesListRepository,
  getAccountReceivablesByIdentifierRepository,
  putAccountReceivableRepository,
  deleteAccountReceivableRepository,
  deleteAccountInstallmentsRepository,
}