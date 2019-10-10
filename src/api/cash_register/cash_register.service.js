const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_CASH_REGISTER } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { HIDDEN_BIG_RETURN } = require('../utils/constants')
const {
	validateNewCashRegister,
  validateUpdateCashRegister
} = require('./cash_register.validation')
const { 
	getCashRegisterListRepository,
  getCashRegisterByIdRepository,
  postCashRegisterRepository,
  putCashRegisterRepository,
  deletCashRegisterRepository
} = require('./cash_register.repository')

async function getCashRegisterListService () {
	let methodName = 'getCashRegisterListService'
	let cashRegisterList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_CASH_REGISTER)
		cashRegisterList = await getCashRegisterListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)}]`, LOG_CASH_REGISTER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, HIDDEN_BIG_RETURN, LOG_CASH_REGISTER)
	return cashRegisterList
}

async function getCashRegisterByIdService (id) {
	let methodName = 'getCashRegisterByIdService'
	let cashRegister
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_CASH_REGISTER)
		cashRegister = await getCashRegisterByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CASH_REGISTER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, cashRegister, LOG_CASH_REGISTER)
	return cashRegister
}


async function postCashRegisterService (id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd) {
	let methodName = 'postCashRegisterService'
	let response
	try {

		logInfo(`Entering ${methodName}`, `id_funcionario = [${id_funcionario}], id_cotacao = [${id_cotacao}], initialBalance = [${initialBalance}], finalBalance = [${finalBalance}], dateTimeBegining = [${dateTimeBegining}], dateTimeEnd = [${dateTimeEnd}]`, LOG_CASH_REGISTER)

		await validateNewCashRegister(id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd)
		response = await postCashRegisterRepository(id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd)
	

	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CASH_REGISTER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_CASH_REGISTER)
	return response
}

async function putCashRegisterService (id, id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd) {
	let methodName = 'putCashRegisterService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], id_funcionario = [${id_funcionario}], id_cotacao = [${id_cotacao}], initialBalance = [${initialBalance}], finalBalance = [${finalBalance}], dateTimeBegining = [${dateTimeBegining}], dateTimeEnd = [${dateTimeEnd}]`, LOG_CASH_REGISTER)

		await validateUpdateCashRegister(id, id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd)

		response = await putCashRegisterRepository(id, id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd)

	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CASH_REGISTER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_CASH_REGISTER)
	return response
}

async function deleteCashRegisterService (id) {
	let methodName = 'deleteCashRegisterService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_CASH_REGISTER)
		response = await deletCashRegisterRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CASH_REGISTER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_CASH_REGISTER)
	return response
}

module.exports = {
	getCashRegisterListService,
	getCashRegisterByIdService,
	postCashRegisterService,
	putCashRegisterService,
	deleteCashRegisterService
}