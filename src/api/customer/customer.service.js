const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_CUSTOMER } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewCustomer,
  validateUpdateCustomer,
} = require('./customer.validation')
const { 
	getCustomerListRepository,
  getCustomerByIdRepository,
  getCustomerByNameRepository,
  getCustomerByLastNameRepository,
  getCustomerByPhoneRepository,
  getCustomerByCellphoneRepository,
  postCustomerRepository,
  putCustomerRepository,
  deleteCustomerRepository
} = require('./customer.repository')
const { getCountryByIdService } = require('../country/country.service')
const { getStateByIdService } = require('../state/state.service')
const { getCityByIdService } = require('../city/city.service')
async function getCustomerListService () {
	let methodName = 'getCustomerListService'
	let customerList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_CUSTOMER)
		customerList = await getCustomerListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CUSTOMER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, customerList, LOG_CUSTOMER)
	return customerList
}

async function getCustomerByIdService (id) {
	let methodName = 'getCustomerByIdService'
	let customer, country, state, city, payload
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_CUSTOMER)
		customer = await getCustomerByIdRepository(id)
		country = await getCountryByIdService(customer.pais)
		state = await getStateByIdService(customer.estado)
		city = await getCityByIdService(customer.cidade)
		payload = getPayloadCustomerInfo(customer, country, state, city)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CUSTOMER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, customer, LOG_CUSTOMER)
	return payload
}

function getPayloadCustomerInfo (customer, country, state, city) {
	let customerInfo = {
		customer: {
			info: customer,
			country,
			state,
			city
		}
	}
	return customerInfo
}

async function getCustomerByNameService (name) {
	let methodName = 'getCustomerByNameService'
	let customer
	let preparedName
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}]`, LOG_CUSTOMER)
		preparedName = `%${name}%`
		customer = await getCustomerByNameRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CUSTOMER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, customer, LOG_CUSTOMER)
	return customer
}

async function getCustomerByLastNameService (lastName) {
	let methodName = 'getCustomerByLastNameService'
	let customer
	let preparedName
	try {
		logInfo(`Entering ${methodName}`, `lastName = [${lastName}]`, LOG_CUSTOMER)
		preparedName = `%${lastName}%`
		customer = await getCustomerByLastNameRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CUSTOMER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, customer, LOG_CUSTOMER)
	return customer
}

async function getCustomerByPhoneService (phone) {
	let methodName = 'getCustomerByPhoneService'
	let customer
	let preparedName
	try {
		logInfo(`Entering ${methodName}`, `phone = [${phone}]`, LOG_CUSTOMER)
		preparedName = `%${phone}%`
		customer = await getCustomerByPhoneRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CUSTOMER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, customer, LOG_CUSTOMER)
	return customer
}

async function getCustomerByCellphoneService (cellphone) {
	let methodName = 'getCustomerByCellphoneService'
	let customer
	let preparedName
	try {
		logInfo(`Entering ${methodName}`, `cellphone = [${cellphone}]`, LOG_CUSTOMER)
		preparedName = `%${cellphone}%`
		customer = await getCustomerByCellphoneRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CUSTOMER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, customer, LOG_CUSTOMER)
	return customer
}

async function postCustomerService (name, lastName, birth, sex, status, docs, email, phone, cellphone, preferences, id_endereco) {
	let methodName = 'postCustomerService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}], lastName = [${lastName}], birth = [${birth}], sex = [${sex}], status = [${status}], docs = [${docs}], email = [${email}], phone = [${phone}], cellphone = [${cellphone}], preferences = [${preferences}], id_endereco = [${id_endereco}]`, LOG_CUSTOMER)
		await validateNewCustomer(name, lastName, sex, phone, id_endereco)
		response = await postCustomerRepository(name, lastName, birth, sex, status, docs, email, phone, cellphone, preferences, id_endereco)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CUSTOMER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_CUSTOMER)
	return response
}

async function putCustomerService (id, name, lastName, birth, sex, status, docs, email, phone, cellphone, preferences, id_endereco) {
	let methodName = 'putCustomerService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], name = [${name}], lastName = [${lastName}], birth = [${birth}], sex = [${sex}], status = [${status}], docs = [${docs}], email = [${email}], phone = [${phone}], cellphone = [${cellphone}], preferences = [${preferences}], id_endereco = [${id_endereco}]`, LOG_CUSTOMER)
		await validateUpdateCustomer(id, name, lastName, sex, phone, id_endereco)
		response = await putCustomerRepository(id, name, lastName, birth, sex, status, docs, email, phone, cellphone, preferences, id_endereco)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CUSTOMER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_CUSTOMER)
	return response
}

async function deleteCustomerService (id) {
	let methodName = 'deleteCustomerService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_CUSTOMER)
		response = await deleteCustomerRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CUSTOMER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_CUSTOMER)
	return response
}

module.exports = {
	getCustomerListService,
	getCustomerByIdService,
	getCustomerByNameService,
	getCustomerByLastNameService,
	getCustomerByPhoneService,
	getCustomerByCellphoneService,
	postCustomerService,
	putCustomerService,
	deleteCustomerService
}