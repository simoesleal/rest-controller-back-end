const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
  SELECT_CASH_REGISTERS,
	SELECT_CASH_REGISTER_BY_ID,
	INSERT_NEW_CASH_REGISTER,
	UPDATE_CASH_REGISTER,
	DELETE_CASH_REGISTER,
  CLOSE_CASH_REGISTER,
  INSERT_NEW_CASH_QUOTATION
} = require('./cash_register.queries')

async function getCashRegisterListRepository (transaction = null) {
  let cashRegisterList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-cash-registers', text: SELECT_CASH_REGISTERS})
    cashRegisterList = await transaction.oneOrNone(QUERY)
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

async function postCashRegisterRepository (id_funcionario, saldo_inicial, saldo_final, fundo_real, fundo_dolar, fundo_peso, fechamentos_real, fechamentos_dolar, fechamentos_peso, fechamentos_cartao_cred, fechamentos_cartao_deb, valor_total_fechamentos, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-cash-register', text: INSERT_NEW_CASH_REGISTER, values: [id_funcionario, saldo_inicial, saldo_final, fundo_real, fundo_dolar, fundo_peso, fechamentos_real, fechamentos_dolar, fechamentos_peso, fechamentos_cartao_cred, fechamentos_cartao_deb, valor_total_fechamentos]})
    response = await transaction.one(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível abrir este caixa, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putCashRegisterRepository (id, id_funcionario, id_cotacao_dolar, id_cotacao_peso, id_cotacao_guarani, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-cash-register', text: UPDATE_CASH_REGISTER, values: [id, id_funcionario, id_cotacao_dolar, id_cotacao_peso, id_cotacao_guarani, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd]})
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

async function closeCashRegisterRepository (id, saldo_final, fechamentos_real, fechamentos_dolar, fechamentos_peso, fechamentos_cartao_cred, fechamentos_cartao_deb, valor_total_fechamentos, data_hora_fim, status, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'close-cash-register', text: CLOSE_CASH_REGISTER, values: [id, saldo_final, fechamentos_real, fechamentos_dolar, fechamentos_peso, fechamentos_cartao_cred, fechamentos_cartao_deb, valor_total_fechamentos, data_hora_fim, status]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível fechar este caixa, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function postCashQuotationRepository (id_caixa, id_cotacao, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-cash-quotation', text: INSERT_NEW_CASH_QUOTATION, values: [id_caixa, id_cotacao]})
    response = await transaction.none(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível definir as catações detes caixa, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}
module.exports = {
	getCashRegisterListRepository,
  getCashRegisterByIdRepository,
  postCashRegisterRepository,
  putCashRegisterRepository,
  deletCashRegisterRepository,
  closeCashRegisterRepository,
  postCashQuotationRepository
}