const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	SELECT_OCCUPIED_TABLES,
  SELECT_ORDERS_FROM_CUSTOMER
} = require('./customer.account.queries')


async function getOccupiedTableListRepository (transaction = null) {
  let tableList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-occupied-tables', text: SELECT_OCCUPIED_TABLES})
    tableList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de mesas ocupadas, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(tableList)
}

async function getOrderFromCustomerRepository (idMesa, numeroMesa, transaction = null) {
  let orderList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-order-from-customer', text: SELECT_ORDERS_FROM_CUSTOMER, values: [idMesa, numeroMesa]})
    orderList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem pedidos deste cliente, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(orderList)
}

module.exports = {
	getOccupiedTableListRepository,
  getOrderFromCustomerRepository
}
