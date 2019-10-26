const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_CITY } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { HIDDEN_BIG_RETURN } = require('../utils/constants')
const {
	validateNewCity,
  validateUpdateCity
} = require('./city.validation')
const { 
	getCityListRepository,
  getCityByIdRepository,
  getCityByNameRepository,
	getCityByStateIdRepository,
  postCityRepository,
  putCityRepository,
  deleteCityRepository
} = require('./city.repository')

async function getCityListService () {
	let methodName = 'getCityListService'
	let cityList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_CITY)
		cityList = await getCityListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CITY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, HIDDEN_BIG_RETURN, LOG_CITY)
	return cityList
}

async function getCityByIdService (id) {
	let methodName = 'getCityByIdService'
	let city
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_CITY)
		city = await getCityByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CITY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, city, LOG_CITY)
	return city
}

async function getCityByNameService (name) {
	let methodName = 'getCityByNameService'
	let city
	let preparedName
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}]`, LOG_CITY)
		preparedName = `%${name}%`
		city = await getCityByNameRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CITY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, city, LOG_CITY)
	return city
}

async function getCityByStateIdService (id) {
	let methodName = 'getCityByStateIdService'
	let city
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_CITY)
		city = await getCityByStateIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CITY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, city, LOG_CITY)
	return city
}

async function postCityService (name, state) {
	let methodName = 'postCityService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}], state = [${state}]`, LOG_CITY)
		await validateNewCity(name, state)
		response = await postCityRepository(name, state)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CITY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_CITY)
	return response
}

async function putCityService (id,name, state) {
	let methodName = 'putCityService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], name = [${name}], state = [${state}]`, LOG_CITY)
		await validateUpdateCity(id,name, state)
		response = await putCityRepository(id,name, state)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CITY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_CITY)
	return response
}

async function deleteCityService (id) {
	let methodName = 'deleteCityService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_CITY)
		response = await deleteCityRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CITY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_CITY)
	return response
}

module.exports = {
	getCityListService,
	getCityByIdService,
	getCityByNameService,
	getCityByStateIdService,
	postCityService,
	putCityService,
	deleteCityService
}