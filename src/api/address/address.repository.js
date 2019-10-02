const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
  SELECT_ADDRESS_BY_ID,
	INSERT_NEW_ADDRESS,
	UPDATE_ADDRESS
} = require('./address.queries')

async function getAddressByIdRepository (id, transaction = null) {
  let address
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-address', text: SELECT_ADDRESS_BY_ID, values: [id]})
    address = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este Endereço, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(address)
}

async function postAddressRepository (zipcode, street, number, block, complement, country, state, city, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-address', text: INSERT_NEW_ADDRESS, values: [zipcode, street, number, block, complement, country, state, city]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar este novo Endereço, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putAdressRepository (id, zipcode, street, number, block, complement, country, state, city, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-address', text: UPDATE_ADDRESS, values: [id, zipcode, street, number, block, complement, country, state, city]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar este Endereço, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
  getAddressByIdRepository,
  postAddressRepository,
  putAdressRepository
}