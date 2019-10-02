const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	SELECT_SUPPLIERS,
	SELECT_SUPPLIER_BY_ID,
	SELECT_SUPPLIER_BY_RAZAO_SOCIAL,
	SELECT_SUPPLIER_BY_NOME_FANTASIA,
	INSERT_NEW_SUPPLIER,
	UPDATE_SUPPLIER,
	DELETE_SUPPLIER
} = require('./supplier.queries')

async function getSupplierListRepository (transaction = null) {
  let supplierList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-csuppliers', text: SELECT_SUPPLIERS})
    supplierList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de Fornecedores, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(supplierList)
}

async function getSupplierByIdRepository (id, transaction = null) {
  let supplier
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-supplier', text: SELECT_SUPPLIER_BY_ID, values: [id]})
    supplier = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este Fornecedor, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(supplier)
}

async function getSupplierByRazaoSocialRepository (razaoSocial, transaction = null) {
  let supplier
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-supplier-by-razao-social', text: SELECT_SUPPLIER_BY_RAZAO_SOCIAL, values: [razaoSocial]})
    supplier = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este Fornecedor, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(supplier)
}

async function getSupplierByNomeFantasiaRepository (fakeName, transaction = null) {
  let supplier
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-supplier-by-nome-fantasia', text: SELECT_SUPPLIER_BY_NOME_FANTASIA, values: [fakeName]})
    supplier = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este Fornecedor, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(supplier)
}


async function postSupplierRepository (nome_fantasia, razao_social, cpf_cnpj, insc_municipal, insc_estadual, status, email, phone, cellphone, conta_corrente, id_endereco, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-supplier', text: INSERT_NEW_SUPPLIER, values: [nome_fantasia, razao_social, cpf_cnpj, insc_municipal, insc_estadual, status, email, phone, cellphone, conta_corrente, id_endereco]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar este novo Fornecedor, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putSupplierRepository (id, nome_fantasia, razao_social, cpf_cnpj, insc_municipal, insc_estadual, status, email, phone, cellphone, conta_corrente, id_endereco, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-supplier', text: UPDATE_SUPPLIER, values: [id, nome_fantasia, razao_social, cpf_cnpj, insc_municipal, insc_estadual, status, email, phone, cellphone, conta_corrente, id_endereco]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar este Fornecedor, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function deleteSupplierRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-supplier', text: DELETE_SUPPLIER, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar este Fornecedor, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
	getSupplierListRepository,
  getSupplierByIdRepository,
  getSupplierByRazaoSocialRepository,
  getSupplierByNomeFantasiaRepository,
  postSupplierRepository,
  putSupplierRepository,
  deleteSupplierRepository
  }