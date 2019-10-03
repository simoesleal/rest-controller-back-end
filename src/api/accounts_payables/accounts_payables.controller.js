const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getAccountPayablesListService,
	getAccountPayableByIdService,
	getAccountPayableByNumberService,
	postAccountPayableService,
	putAccountPayableService,
	deleteAccountPayableService
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

async function getAccountPayableByNumber (req, res, next) {
	const { number } = req.params
	let accountPayable
	try {
		accountPayable = await getAccountPayableByNumberService(number)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de conta a pagar realizada com sucesso.', accountPayable))
}

async function postAccountPayable (req, res, next) {
	const { number, issueDay, dueDay, installmentValue, totalValue, historic, observations, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento } = req.body
	let response
	try {
		response = await postAccountPayableService(number, issueDay, dueDay, installmentValue, totalValue, historic, observations, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Conta a pagar cadastrado com sucesso.', response))
}

async function putAccountPayable (req, res, next) {
	const { id, number, issueDay, dueDay, installmentValue, totalValue, historic, observations, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento } = req.body
	let response
	try {
		response = await putAccountPayableService(id, number, issueDay, dueDay, installmentValue, totalValue, historic, observations, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Conta a pagar atualizada com sucesso.', response))
}

async function deleteAccountPayable (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteAccountPayableService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Conta a pagar excluída com sucesso.', response))
}

module.exports = {
	getAccountPayablesList,
	getAccountPayableById,
	getAccountPayableByNumber,
	postAccountPayable,
	putAccountPayable,
	deleteAccountPayable
}