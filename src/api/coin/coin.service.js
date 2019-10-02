const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_COIN } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewCoin,
	validateUpdateCoin
} = require('./coin.validation')
const { 
  getCoinListRepository,
  getCoinByIdRepository,
  getCoinByNameRepository,
  postCoinRepository,
  putCoinRepository,
  deleteCoinRepository
} = require('./coin.repository')

async function getCoinListService () {
	let methodName = 'getCoinListService'
	let coinList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_COIN)
		coinList = await getCoinListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_COIN)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, coinList, LOG_COIN)
	return coinList
}

async function getCoinByIdService (id) {
	let methodName = 'getCoinIdService'
	let coin
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_COIN)
		coin = await getCoinByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_COIN)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, coin, LOG_COIN)
	return coin
}

async function getCoinByNameService (name) {
	let methodName = 'getCoinByNameService'
	let coin
	let preparedName
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}]`, LOG_COIN)
		preparedName = `%${name}%`
		coin = await getCoinByNameRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_COIN)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, coin, LOG_COIN)
	return coin
}

async function postCoinService (name, pluralName, symbol) {
	let methodName = 'postCoinService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}], pluralName = [${pluralName}], symbol = [${symbol}]`, LOG_COIN)
		await validateNewCoin(name, pluralName, symbol)
		response = await postCoinRepository(name, pluralName, symbol)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_COIN)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_COIN)
	return response
}

async function putCoinService (id, name, pluralName, symbol) {
	let methodName = 'putCoinService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], name = [${name}], pluralName = [${pluralName}], symbol = [${symbol}]`, LOG_COIN)
		await validateUpdateCoin(id, name, pluralName, symbol)
		response = await putCoinRepository(id, name, pluralName, symbol)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_COIN)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_COIN)
	return response
}

async function deleteCoinService (id) {
	let methodName = 'deleteCoinService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_COIN)
		response = await deleteCoinRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_COIN)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_COIN)
	return response
}

module.exports = {
	getCoinListService,
	getCoinByIdService,
	getCoinByNameService,
	postCoinService,
	putCoinService,
	deleteCoinService
}