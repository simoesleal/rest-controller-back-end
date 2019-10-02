const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_PAYMENT_CONDITION } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { HIDDEN_BIG_RETURN } = require('../utils/constants')
const {
	validateNewPaymentCondition,
  validateUpdatePaymentCondition
} = require('./payment_condition.validation')
const { 
	getPaymentConditionListRepository,
  getPaymentConditionByIdRepository,
  postPaymentConditionRepository,
  putPaymentConditionRepository,
  deletePaymentConditionRepository
} = require('./payment_condition.repository')

async function getPaymentConditionListService () {
	let methodName = 'getPaymentConditionListService'
	let paymentConditionList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_PAYMENT_CONDITION)
		paymentConditionList = await getPaymentConditionListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PAYMENT_CONDITION)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, HIDDEN_BIG_RETURN, LOG_PAYMENT_CONDITION)
	return paymentConditionList
}

async function getPaymentConditionByIdService (id) {
	let methodName = 'getPaymentConditionByIdService'
	let paymentCondition
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_PAYMENT_CONDITION)
		paymentCondition = await getPaymentConditionByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PAYMENT_CONDITION)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, paymentCondition, LOG_PAYMENT_CONDITION)
	return paymentCondition
}


async function postPaymentConditionService (condition, installments, firstDay, description, id_forma_pagamento) {
	let methodName = 'postPaymentConditionService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `condition = [${condition}], installments = [${installments}], firstDay = [${firstDay}], description = [${description}], id_forma_pagamento = [${id_forma_pagamento}]`, LOG_PAYMENT_CONDITION)
		await validateNewPaymentCondition(condition, installments, firstDay, description, id_forma_pagamento)
		response = await postPaymentConditionRepository(condition, installments, firstDay, description, id_forma_pagamento)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PAYMENT_CONDITION)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_PAYMENT_CONDITION)
	return response
}

async function putPaymentConditionService (id, condition, installments, firstDay, description, id_forma_pagamento) {
	let methodName = 'putPaymentConditionService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], condition = [${condition}], installments = [${installments}], firstDay = [${firstDay}], description = [${description}], id_forma_pagamento = [${id_forma_pagamento}]`, LOG_PAYMENT_CONDITION)
		await validateUpdatePaymentCondition(id, condition, installments, firstDay, description, id_forma_pagamento)
		response = await putPaymentConditionRepository(id, condition, installments, firstDay, description, id_forma_pagamento)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PAYMENT_CONDITION)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_PAYMENT_CONDITION)
	return response
}

async function deletePaymentConditionService (id) {
	let methodName = 'deletePaymentConditionService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_PAYMENT_CONDITION)
		response = await deletePaymentConditionRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PAYMENT_CONDITION)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_PAYMENT_CONDITION)
	return response
}

module.exports = {
	getPaymentConditionListService,
	getPaymentConditionByIdService,
	postPaymentConditionService,
	putPaymentConditionService,
	deletePaymentConditionService
}