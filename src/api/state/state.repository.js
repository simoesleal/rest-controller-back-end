const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
  SELECT_STATES,
	SELECT_STATE_BY_ID,
  SELECT_STATE_BY_NAME,
  SELECT_STATE_BY_COUNTRY_ID,
	INSERT_NEW_STATE,
	UPDATE_STATE,
	DELETE_STATE
} = require('./state.queries')

async function getStateListRepository (transaction = null) {
  let stateList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-states', text: SELECT_STATES})
    stateList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de Estados, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(stateList)
}

async function getStateByIdRepository (id, transaction = null) {
  let state
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-state', text: SELECT_STATE_BY_ID, values: [id]})
    state = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este Estado, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(state)
}

async function getStateByNameRepository (name, transaction = null) {
  let state
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-state-by-name', text: SELECT_STATE_BY_NAME, values: [name]})
    state = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este Estado, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(state)
}

async function getStateByCountryIdRepository (id, transaction = null) {
  let stateList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-state-by-country-id', text: SELECT_STATE_BY_COUNTRY_ID, values: [id]})
    stateList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de Estados, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(stateList)
}

async function postStateRepository (name, uf, ibge, pais, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-state', text: INSERT_NEW_STATE, values: [name, uf, ibge, pais]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar este novo Estado, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putStateRepository (id, name, uf, ibge, pais, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-state', text: UPDATE_STATE, values: [id, name, uf, ibge, pais]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar este Estado, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}
async function deleteStateRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-state', text: DELETE_STATE, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar este Estado, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
	getStateListRepository,
  getStateByIdRepository,
  getStateByNameRepository,
  getStateByCountryIdRepository,
  postStateRepository,
  putStateRepository,
  deleteStateRepository
}