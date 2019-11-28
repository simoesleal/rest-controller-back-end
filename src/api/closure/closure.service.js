const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_CLOSURE } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { 
		postNewClousureRepository,
		getClousuresByCashRegisterIdRepository
} = require('./closure.repository')
const { REGEX_DATE_FORMAT_YYYY_MM_DD, REGEX_KEEP_ONLY_NUMBERS } = require('../utils/constants')
const { createNewAccountReceivableService } = require('../accounts_receivables/accounts.receivables.service')
const { validateNewClosure } = require('./closure.validation')

async function postNewClousureService (p_id_conta_cliente, p_id_mesa, json_fechamento) {
	let methodName = 'postNewClousureService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `p_id_conta_cliente = [${p_id_conta_cliente}], p_id_mesa = [${p_id_mesa}], json_fechamento = [${JSON.stringify(json_fechamento)}]`, LOG_CLOSURE)

		await validateNewClosure(p_id_conta_cliente, p_id_mesa, json_fechamento)
		if (json_fechamento[0].cartaoCredito && json_fechamento[0].cartaoCredito > 0) {
			await createReceiableAccountCreditCart(json_fechamento[0].cartaoCredito)
		}
		if (json_fechamento[0].cartaoDebito && json_fechamento[0].cartaoDebito > 0) {
			await createReceiableAccountDevitCart(json_fechamento[0].cartaoDebito)
		}
		response = await postNewClousureRepository(p_id_conta_cliente, p_id_mesa, json_fechamento)
		
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_CLOSURE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_CLOSURE)
	return response
}

async function getClousuresByCashRegisterIdService (idCaixa) {
	let methodName = 'getClousuresByCashRegisterIdService'
	let response
	try {
		logInfo(`Entering ${methodName}`, '', LOG_CLOSURE)
		response = await getClousuresByCashRegisterIdRepository(idCaixa)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)}]`, LOG_CLOSURE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_CLOSURE)
	return response
}

async function createReceiableAccountCreditCart(value) {
	const hash = new Date().toISOString().replace(REGEX_KEEP_ONLY_NUMBERS, '')
	let issueDate = new Date()
	let dueDay = new Date()
	dueDay.setDate(issueDate.getDate() + 30)
	dueDay = dueDay.toISOString().match(REGEX_DATE_FORMAT_YYYY_MM_DD)
	issueDate = issueDate.toISOString().match(REGEX_DATE_FORMAT_YYYY_MM_DD)
	let installments = []
	let installment = {
		installmentNumber: 1,
		status: 'ABERTA',
		installmentValue: value,
		issueDay: issueDate[0],
		dueDay: dueDay[0]
		}
		installments.push(installment)
		let parameters = {
			identifier: `CREDIT${hash}`,
			qtdInstallment: 1,
			totalValue: value,
			description: 'Fechamento de conta cliente com cartão de Crédito',
			idCliente: 9999,
			idContaBancaria: 9999,
			idTipoDocumento: 9999,
			idMoeda: 1,
			Installment: installments
		}
	try {
		response = createNewAccountReceivableService(parameters.identifier, parameters.qtdInstallment, parameters.totalValue, parameters.description, parameters.idCliente, parameters.idTipoDocumento, parameters.idContaBancaria, parameters.idMoeda, parameters.Installment)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)}]`, LOG_CLOSURE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}	
}
async function createReceiableAccountDevitCart(value) {
	const hash = new Date().toISOString().replace(REGEX_KEEP_ONLY_NUMBERS, '')
	let issueDate = new Date()
	let dueDay = new Date()
	dueDay.setDate(issueDate.getDate() + 1)
	dueDay = dueDay.toISOString().match(REGEX_DATE_FORMAT_YYYY_MM_DD)
	issueDate = issueDate.toISOString().match(REGEX_DATE_FORMAT_YYYY_MM_DD)
	let installments = []
	let installment = {
		installmentNumber: 1,
		status: 'ABERTA',
		installmentValue: value,
		issueDay: issueDate[0],
		dueDay: dueDay[0]
		}
		installments.push(installment)
		let parameters = {
			identifier: `DEBIT${hash}`,
			qtdInstallment: 1,
			totalValue: value,
			description: 'Fechamento de conta cliente com cartão de Débito',
			idCliente: 9999,
			idContaBancaria: 9999,
			idTipoDocumento: 9999,
			idMoeda: 1,
			Installment: installments
		}
	try {
		response = createNewAccountReceivableService(parameters.identifier, parameters.qtdInstallment, parameters.totalValue, parameters.description, parameters.idCliente, parameters.idTipoDocumento, parameters.idContaBancaria, parameters.idMoeda, parameters.Installment)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)}]`, LOG_CLOSURE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}	
}

module.exports = {
	postNewClousureService,
	getClousuresByCashRegisterIdService
}