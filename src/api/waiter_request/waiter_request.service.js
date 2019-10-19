const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_WAITER_REQUEST } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewWaiterRequest
} = require('./waiter_request.validation')
const { 
	insertNewWaiterRequestRepository
} = require('./waiter_request.repository')


async function insertNewWaiterRequestService (idMesa, idFuncionario, idContaCliente, valorTotal, produtos) {
	let methodName = 'insertNewWaiterRequestService'
	let response
	try {

		logInfo(`Entering ${methodName}`, `idMesa = [${idMesa}], idFuncionario = [${idFuncionario}], idContaCliente = [${idContaCliente}], valorTotal = [${valorTotal}], produtos = [${JSON.stringify(produtos)}]`, LOG_WAITER_REQUEST)

		await validateNewWaiterRequest(idMesa, idFuncionario, idContaCliente, valorTotal, produtos)

		response = await insertNewWaiterRequestRepository(idMesa, idFuncionario, idContaCliente, valorTotal, produtos)
		
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_WAITER_REQUEST)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_WAITER_REQUEST)
	return response
}


module.exports = {
	insertNewWaiterRequestService
}