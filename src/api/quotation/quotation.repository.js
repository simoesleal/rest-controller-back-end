const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	SELECT_QUOTATIONS,
	INSERT_NEW_QUOTATION,
	UPDATE_QUOTATION,
	DELETE_QUOTATION,
  SELECT_QUOTATION_BY_COIN_ID,
  UPDATE_QUOTATION_CASHIER
} = require('./quotation.queries')

async function getQuotationListRepository (transaction = null) {
  let quotationList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-quotations', text: SELECT_QUOTATIONS})
    quotationList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de cotações, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(quotationList)
}

async function postQuotationRepository (quotation, id_coin, transaction = null) {
  let response
   
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-quotation', text: INSERT_NEW_QUOTATION, values: [quotation, id_coin]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar esta cotação, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putQuotationRepository (id, quotation, id_coin, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-quotation', text: UPDATE_QUOTATION, values: [id, quotation, id_coin]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar esta cotação, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function deleteQuotationRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-quotation', text: DELETE_QUOTATION, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar esta cotação, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function getQuotationByCoinIdRepository (value, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-quotations-by-coin-id', text: SELECT_QUOTATION_BY_COIN_ID, values: [value]})
    response = await transaction.one(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de cotações, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function updataQuotationCashierRepository (id, quotation, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-quotation_cashies', text: UPDATE_QUOTATION_CASHIER, values: [id, quotation]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar esta cotação, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}
module.exports = {
  getQuotationListRepository,
  postQuotationRepository,
  putQuotationRepository,
  deleteQuotationRepository,
  getQuotationByCoinIdRepository,
  updataQuotationCashierRepository
}