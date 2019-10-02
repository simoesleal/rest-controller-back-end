const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	SELECT_ACCOUNTS_PAYABLES,
	SELECT_ACCOUNT_PAYABLE_BY_ID,
	SELECT_ACCOUNT_PAYABLE_BY_NUMBER,
	INSERT_NEW_ACCOUNT_PAYABLE,
	UPDATE_NEW_ACCOUNT_PAYABLE,
	DELETE_ACCOUNT_PAYABLE
} = require('./accounts_payables.queries')

async function getPaymentConditionListRepository (transaction = null) {
  let paymentConditionList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-payment-conditions', text: SELECT_PAYMENT_CONDITIONS})
    paymentConditionList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de condicões de pagamento, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(paymentConditionList)
}

async function getPaymentConditionByIdRepository (id, transaction = null) {
  let paymentCondition
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-payment-condition', text: SELECT_PAYMENT_CONDITION_BY_ID, values: [id]})
    paymentCondition = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar esta condição de pagamento, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(paymentCondition)
}


async function postPaymentConditionRepository (condition, installments, firstDay, description, id_forma_pagamento, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-payment-condition', text: INSERT_NEW_PAYMENT_CONDITION, values: [condition, installments, firstDay, description, id_forma_pagamento]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar esta condição de pagamento, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putPaymentConditionRepository (id, condition, installments, firstDay, description, id_forma_pagamento, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-state', text: UPDATE_PAYMENT_CONDITION, values: [id, condition, installments, firstDay, description, id_forma_pagamento]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar esta condição de pagamento, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}
async function deletePaymentConditionRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-state', text: DELETE_PAYMENT_CONDITION, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar esta condição de pagamento, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
	getPaymentConditionListRepository,
  getPaymentConditionByIdRepository,
  postPaymentConditionRepository,
  putPaymentConditionRepository,
  deletePaymentConditionRepository
}