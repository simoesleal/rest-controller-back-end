const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_AUTH } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { authenticateRepository } = require('./auth.repository')
const { validateAuthenticate } = require('./auth.validation')

async function authenticateService (login, password) {

	let methodName = 'authenticateService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `Login: ${login} Password: --suppressed--`, LOG_AUTH)
		await validateAuthenticate(login, password)
		response = await authenticateRepository(login, password)
	} catch (error) {
		console.log('error')
		console.log(error)
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_AUTH)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_AUTH)
	return response
}

module.exports = {
	authenticateService
}