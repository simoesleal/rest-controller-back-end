const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	SELECT_ACCOUNTS_PAYABLES,
	SELECT_ACCOUNT_PAYABLE_BY_ID,
	SELECT_ACCOUNT_PAYABLE_BY_IDENTIFIER,
	UPDATE_ACCOUNT_PAYABLE,
	DELETE_ACCOUNT_PAYABLE_AND_INSTALLMENTS,
  CREATE_NEW_ACCOUNT_PAYABLE,
  SELECT_INSTALLMENTS_BY_ACCOUNT_ID,
  SELECT_INSTALLMENTS,
  DELETE_ACCOUNT_INSTALLMENTS
} = require('./accounts_payables.queries')

async function getAccountPayablesListRepository (transaction = null) {
  let accountPayablesList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-accounts-payables', text: SELECT_ACCOUNTS_PAYABLES})
    accountPayablesList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de contas a pagar, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code}]`)
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

async function getAccountPayableByIdentifierRepository (number, transaction = null) {
  let accountPayable
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-account-payable-by-identifier', text: SELECT_ACCOUNT_PAYABLE_BY_IDENTIFIER, values: [number]})
    accountPayable = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar esta conta a pagar, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(accountPayable)
}

async function putAccountPayableRepository (id, idFornecedor, idMoeda, idTipoDocumento, idContaBancaria, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-account-payable', text: UPDATE_ACCOUNT_PAYABLE, values: [id, idFornecedor, idMoeda, idTipoDocumento, idContaBancaria]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar esta conta a pagar, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function deleteAccountPayableInstallmentsRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-account-payable-and-installments', text: DELETE_ACCOUNT_PAYABLE_AND_INSTALLMENTS, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar esta conta a pagar e suas parcelas, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
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

async function createNewAccountPayableRepository (identifier, qtdInstallment, totalValue, description, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, Installment, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'create-new-account-payable', text: CREATE_NEW_ACCOUNT_PAYABLE, values: [identifier, qtdInstallment, totalValue, description, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, JSON.stringify(Installment)]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi criar esta conta a pagar, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code}]`)
  }
  return camelize(response)
}

async function getInstallmentsByAccountIdRepository (id, transaction = null) {
  let accountPayable
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-installments-by-account-id', text: SELECT_INSTALLMENTS_BY_ACCOUNT_ID, values: [id]})
    accountPayable = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar as parcelas, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(accountPayable)
}

async function getInstallmentsRepository (transaction = null) {
  let accountPayable
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-installments', text: SELECT_INSTALLMENTS})
    accountPayable = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar as parcelas, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(accountPayable)
}

module.exports = {
	getAccountPayablesListRepository,
  getAccountPayableByIdRepository,
  getAccountPayableByIdentifierRepository,
  putAccountPayableRepository,
  deleteAccountPayableInstallmentsRepository,
  createNewAccountPayableRepository,
  getInstallmentsByAccountIdRepository,
  getInstallmentsRepository,
  deleteAccountInstallmentsRepository
}