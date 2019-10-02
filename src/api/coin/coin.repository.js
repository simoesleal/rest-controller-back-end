const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
  SELECT_COINS,
	SELECT_COIN,
	SELECT_COIN_BY_NAME,
	INSERT_NEW_COIN,
	UPDATE_COIN,
	DELETE_COIN
} = require('./coin.queries')

async function getCoinListRepository (transaction = null) {
  let coinList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-coins', text: SELECT_COINS})
    coinList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de moedas, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(coinList)
}

async function getCoinByIdRepository (id, transaction = null) {
  let coin
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-coin', text: SELECT_COIN, values: [id]})
    coin = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar esta moeda, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(coin)
}

async function getCoinByNameRepository (name, transaction = null) {
  let coin
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-coin-by-name', text: SELECT_COIN_BY_NAME, values: [name]})
    coin = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar esta unidade, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(coin)
}

async function postCoinRepository (name, pluralName, symbol, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-coin', text: INSERT_NEW_COIN, values: [name, pluralName, symbol]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar esta nova moeda, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putCoinRepository (id, name, pluralName, symbol, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-coin', text: UPDATE_COIN, values: [id, name, pluralName, symbol]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar esta moeda, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}
async function deleteCoinRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-coin', text: DELETE_COIN, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar esta moeda, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
  getCoinListRepository,
  getCoinByIdRepository,
  getCoinByNameRepository,
  postCoinRepository,
  putCoinRepository,
  deleteCoinRepository
}