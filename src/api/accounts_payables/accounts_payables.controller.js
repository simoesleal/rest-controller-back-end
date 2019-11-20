const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getAccountPayablesListService,
	getAccountPayableByIdService,
	getAccountPayableByIdentifierService,
	putAccountPayableService,
	deleteAccountPayableInstallmentsService,
	getRegistrationInfoService,
	createNewAccountPayableService,
	getInstallmentsByAccountIdIdService,
	getInstallmentsService
} = require('./accounts_payables.service')


async function getAccountPayablesList (req, res, next) {
	let accountPayablesList
	try {
		accountPayablesList = await getAccountPayablesListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de contas a pagar realizada com sucesso.', accountPayablesList))
}

async function getAccountPayableById (req, res, next) {
	const { id } = req.params
	let accountPayable
	try {
		accountPayable = await getAccountPayableByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de conta a pagar realizada com sucesso.', accountPayable))
}

async function getAccountPayableByIdentifier (req, res, next) {
	const { number } = req.params
	let accountPayable
	try {
		accountPayable = await getAccountPayableByIdentifierService(number)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de conta a pagar realizada com sucesso.', accountPayable))
}


async function putAccountPayable (req, res, next) {
	const { id, idFornecedor, idMoeda, idTipoDocumento, idContaBancaria } = req.body
	let response
	try {
		response = await putAccountPayableService(id, idFornecedor, idMoeda, idTipoDocumento, idContaBancaria)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Conta a pagar atualizada com sucesso.', response))
}

async function deleteAccountPayableInstallments (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteAccountPayableInstallmentsService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Conta a pagar e parcelas excluídas com sucesso.', response))
}

async function getRegistrationInfo (req, res, next) {
	let response
	try {		
		response = await getRegistrationInfoService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de informações para o cadastro de uma nova duplicata a receber realizada com sucesso.', response))
}

async function createNewAccountPayable (req, res, next) {
	const { identifier, qtdInstallment, totalValue, description, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, Installment } = req.body
	let response
	try {
		response = await createNewAccountPayableService(identifier, qtdInstallment, totalValue, description, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, Installment)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Contas a Pagar criada com sucesso.', response))
}

async function getInstallmentsByAccountId (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await getInstallmentsByAccountIdIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de parcelas realizada com sucesso.', response))
}

async function getInstallments (req, res, next) {
	let response
	try {
		response = await getInstallmentsService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de parcelas realizada com sucesso.', response))
}


module.exports = {
	getAccountPayablesList,
	getAccountPayableById,
	getAccountPayableByIdentifier,
	putAccountPayable,
	deleteAccountPayableInstallments,
	getRegistrationInfo,
	createNewAccountPayable,
	getInstallmentsByAccountId,
	getInstallments
}