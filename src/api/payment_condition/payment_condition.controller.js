const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getPaymentConditionListService,
	getPaymentConditionByIdService,
	postPaymentConditionService,
	putPaymentConditionService,
	deletePaymentConditionService
} = require('./payment_condition.service')

async function getPaymentConditionList (req, res, next) {
	let paymentConditionList
	try {
		paymentConditionList = await getPaymentConditionListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de condições de pagamento realizada com sucesso.', paymentConditionList))
}

async function getPaymentConditionById (req, res, next) {
	const { id } = req.params
	let paymentCondition
	try {
		paymentCondition = await getPaymentConditionByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de condições de pagamento realizada com sucesso.', paymentCondition))
}

async function postPaymentCondition (req, res, next) {
	const { condition, installments, firstDay, description, id_forma_pagamento } = req.body
	let response
	try {
		response = await postPaymentConditionService(condition, installments, firstDay, description, id_forma_pagamento)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Condção de pagamento cadastrado com sucesso.', response))
}

async function putPaymentCondition (req, res, next) {
	const { id, condition, installments, firstDay, description, id_forma_pagamento } = req.body
	let response
	try {
		response = await putPaymentConditionService(id, condition, installments, firstDay, description, id_forma_pagamento)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Condção de pagamento atualizado com sucesso.', response))
}

async function deletePaymentCondition (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deletePaymentConditionService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Condção de pagamento excluído com sucesso.', response))
}

module.exports = {
	getPaymentConditionList,
	getPaymentConditionById,
	postPaymentCondition,
	putPaymentCondition,
	deletePaymentCondition
}