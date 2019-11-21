const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_WAITER_REQUEST } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewWaiterRequest
} = require('./waiter_request.validation')
const { 
	insertNewWaiterRequestRepository,
	deleteWaiterRequestRepository,
  revertProductCurrentQuantityRepository
} = require('./waiter_request.repository')


async function insertNewWaiterRequestService (idMesa, idFuncionario, idContaCliente, produtos) {
	let methodName = 'insertNewWaiterRequestService'
	let response
	try {

		logInfo(`Entering ${methodName}`, `idMesa = [${idMesa}], idFuncionario = [${idFuncionario}], idContaCliente = [${idContaCliente}], produtos = [${JSON.stringify(produtos)}]`, LOG_WAITER_REQUEST)

		await validateNewWaiterRequest(idMesa, idFuncionario, idContaCliente, produtos)

		response = await insertNewWaiterRequestRepository(idMesa, idFuncionario, idContaCliente, produtos)
		
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_WAITER_REQUEST)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_WAITER_REQUEST)
	return response
}

async function deleteWaiterRequestService (idProdutoPedido, idProduto, quantity) {
	let methodName = 'deleteWaiterRequestService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `idProdutoPedido = [${idProdutoPedido}], idProduto = [${idProduto}], quantity = [${quantity}]`, LOG_WAITER_REQUEST)
		await deleteWaiterRequestRepository(idProdutoPedido)
		await revertProductCurrentQuantityService(idProduto, quantity)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_WAITER_REQUEST)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_WAITER_REQUEST)
	return response
}

async function revertProductCurrentQuantityService (id, quantity) {
	let methodName = 'revertProductCurrentQuantityService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], quantity = [${quantity}]`, LOG_WAITER_REQUEST)
		response = await revertProductCurrentQuantityRepository(id, quantity)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_WAITER_REQUEST)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_WAITER_REQUEST)
	return response
}

module.exports = {
	insertNewWaiterRequestService,
	deleteWaiterRequestService
}