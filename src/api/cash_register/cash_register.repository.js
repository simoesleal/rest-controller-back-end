const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
  SELECT_CASH_REGISTERS,
	SELECT_CASH_REGISTER_BY_ID,
	INSERT_NEW_CASH_REGISTER,
	UPDATE_CASH_REGISTER,
	DELETE_CASH_REGISTER
} = require('./cash_register.queries')

async function getCashRegisterListRepository (transaction = null) {
  let cashRegisterList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-cash-registers', text: SELECT_CASH_REGISTERS})
    cashRegisterList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de caixas, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code}]`)
  }
  return camelize(cashRegisterList)
}

async function getCashRegisterByIdRepository (id, transaction = null) {
  let cashRegister
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-cash-register', text: SELECT_CASH_REGISTER_BY_ID, values: [id]})
    cashRegister = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este caixa, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(cashRegister)
}

async function postCashRegisterRepository (id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-cash-register', text: INSERT_NEW_CASH_REGISTER, values: [id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível abrir este caixa, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putCashRegisterRepository (id, id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-cash-register', text: UPDATE_CASH_REGISTER, values: [id, id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar este caixa, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}
async function deletCashRegisterRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-cash-register', text: DELETE_CASH_REGISTER, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar este caixa, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
	getCashRegisterListRepository,
  getCashRegisterByIdRepository,
  postCashRegisterRepository,
  putCashRegisterRepository,
  deletCashRegisterRepository
}