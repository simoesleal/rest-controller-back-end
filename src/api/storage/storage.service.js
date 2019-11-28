const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_STORAGE } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { 
		postNewPurchaseEntryRepository
} = require('./storage.repository')
const { REGEX_KEEP_ONLY_NUMBERS } = require('../utils/constants')
const { validateNewPurchaseEntry } = require('./storage.validation')

async function postNewPurchaseEntryService (numeroNota, serieNota, totalValue, description, dataEmissao, dataVencimento, dataApropriacao, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, products) {
	let methodName = 'postNewPurchaseEntryService'
	let response
	try {
		await validateNewPurchaseEntry(numeroNota, serieNota, totalValue, dataEmissao, dataVencimento, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, products)

		const installment = await payloadInstallment(totalValue, dataEmissao, dataVencimento, dataApropriacao)
		const hash = new Date().toISOString().replace(REGEX_KEEP_ONLY_NUMBERS, '')
		const identifier = `${numeroNota}-${serieNota}/${hash}`

		response = await postNewPurchaseEntryRepository(identifier, 1, totalValue, description, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, installment, products)		
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_STORAGE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}

	logInfo(`Returning ${methodName}`, response, LOG_STORAGE)
	return response
}

async function payloadInstallment (totalValue, dataEmissao, dataVencimento, dataApropriacao) {
	let installments = []
	if (dataApropriacao.length > 0) {
		let installment = {
			installmentNumber: 1,
			status: 'PAGA',
			installmentValue: totalValue,
			issueDay: dataEmissao,
			dueDay: dataVencimento,
			paymentDay: dataApropriacao
		}
		installments.push(installment)
	} else {
		let installment = {
			installmentNumber: 1,
			status: 'ABERTA',
			installmentValue: totalValue,
			issueDay: dataEmissao,
			dueDay: dataVencimento
		}
		installments.push(installment)
	}
	return installments
}

module.exports = {
	postNewPurchaseEntryService
}