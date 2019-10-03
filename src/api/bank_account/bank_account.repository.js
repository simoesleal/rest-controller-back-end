const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	SELECT_BANK_ACCOUNTS,
	SELECT_BANK_ACCOUNT_BY_ID,
	SELECT_BANK_ACCOUNT_BY_ACCOUNT,
	INSERT_NEW_BANK_ACCOUNT,
	UPDATE_BANK_ACCOUNT,
	DELETE_BANK_ACCOUNT
} = require('./bank_account.queries')

async function getBankAccountListRepository (transaction = null) {
  let bankAccountList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-bank_accounts', text: SELECT_BANK_ACCOUNTS})
    bankAccountList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de contas bancarias, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(bankAccountList)
}

async function getBankAccountByIdRepository (id, transaction = null) {
  let bankAccount
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-bank-account', text: SELECT_BANK_ACCOUNT_BY_ID, values: [id]})
    bankAccount = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar esta conta bancária, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(bankAccount)
}

async function getBankAccountByNumberAccountRepository (accountNumber, transaction = null) {
  let bankAccount
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-bank-account-by-account-number', text: SELECT_BANK_ACCOUNT_BY_ACCOUNT, values: [accountNumber]})
    bankAccount = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar esta Conta Bancária, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(bankAccount)
}

async function postBankAccountRepository (id_banco, agency, agencyDigit, accountNumber, accountNumberDigit, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-bank-account', text: INSERT_NEW_BANK_ACCOUNT, values: [id_banco, agency, agencyDigit, accountNumber, accountNumberDigit]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar esta nova conta bancaria, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putBankAccountRepository (id, id_banco, agency, agencyDigit, accountNumber, accountNumberDigit, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-bank-account', text: UPDATE_BANK_ACCOUNT, values: [id, id_banco, agency, agencyDigit, accountNumber, accountNumberDigit]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar esta conta bancaria, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}
async function deleteBankAccountRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-bank-account', text: DELETE_BANK_ACCOUNT, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar esta conta bancaria, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
	getBankAccountListRepository,
  getBankAccountByIdRepository,
  getBankAccountByNumberAccountRepository,
  postBankAccountRepository,
  putBankAccountRepository,
  deleteBankAccountRepository
}