const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	SELECT_PAYMENT_TYPES,
	SELECT_PAYMENT_BY_ID_TYPE,
	INSERT_NEW_PAYMENT_TYPE,
	UPDATE_PAYMENT_TYPE,
	DELETE_PAYMENT_TYPE
} = require('./payment_type.queries')

async function getPaymentTypeListRepository (transaction = null) {
  let paymentTypeList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-payment-types', text: SELECT_PAYMENT_TYPES})
    paymentTypeList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de formas de pagamento, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(paymentTypeList)
}

async function getPaymentTypeByIdRepository (id, transaction = null) {
  let paymentType
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-payment-type', text: SELECT_PAYMENT_BY_ID_TYPE, values: [id]})
    paymentType = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar esta forma de pagamento, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(paymentType)
}

async function postPaymentTypeRepository (typePayment, status, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-payment-type', text: INSERT_NEW_PAYMENT_TYPE, values: [typePayment, status]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar esta nova forma de pagamento, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putPaymentTypeRepository (id, typePayment, status, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-payment-type', text: UPDATE_PAYMENT_TYPE, values: [id, typePayment, status]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar esta forma de pagamento, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}
async function deletePaymentTypeRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-payment-type', text: DELETE_PAYMENT_TYPE, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar esta forma de pagamento, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
	getPaymentTypeListRepository,
  getPaymentTypeByIdRepository,
  postPaymentTypeRepository,
  putPaymentTypeRepository,
  deletePaymentTypeRepository
}