const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_CLOSURE } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { 
		postNewClousureRepository
} = require('./closure.repository')

async function postNewClousureService (p_id_conta_cliente, p_id_mesa, json_fechamento) {
	let methodName = 'postNewClousureService'
	let response
	try {

		logInfo(`Entering ${methodName}`, `p_id_conta_cliente = [${p_id_conta_cliente}], p_id_mesa = [${p_id_mesa}], json_fechamento = [${JSON.stringify(json_fechamento)}]`, LOG_CLOSURE)

		response = await postNewClousureRepository(p_id_conta_cliente, p_id_mesa, json_fechamento)
		
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CLOSURE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_CLOSURE)
	return response
}

module.exports = {
	postNewClousureService
}