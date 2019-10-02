const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	SELECT_OCCUPATIONS,
	SELECT_OCCUPATION_BY_ID,
	SELECT_OCCUPATION_BY_NAME,
	INSERT_NEW_OCCUPATION,
	UPDATE_OCCUPATION,
	DELETE_OCCUPATION
} = require('./occupation.queries')

async function getOccupationListRepository (transaction = null) {
  let occupationList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-occupations', text: SELECT_OCCUPATIONS})
    occupationList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de funções, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(occupationList)
}

async function getOccupationByIdRepository (id, transaction = null) {
  let occupation
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-occupation', text: SELECT_OCCUPATION_BY_ID, values: [id]})
    occupation = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar esta função, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(occupation)
}

async function getOccupationByNameRepository (name, transaction = null) {
  let occupation
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-occupation-by-name', text: SELECT_OCCUPATION_BY_NAME, values: [name]})
    occupation = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar esta função, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(occupation)
}

async function postOccupationRepository (name, details, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-occupation', text: INSERT_NEW_OCCUPATION, values: [name, details]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar esta nova função, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putOccupationRepository (id, name, details, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-occupation', text: UPDATE_OCCUPATION, values: [id, name, details]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar esta função, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}
async function deleteOccupationRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-occupaton', text: DELETE_OCCUPATION, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar esta função, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
  getOccupationListRepository,
  getOccupationByIdRepository,
  getOccupationByNameRepository,
  postOccupationRepository,
  putOccupationRepository,
  deleteOccupationRepository
}