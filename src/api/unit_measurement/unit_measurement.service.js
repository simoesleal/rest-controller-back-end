const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_UNIT_MEASUREMENT } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewUnitMeasurement,
	validateUpdateUnitMeasurement
} = require('./unit_measurement.validation')
const { 
  getUnitMeasurementListRepository,
  getUnitMeasurementByIdRepository,
  getUnitMeasurementByNameRepository,
  postUnitMeasurementRepository,
  putUnitMeasurementRepository,
  deleteUnitMeasurementRepository
} = require('./unit_measurement.repository')

async function getUnitMeasurementListService () {
	let methodName = 'getUnitMeasurementListService'
	let response
	try {
		logInfo(`Entering ${methodName}`, '', LOG_UNIT_MEASUREMENT)
		response = await getUnitMeasurementListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_UNIT_MEASUREMENT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_UNIT_MEASUREMENT)
	return response
}

async function getUnitMeasurementByIdService (id) {
	let methodName = 'getUnitMeasurementByIdService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_UNIT_MEASUREMENT)
		response = await getUnitMeasurementByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_UNIT_MEASUREMENT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_UNIT_MEASUREMENT)
	return response
}

async function getUnitMeasurementByNameService (name) {
	let methodName = 'getUnitMeasurementByNameService'
	let response
	let preparedName
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}]`, LOG_UNIT_MEASUREMENT)
		preparedName = `%${name}%`
		response = await getUnitMeasurementByNameRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_UNIT_MEASUREMENT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_UNIT_MEASUREMENT)
	return response
}

async function postUnitMeasurementService (name, abbreviation, status) {
	let methodName = 'postUnitMeasurementService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}], abbreviation = [${abbreviation}], status = [${status}]`, LOG_UNIT_MEASUREMENT)
		await validateNewUnitMeasurement(name, abbreviation)
		response = await postUnitMeasurementRepository(name, abbreviation, status)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_UNIT_MEASUREMENT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_UNIT_MEASUREMENT)
	return response
}

async function putUnitMeasurementService (id, name, abbreviation, status) {
	let methodName = 'putUnitMeasurementService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], name = [${name}], abbreviation = [${abbreviation}], status = [${status}]`, LOG_UNIT_MEASUREMENT)
		await validateUpdateUnitMeasurement(id, name, abbreviation)
		response = await putUnitMeasurementRepository(id, name, abbreviation, status)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_UNIT_MEASUREMENT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_UNIT_MEASUREMENT)
	return response
}

async function deleteUnitMeasurementService (id) {
	let methodName = 'deleteUnitMeasurementService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_UNIT_MEASUREMENT)
		response = await deleteUnitMeasurementRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_UNIT_MEASUREMENT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_UNIT_MEASUREMENT)
	return response
}

module.exports = {
	getUnitMeasurementListService,
	getUnitMeasurementByIdService,
	getUnitMeasurementByNameService,
	postUnitMeasurementService,
	putUnitMeasurementService,
	deleteUnitMeasurementService
}