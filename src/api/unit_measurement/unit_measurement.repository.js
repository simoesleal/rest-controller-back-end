const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	SELECT_UNIT_MEASUREMENT,
	SELECT_UNIT_MEASUREMENT_BY_ID,
	SELECT_UNIT_MEASUREMENT_BY_NAME,
	INSERT_NEW_UNIT_MEASUREMENT,
	UPDATE_UNIT_MEASUREMENT,
	DELETE_UNIT_MEASUREMENT
} = require('./unit_measurement.queries')

async function getUnitMeasurementListRepository (transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-unit-measurements', text: SELECT_UNIT_MEASUREMENT})
    response = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem das unidades de medida, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function getUnitMeasurementByIdRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-unit-measurement', text: SELECT_UNIT_MEASUREMENT_BY_ID, values: [id]})
    response = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar está unidade de medida, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function getUnitMeasurementByNameRepository (name, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-unit-measurement-by-name', text: SELECT_UNIT_MEASUREMENT_BY_NAME, values: [name]})
    response = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar está unidade de medida, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function postUnitMeasurementRepository (name, abbreviation, status, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-unit-measurement', text: INSERT_NEW_UNIT_MEASUREMENT, values: [name, abbreviation, status]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar esta unidade de medida, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putUnitMeasurementRepository (id, name, abbreviation, status, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-unit-measurement', text: UPDATE_UNIT_MEASUREMENT, values: [id, name, abbreviation, status]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar esta unidade de medida, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}
async function deleteUnitMeasurementRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-unit-measurement', text: DELETE_UNIT_MEASUREMENT, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar esta unidade de medida, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
  getUnitMeasurementListRepository,
  getUnitMeasurementByIdRepository,
  getUnitMeasurementByNameRepository,
  postUnitMeasurementRepository,
  putUnitMeasurementRepository,
  deleteUnitMeasurementRepository
}