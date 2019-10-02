const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_ADDRESS } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewAddress,
	validateUpdateAddress
} = require('./address.validation')
const { 
  getAddressByIdRepository,
  postAddressRepository,
  putAdressRepository
} = require('./address.repository')

async function getAddressByIdService (id) {
	let methodName = 'getAddressByIdService'
	let address
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_ADDRESS)
		address = await getAddressByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ADDRESS)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, address, LOG_ADDRESS)
	return address
}

async function postAddressService (zipcode, street, number, block, complement, country, state, city) {
	let methodName = 'postAddressService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `zipcode = [${zipcode}], street = [${street}], number = [${number}], block = [${block}], complement = [${complement}], country = [${country}], state = [${state}], city = [${city}]`, LOG_ADDRESS)
		await validateNewAddress(zipcode, street, number, block, country, state, city)
		response = await postAddressRepository(zipcode, street, number, block, complement, country, state, city)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ADDRESS)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ADDRESS)
	return response
}

async function putAddressService (id, zipcode, street, number, block, complement, country, state, city) {
	let methodName = 'putAddressService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], zipcode = [${zipcode}], street = [${street}], number = [${number}], block = [${block}], complement = [${complement}], country = [${country}], state = [${state}], city = [${city}]`, LOG_ADDRESS)
		await validateUpdateAddress(id, zipcode, street, number, block, complement, country, state, city)
		response = await putAdressRepository(id, zipcode, street, number, block, complement, country, state, city)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ADDRESS)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ADDRESS)
	return response
}


module.exports = {
	getAddressByIdService,
	postAddressService,
	putAddressService
}