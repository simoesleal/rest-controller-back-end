const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_STATE } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { HIDDEN_BIG_RETURN } = require('../utils/constants')
const {
	validateNewState,
  validateUpdateState
} = require('./state.validation')
const { 
	getStateListRepository,
  getStateByIdRepository,
	getStateByNameRepository,
	getStateByCountryIdRepository,
  postStateRepository,
  putStateRepository,
  deleteStateRepository
} = require('./state.repository')

async function getStateListService () {
	let methodName = 'getStateListService'
	let stateList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_STATE)
		stateList = await getStateListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_STATE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, HIDDEN_BIG_RETURN, LOG_STATE)
	return stateList
}

async function getStateByIdService (id) {
	let methodName = 'getStateByIdService'
	let state
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_STATE)
		state = await getStateByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_STATE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, state, LOG_STATE)
	return state
}

async function getStateByNameService (name) {
	let methodName = 'getStateByNameService'
	let state
	let preparedName
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}]`, LOG_STATE)
		preparedName = `%${name}%`
		state = await getStateByNameRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_STATE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, state, LOG_STATE)
	return state
}

async function getStateByCountryIdService (id) {
	let methodName = 'getStateByCountryIdService'
	let state
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_STATE)
		state = await getStateByCountryIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_STATE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, state, LOG_STATE)
	return state
}

async function postStateService (name, uf, ibge, pais) {
	let methodName = 'postStateService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}], uf = [${uf}], ibge = [${ibge}], pais = [${pais}]`, LOG_STATE)
		await validateNewState(name, uf, pais)
		response = await postStateRepository(name, uf, ibge, pais)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_STATE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_STATE)
	return response
}

async function putStateService (id, name, uf, ibge, pais) {
	let methodName = 'putStateService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], name = [${name}], uf = [${uf}], ibge = [${ibge}], pais = [${pais}]`, LOG_STATE)
		await validateUpdateState(id, name, uf, pais)
		response = await putStateRepository(id, name, uf, ibge, pais)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_STATE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_STATE)
	return response
}

async function deleteStateService (id) {
	let methodName = 'deleteStateService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_STATE)
		response = await deleteStateRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_STATE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_STATE)
	return response
}

module.exports = {
	getStateListService,
	getStateByIdService,
	getStateByNameService,
	getStateByCountryIdService,
	postStateService,
	putStateService,
	deleteStateService
}