const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	SELECT_PRODUCT_GROUPS,
	SELECT_PRODUCT_GROUP_BY_ID,
	SELECT_PRODUCT_GROUP_BY_NAME,
	INSERT_NEW_PRODUCT_GROUP,
	UPDATE_PRODUCT_GROUP,
	DELETE_PRODUCT_GROUP
} = require('./product_group.queries')

async function getProductGroupListRepository (transaction = null) {
  let productGroupList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-product-groups', text: SELECT_PRODUCT_GROUPS})
    productGroupList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem dos grupos de produtos, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(productGroupList)
}

async function getProductGroupByIdRepository (id, transaction = null) {
  let productGroup
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-product-group', text: SELECT_PRODUCT_GROUP_BY_ID, values: [id]})
    productGroup = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este grupo de produto, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(productGroup)
}

async function getProductGroupByNameRepository (name, transaction = null) {
  let productGroup
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-product-group-by-name', text: SELECT_PRODUCT_GROUP_BY_NAME, values: [name]})
    productGroup = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este grupo de produto, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(productGroup)
}

async function postProductGroupRepository (name, details, status, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-product-group', text: INSERT_NEW_PRODUCT_GROUP, values: [name, details, status]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar esta novo grupo de produtos, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putProductGroupRepository (id, name, details, status, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-product-group', text: UPDATE_PRODUCT_GROUP, values: [id, name, details, status]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar este grupo de prpdutos, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}
async function deleteProductGroupRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-product-group', text: DELETE_PRODUCT_GROUP, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar este grupo de produtos, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
  getProductGroupListRepository,
  getProductGroupByIdRepository,
  getProductGroupByNameRepository,
  postProductGroupRepository,
  putProductGroupRepository,
  deleteProductGroupRepository
}