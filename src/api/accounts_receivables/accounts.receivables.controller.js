const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getRegistrationInfoService,
	createNewAccountReceivableService,
	getAccountReceivablesListService,
	getAccountReceivablesByIdentifierService,
	putAccountReceivableService,
	deleteAccountReceivableService
} = require('./accounts.receivables.service')

async function getAccountReceivablesList (req, res, next) {
	let response
	try {
		response = await getAccountReceivablesListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de contas a receber realizada com sucesso.', response))
}

async function getAccountReceivablesByIdentifier (req, res, next) {
	const { identifier } = req.params
	let response
	try {
		response = await getAccountReceivablesByIdentifierService(identifier)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de conta a receber realizada com sucesso.', response))
}

async function getRegistrationInfo (req, res, next) {
	let response
	try {		
		response = await getRegistrationInfoService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de informações para o cadastro de uma nova duplicata a pagar realizada com sucesso.', response))
}

async function createNewAccountReceivable (req, res, next) {
	const { identifier, qtdInstallment, totalValue, description, idCliente, idTipoDocumento, idContaBancaria, idMoeda, Installment } = req.body
	let response
	try {
		response = await createNewAccountReceivableService(identifier, qtdInstallment, totalValue, description, idCliente, idTipoDocumento, idContaBancaria, idMoeda, Installment)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Contas a Receber criada com sucesso.', response))
}

async function putAccountReceivable (req, res, next) {
	const { id, idCliente, idMoeda, idTipoDocumento, idContaBancaria } = req.body
	let response
	try {
		response = await putAccountReceivableService(id, idCliente, idMoeda, idTipoDocumento, idContaBancaria)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Conta a Receber atualizada com sucesso.', response))
}

async function deleteAccountReceivable (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteAccountReceivableService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Conta a Receber e parcelas excluídas com sucesso.', response))
}

module.exports = {
	getRegistrationInfo,
	createNewAccountReceivable,
	getAccountReceivablesList,
	getAccountReceivablesByIdentifier,
	putAccountReceivable,
	deleteAccountReceivable
}