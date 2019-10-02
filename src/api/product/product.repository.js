const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	SELECT_PRODUCTS,
	SELECT_PRODUCT_BY_ID,
	SELECT_PRODUCT_BY_NAME,
	INSERT_NEW_PRODUCT,
	UPDATE_PRODUCT,
	DELETE_PRODUCT
} = require('./product.queries')

async function getProductListRepository (transaction = null) {
  let productList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-products', text: SELECT_PRODUCTS})
    productList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de Produtos, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(productList)
}

async function getProductByIdRepository (id, transaction = null) {
  let product
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-product', text: SELECT_PRODUCT_BY_ID, values: [id]})
    product = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este Produto, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(product)
}

async function getProductByNameRepository (name, transaction = null) {
  let product
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-product-by-name', text: SELECT_PRODUCT_BY_NAME, values: [name]})
    product = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este Produto, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(product)
}

async function postProductRepository (name, description, purchase_price, sale_price, cost_price, current_quantity, max_quantity, min_quantity, status, id_grupo_produto, id_unidade, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-product', text: INSERT_NEW_PRODUCT, values: [name, description, purchase_price, sale_price, cost_price, current_quantity, max_quantity, min_quantity, status, id_grupo_produto, id_unidade]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar este novo Produto, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putProductRepository (id, name, description, purchase_price, sale_price, cost_price, current_quantity, max_quantity, min_quantity, status, id_grupo_produto, id_unidade, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-product', text: UPDATE_PRODUCT, values: [id, name, description, purchase_price, sale_price, cost_price, current_quantity, max_quantity, min_quantity, status, id_grupo_produto, id_unidade]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar este Produto, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}
async function deleteProductRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-product', text: DELETE_PRODUCT, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar este Produto, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
  getProductListRepository,
  getProductByIdRepository,
  getProductByNameRepository,
  postProductRepository,
  putProductRepository,
  deleteProductRepository
}