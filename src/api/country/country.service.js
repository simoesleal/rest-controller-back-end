const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_COUNTRY } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { HIDDEN_BIG_RETURN } = require('../utils/constants')
const {
	validateNewCountry,
	validateUpdateCountry
} = require('./country.validation')
const { 
	getCountryListRepository,
	getCountryByIdRepository,
	getCountryByNameRepository,
	postCountryRepository,
  putCountryRepository,
  deleteCountryRepository
} = require('./country.repository')

async function getCountryListService () {
	let methodName = 'getCountryListService'
	let countryList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_COUNTRY)
		countryList = await getCountryListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_COUNTRY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, HIDDEN_BIG_RETURN, LOG_COUNTRY)
	return countryList
}

async function getCountryByIdService (id) {
	let methodName = 'getCountryByIdService'
	let country
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_COUNTRY)
		country = await getCountryByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_COUNTRY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, country, LOG_COUNTRY)
	return country
}

async function getCountryByNameService (name) {
	let methodName = 'getCountryByNameService'
	let country
	let preparedName
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}]`, LOG_COUNTRY)
		preparedName = `%${name}%`
		country = await getCountryByNameRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_COUNTRY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, country, LOG_COUNTRY)
	return country
}

async function postCountryService (name, namePt, initials) {
	let methodName = 'postCountryService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}], namePt = [${namePt}], initials = [${initials}]`, LOG_COUNTRY)
		await validateNewCountry(name, namePt, initials)
		response = await postCountryRepository(name, namePt, initials)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_COUNTRY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_COUNTRY)
	return response
}

async function putCountryService (id, name, namePt, initials) {
	let methodName = 'putCountryService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], name = [${name}], namePt = [${namePt}], initials = [${initials}]`, LOG_COUNTRY)
		await validateUpdateCountry(id, name, namePt, initials)
		response = await putCountryRepository(id, name, namePt, initials)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_COUNTRY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_COUNTRY)
	return response
}

async function deleteCountryService (id) {
	let methodName = 'deleteCountryService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_COUNTRY)
		response = await deleteCountryRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_COUNTRY)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_COUNTRY)
	return response
}

module.exports = {
	getCountryListService,
	getCountryByIdService,
	getCountryByNameService,
	postCountryService,
	putCountryService,
	deleteCountryService
}