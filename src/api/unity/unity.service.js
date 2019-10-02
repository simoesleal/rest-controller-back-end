const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_UNITY } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewUnity,
	validateUpdateUnity
} = require('./unity.validation')
const { 
	getUnityListRepository,
	getUnityByIdRepository,
	getUnityByNameRepository,
	postUnityRepository,
	putUnityRepository,
	deleteUnityRepository
} = require('./unity.repository')

async function getUnityListService () {
	let methodName = 'getUnityListService'
	let unityList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_UNITY)
		unityList = await getUnityListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_UNITY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, unityList, LOG_UNITY)
	return unityList
}

async function getUnityByIdService (id) {
	let methodName = 'getUnityByIdService'
	let unity
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_UNITY)
		unity = await getUnityByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_UNITY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, unity, LOG_UNITY)
	return unity
}

async function getUnityByNameService (name) {
	let methodName = 'getUnityByNameService'
	let unity
	let preparedName
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}]`, LOG_UNITY)
		preparedName = `%${name}%`
		unity = await getUnityByNameRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_UNITY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, unity, LOG_UNITY)
	return unity
}

async function postUnityService (name, abbreviation) {
	let methodName = 'postUnityService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}], abbreviation = [${abbreviation}]`, LOG_UNITY)
		await validateNewUnity(name, abbreviation)
		response = await postUnityRepository(name, abbreviation)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_UNITY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_UNITY)
	return response
}

async function putUnityService (id, name, abbreviation) {
	let methodName = 'putUnityService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], name = [${name}], abbreviation = [${abbreviation}]`, LOG_UNITY)
		await validateUpdateUnity(id, name, abbreviation)
		response = await putUnityRepository(id, name, abbreviation)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_UNITY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_UNITY)
	return response
}

async function deleteUnityService (id) {
	let methodName = 'deleteUnityService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_UNITY)
		response = await deleteUnityRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_UNITY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_UNITY)
	return response
}

module.exports = {
	getUnityListService,
	getUnityByIdService,
	getUnityByNameService,
	postUnityService,
	putUnityService,
	deleteUnityService
}