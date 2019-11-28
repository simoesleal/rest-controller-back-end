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
  deletCashRegisterRepository,
	closeCashRegisterRepository,
	postCashQuotationRepository
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


async function postCashRegisterService (id_funcionario, saldo_inicial, saldo_final, fundo_real, fundo_dolar, fundo_peso, fundo_guarani, fechamentos_real, fechamentos_dolar, fechamentos_peso, fechamentos_guarani, fechamentos_cartao_cred, fechamentos_cartao_deb, valor_total_fechamentos) {
	let methodName = 'postCashRegisterService'
	let response
	try {

		logInfo(`Entering ${methodName}`, `id_funcionario = [${id_funcionario}], saldo_inicial = [${saldo_inicial}], saldo_final = [${saldo_final}], fundo_real = [${fundo_real}], fundo_dolar = [${fundo_dolar}], fundo_peso = [${fundo_peso}], fundo_guarani = [${fundo_guarani}], fechamentos_real = [${fechamentos_real}], fechamentos_dolar = [${fechamentos_dolar}], fechamentos_peso = [${fechamentos_peso}], fechamentos_guarani = [${fechamentos_guarani}], fechamentos_cartao_cred = [${fechamentos_cartao_cred}], fechamentos_cartao_deb = [${fechamentos_cartao_deb}], valor_total_fechamentos = [${valor_total_fechamentos}] `, LOG_CASH_REGISTER)

		const verifyCashRegisterStatus = await verifyCashActive()

		if (verifyCashRegisterStatus) {
			await validateNewCashRegister(id_funcionario, saldo_inicial, fundo_real, fundo_dolar, fundo_peso, fundo_guarani)
			response = await postCashRegisterRepository(id_funcionario, saldo_inicial, saldo_final, fundo_real, fundo_dolar, fundo_peso, fundo_guarani, fechamentos_real, fechamentos_dolar, fechamentos_peso, fechamentos_guarani, fechamentos_cartao_cred, fechamentos_cartao_deb, valor_total_fechamentos)
			await postCashQuotation(response.id) 	
		} else {
			throw new ErrorHandler('Já existe um caixa aberto, só é permitido a abertura de um caixa por vez. Para abrir um novo caixa, solicite o fechamento do caixa atual.', httpStatus.BAD_REQUEST, false)
		}

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
		await postCashRegisterService(response)

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


async function closeCashRegisterService (id, saldo_final, fechamentos_real, fechamentos_dolar, fechamentos_peso, fechamentos_guarani, fechamentos_cartao_cred, fechamentos_cartao_deb, valor_total_fechamentos, data_hora_fim, status) {
	let methodName = 'closeCashRegisterService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], saldo_final = [${saldo_final}], fechamentos_real = [${fechamentos_real}], fechamentos_dolar = [${fechamentos_dolar}], fechamentos_peso = [${fechamentos_peso}], fechamentos_guarani = [${fechamentos_guarani}] fechamentos_cartao_cred = [${fechamentos_cartao_cred}], fechamentos_cartao_deb = [${fechamentos_cartao_deb}, valor_total_fechamentos = [${valor_total_fechamentos}], valor_total_fechamentos = [${valor_total_fechamentos}, data_hora_fim = [${data_hora_fim}, status = [${status}`, LOG_CASH_REGISTER)


		response = await closeCashRegisterRepository(id, saldo_final, fechamentos_real, fechamentos_dolar, fechamentos_peso, fechamentos_guarani, fechamentos_cartao_cred, fechamentos_cartao_deb, valor_total_fechamentos, data_hora_fim, status)

	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CASH_REGISTER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_CASH_REGISTER)
	return response
}

async function postCashQuotation (id_caixa) {
	let methodName = 'postCashQuotation'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id_caixa = [${id_caixa}]`, LOG_CASH_REGISTER)
		 await postCashQuotationRepository(id_caixa, 1)
		 await postCashQuotationRepository(id_caixa, 2)
		 await postCashQuotationRepository(id_caixa, 3)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CASH_REGISTER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_CASH_REGISTER)
	return response
}

async function verifyCashActive () {
	let methodName = 'verifyCashActive'
	let response
	try {
		logInfo(`Entering ${methodName}`, ``, LOG_CASH_REGISTER)
		response = await getCashRegisterListRepository()
		if (response === null) {
			return true
		} else {
			return false
		}
	} catch (error) {
		
	}
}

module.exports = {
	getCashRegisterListService,
	getCashRegisterByIdService,
	postCashRegisterService,
	putCashRegisterService,
	deleteCashRegisterService,
	closeCashRegisterService,
	
}