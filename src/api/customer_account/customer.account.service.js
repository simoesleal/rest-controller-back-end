const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_CUSTOMER_ACCOUNT } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { 
		getOccupiedTableListRepository,
		getOrderFromCustomerRepository
} = require('./customer.account.repository')

async function getOccupiedTableListService () {
	let methodName = 'getOccupiedTableListService'
	let tableList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_CUSTOMER_ACCOUNT)
		tableList = await getOccupiedTableListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CUSTOMER_ACCOUNT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, tableList, LOG_CUSTOMER_ACCOUNT)
	return tableList
}

async function getOrderFromCustomerService (idMesa, numeroMesa) {
	let methodName = 'getOrderFromCustomerService'
	let orderList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_CUSTOMER_ACCOUNT)
		orderList = await getOrderFromCustomerRepository(idMesa, numeroMesa)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CUSTOMER_ACCOUNT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, orderList, LOG_CUSTOMER_ACCOUNT)
	return orderList
}

module.exports = {
	getOccupiedTableListService,
	getOrderFromCustomerService
}