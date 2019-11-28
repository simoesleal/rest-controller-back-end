const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	SELECT_CUSTOMERS,
	SELECT_CUSTOMER_BY_ID,
	SELECT_CUSTOMER_BY_NAME,
	SELECT_CUSTOMER_BY_LAST_NAME,
	SELECT_CUSTOMER_BY_PHONE,
	SELECT_CUSTOMER_BY_CELLPHONE,
	INSERT_NEW_CUSTOMER,
	UPDATE_CUSTOMER,
	DELETE_CUSTOMER
} = require('./customer.queries')

async function getCustomerListRepository (transaction = null) {
  let customerList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-customers', text: SELECT_CUSTOMERS})
    customerList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de clientes, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(customerList)
}

async function getCustomerByIdRepository (id, transaction = null) {
  let customer
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-customer', text: SELECT_CUSTOMER_BY_ID, values: [id]})
    customer = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este Cliente, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(customer)
}

async function getCustomerByNameRepository (name, transaction = null) {
  let customer
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-customer-by-name', text: SELECT_CUSTOMER_BY_NAME, values: [name]})
    customer = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este Cliente, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(customer)
}

async function getCustomerByLastNameRepository (lastName, transaction = null) {
  let customer
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-customer-by-last-name', text: SELECT_CUSTOMER_BY_LAST_NAME, values: [lastName]})
    customer = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este Cliente, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(customer)
}

async function getCustomerByPhoneRepository (phone, transaction = null) {
  let customer
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-customer-by-phone', text: SELECT_CUSTOMER_BY_PHONE, values: [phone]})
    customer = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este Cliente, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(customer)
}

async function getCustomerByCellphoneRepository (cellPhone, transaction = null) {
  let customer
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-customer-by-cellphone', text: SELECT_CUSTOMER_BY_CELLPHONE, values: [cellPhone]})
    customer = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este Cliente, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(customer)
}

async function postCustomerRepository (name, lastName, birth, sex, status, docs, email, phone, cellphone, preferences, id_endereco, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-customer', text: INSERT_NEW_CUSTOMER, values: [name, lastName, birth, sex, status, docs, email, phone, cellphone, preferences, id_endereco]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar este novo Cliente, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putCustomerRepository (id, name, lastName, birth, sex, status,docs, email, phone, cellphone, preferences, id_endereco, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-customer', text: UPDATE_CUSTOMER, values: [id, name, lastName, birth, sex, status, docs, email, phone, cellphone, preferences, id_endereco]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar este Cliente, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function deleteCustomerRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-customer', text: DELETE_CUSTOMER, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar este Cliente, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
	getCustomerListRepository,
  getCustomerByIdRepository,
  getCustomerByNameRepository,
  getCustomerByLastNameRepository,
  getCustomerByPhoneRepository,
  getCustomerByCellphoneRepository,
  postCustomerRepository,
  putCustomerRepository,
  deleteCustomerRepository
  }