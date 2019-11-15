const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	SELECT_TYPES_DOCUMENT,
	SELECT_TYPE_DOCUMENT,
	SELECT_TYPE_DOCUMENT_BY_NAME,
	INSERT_TYPE_DOCUMENT,
	UPDATE_TYPE_DOCUMENT,
	DELETE_TYPE_DOCUMENT
} = require('./type.document.queries')

async function getTypeDocumentListRepository (transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-types-document', text: SELECT_TYPES_DOCUMENT})
    response = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de tipo de documentos, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function getTypeDocumentByIdRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-type-document', text: SELECT_TYPE_DOCUMENT, values: [id]})
    response = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este tipo de documento, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function getTypeDocumentByNameRepository (typeDocument, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-type-document-by-name', text: SELECT_TYPE_DOCUMENT_BY_NAME, values: [typeDocument]})
    response = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este tipo de documento, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function postTypeDocumentRepository (typeDocument, description, status, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-type-document', text: INSERT_TYPE_DOCUMENT, values: [typeDocument, description, status]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar este tipo de documento, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putTypeDocumentRepository (id, typeDocument, description, status, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-type-document', text: UPDATE_TYPE_DOCUMENT, values: [id, typeDocument, description, status]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar este tipo de documento, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}
async function deleteTypeDocumentRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-type-document', text: DELETE_TYPE_DOCUMENT, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar este tipo de documento, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
  getTypeDocumentListRepository,
  getTypeDocumentByIdRepository,
  getTypeDocumentByNameRepository,
  postTypeDocumentRepository,
  putTypeDocumentRepository,
  deleteTypeDocumentRepository
}