const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
  SELECT_CITIES,
	SELECT_CITY_BY_ID,
	SELECT_CITY_BY_NAME,
  SELECT_CITY_BY_STATE_ID,
	INSERT_NEW_CITY,
	UPDATE_CITY,
	DELETE_CITY
} = require('./city.queries')

async function getCityListRepository (transaction = null) {
  let stateList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-cities', text: SELECT_CITIES})
    stateList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de Cidades, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(stateList)
}

async function getCityByIdRepository (id, transaction = null) {
  let state
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-city', text: SELECT_CITY_BY_ID, values: [id]})
    state = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar esta Cidade, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(state)
}

async function getCityByNameRepository (name, transaction = null) {
  let state
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-city-by-name', text: SELECT_CITY_BY_NAME, values: [name]})
    state = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar esta Cidade, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(state)
}

async function getCityByStateIdRepository (id, transaction = null) {
  let cities
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-city-by-state-id', text: SELECT_CITY_BY_STATE_ID, values: [id]})
    cities = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de Cidades, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(cities)
}
async function postCityRepository (name, state, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-city', text: INSERT_NEW_CITY, values: [name, state]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar esta nova Cidade, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putCityRepository (id, name, state, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-city', text: UPDATE_CITY, values: [id, name, state]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar esta Cidade, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}
async function deleteCityRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-city', text: DELETE_CITY, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar esta Cidade, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
	getCityListRepository,
  getCityByIdRepository,
  getCityByNameRepository,
  getCityByStateIdRepository,
  postCityRepository,
  putCityRepository,
  deleteCityRepository

}