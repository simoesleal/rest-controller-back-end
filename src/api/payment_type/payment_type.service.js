const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_PAYMENT_TYPE } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { HIDDEN_BIG_RETURN } = require('../utils/constants')
const {
	validateNewPaymentType,
	validateUpdatePaymentType
} = require('./payment_type.validation')
const { 
	getPaymentTypeListRepository,
  getPaymentTypeByIdRepository,
  postPaymentTypeRepository,
  putPaymentTypeRepository,
  deletePaymentTypeRepository
} = require('./payment_type.repository')

async function getPaymentTypeListService () {
	let methodName = 'getPaymentTypeListService'
	let paymentTypeList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_PAYMENT_TYPE)
		paymentTypeList = await getPaymentTypeListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PAYMENT_TYPE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, HIDDEN_BIG_RETURN, LOG_PAYMENT_TYPE)
	return paymentTypeList
}

async function getPaymentTypeByIdService (id) {
	let methodName = 'getPaymentTypeByIdService'
	let paymentType
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_PAYMENT_TYPE)
		paymentType = await getPaymentTypeByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PAYMENT_TYPE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, paymentType, LOG_PAYMENT_TYPE)
	return paymentType
}

async function postPaymentTypeService (typePayment, status) {
	let methodName = 'postPaymentTypeService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `typePayment = [${typePayment}], status = [${status}]`, LOG_PAYMENT_TYPE)
		await validateNewPaymentType(typePayment)
		response = await postPaymentTypeRepository(typePayment, status)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PAYMENT_TYPE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_PAYMENT_TYPE)
	return response
}

async function putPaymentTypeService (id, typePayment, status) {
	let methodName = 'putPaymentTypeService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], typePayment = [${typePayment}], status = [${status}]`, LOG_PAYMENT_TYPE)
		await validateUpdatePaymentType(id, typePayment)
		response = await putPaymentTypeRepository(id, typePayment, status)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PAYMENT_TYPE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_PAYMENT_TYPE)
	return response
}

async function deletePaymentTypeService (id) {
	let methodName = 'deletePaymentTypeService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_PAYMENT_TYPE)
		response = await deletePaymentTypeRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PAYMENT_TYPE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_PAYMENT_TYPE)
	return response
}

module.exports = {
	getPaymentTypeListService,
	getPaymentTypeByIdService,
	postPaymentTypeService,
	putPaymentTypeService,
	deletePaymentTypeService
}