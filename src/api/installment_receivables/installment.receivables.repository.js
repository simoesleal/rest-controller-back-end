const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
  SELECT_INSTALLMENTS_BY_ACCOUNT_ID,
  SELECT_INSTALLMENTS,
  SELECT_INSTALLMENTS_BY_IDENTIFIER,
  UPDATE_INSTALLMENT_BY_ID,
	SET_INSTALLMENT_PAID_BY_ID,
	SET_INSTALLMENT_CANCELED_BY_ID
} = require('./installment.receivables.queries')

async function getInstallmentsRepository (transaction = null) {
  let accountPayable
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-installments_receivables', text: SELECT_INSTALLMENTS})
    accountPayable = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar as parcelas, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(accountPayable)
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

async function getInstallmentsByIdentifierRepository (preparedName, transaction = null) {
  let accountPayable
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-installments-by-identifier', text: SELECT_INSTALLMENTS_BY_IDENTIFIER, values: [preparedName]})
    accountPayable = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar as parcelas, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(accountPayable)
}

async function putInstallmetByIdRepository (id, dataEmissao, dataVencimento, dataApropriacao, descricao, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-installment-by-id', text: UPDATE_INSTALLMENT_BY_ID, values: [id, dataEmissao, dataVencimento, dataApropriacao, descricao]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar esta parcela, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function setInstallmetPaidByIdRepository (id, dataApropriacao, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'set-installment-paid-by-id', text: SET_INSTALLMENT_PAID_BY_ID, values: [id, dataApropriacao]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível baixar esta parcela, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function setInstallmetCanceledByIdRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'set-installment-canceled-by-id', text: SET_INSTALLMENT_CANCELED_BY_ID, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível cancelar esta parcela, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
  getInstallmentsByAccountIdRepository,
  getInstallmentsRepository,
  getInstallmentsByIdentifierRepository,
  putInstallmetByIdRepository,
  setInstallmetPaidByIdRepository,
  setInstallmetCanceledByIdRepository
}