const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getInstallmentsService,
	getInstallmentsByAccountIdService,
	getInstallmentsByIdentifierService,
	putInstallmetByIdService,
	setInstallmetPaidByIdService,
	setInstallmetCanceledByIdService
} = require('./installment.payables.service')

async function getInstallments (req, res, next) {
	let response
	try {
		response = await getInstallmentsService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de parcelas realizada com sucesso.', response))
}

async function getInstallmentsByAccountId (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await getInstallmentsByAccountIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de parcelas realizada com sucesso.', response))
}

async function getInstallmentsByIdentifier (req, res, next) {
	const { identifier } = req.params
	let response
	try {
		response = await getInstallmentsByIdentifierService(identifier)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de parcelas realizada com sucesso.', response))
}

async function putInstallmetById (req, res, next) {
	const { id, dataEmissao, dataVencimento, dataApropriacao, descricao } = req.body
	let response
	try {
		response = await putInstallmetByIdService(id, dataEmissao, dataVencimento, dataApropriacao, descricao)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Parcela atualizada com sucesso.', response))
}

async function setInstallmetPaidById (req, res, next) {
	const { id } = req.body
	let response
	try {
		response = await setInstallmetPaidByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Parcela atualizada com sucesso.', response))
}

async function setInstallmetCanceledById (req, res, next) {
	const { id } = req.body
	let response
	try {
		response = await setInstallmetCanceledByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Parcela atualizada com sucesso.', response))
}

module.exports = {
	getInstallments,
	getInstallmentsByAccountId,
	getInstallmentsByIdentifier,
	putInstallmetById,
	setInstallmetPaidById,
	setInstallmetCanceledById
}