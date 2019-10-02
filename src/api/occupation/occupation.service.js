const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_OCCUPATION } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewOccupation,
	validateUpdateOccupation
} = require('./occupation.validation')
const { 
	getOccupationListRepository,
  getOccupationByIdRepository,
  getOccupationByNameRepository,
  postOccupationRepository,
  putOccupationRepository,
  deleteOccupationRepository
} = require('./occupation.repository')

async function getOccupationListService () {
	let methodName = 'getOccupationListService'
	let occupationList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_OCCUPATION)
		occupationList = await getOccupationListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_OCCUPATION)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, occupationList, LOG_OCCUPATION)
	return occupationList
}

async function getOccupationByIdService (id) {
	let methodName = 'getOccupationByIdService'
	let occupation
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_OCCUPATION)
		occupation = await getOccupationByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_OCCUPATION)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, occupation, LOG_OCCUPATION)
	return occupation
}

async function getOccupationByNameService (name) {
	let methodName = 'getOccupationByNameService'
	let occupation
	let preparedName
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}]`, LOG_OCCUPATION)
		preparedName = `%${name}%`
		occupation = await getOccupationByNameRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_OCCUPATION)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, occupation, LOG_OCCUPATION)
	return occupation
}

async function postOccupationService (name, details) {
	let methodName = 'postOccupationService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}], details = [${details}]`, LOG_OCCUPATION)
		await validateNewOccupation(name)
		response = await postOccupationRepository(name, details)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_OCCUPATION)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_OCCUPATION)
	return response
}

async function putOccupationService (id, name, details) {
	let methodName = 'putOccupationService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], name = [${name}], details = [${details}]`, LOG_OCCUPATION)
		await validateUpdateOccupation(id, name)
		response = await putOccupationRepository(id, name, details)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_OCCUPATION)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_OCCUPATION)
	return response
}

async function deleteOccupationService (id) {
	let methodName = 'deleteOccupationService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_OCCUPATION)
		response = await deleteOccupationRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_OCCUPATION)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_OCCUPATION)
	return response
}

module.exports = {
	getOccupationListService,
	getOccupationByIdService,
	getOccupationByNameService,
	postOccupationService,
	putOccupationService,
	deleteOccupationService
}