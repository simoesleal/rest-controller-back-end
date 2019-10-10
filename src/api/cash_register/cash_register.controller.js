const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getCashRegisterListService,
	getCashRegisterByIdService,
	postCashRegisterService,
	putCashRegisterService,
	deleteCashRegisterService
} = require('./cash_register.service')

async function getCashRegisterList (req, res, next) {
	let cashRegisterList
	try {
		cashRegisterList = await getCashRegisterListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de caixas realizada com sucesso.', cashRegisterList))
}

async function getCashRegisterById (req, res, next) {
	const { id } = req.params
	let cashRegister
	try {
		cashRegister = await getCashRegisterByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de caixa realizada com sucesso.', cashRegister))
}

async function postCashRegister (req, res, next) {
	const { id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd } = req.body
	let response
	try {
		response = await postCashRegisterService(id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Caixa cadastrada com sucesso.', response))
}

async function putCashRegister (req, res, next) {
	const { id, id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd } = req.body
	let response
	try {
		response = await putCashRegisterService(id, id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Caixa atualizada com sucesso.', response))
}

async function deleteCashRegister (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteCashRegisterService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Caixa excluído com sucesso.', response))
}

module.exports = {
	getCashRegisterList,
	getCashRegisterById,
	postCashRegister,
	putCashRegister,
	deleteCashRegister
}