const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getCashRegisterListService,
	getCashRegisterByIdService,
	postCashRegisterService,
	putCashRegisterService,
	deleteCashRegisterService,
	closeCashRegisterService
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
	const { id_funcionario, saldo_inicial, saldo_final, fundo_real, fundo_dolar, fundo_peso, fechamentos_real, fechamentos_dolar, fechamentos_peso, fechamentos_cartao_cred, fechamentos_cartao_deb, valor_total_fechamentos } = req.body
	let response
	
	try {
		response = await postCashRegisterService(id_funcionario, saldo_inicial, saldo_final, fundo_real, fundo_dolar, fundo_peso, fechamentos_real, fechamentos_dolar, fechamentos_peso, fechamentos_cartao_cred, fechamentos_cartao_deb, valor_total_fechamentos)
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

async function closeCashRegister (req, res, next) {
	const { id, saldo_final, fechamentos_real, fechamentos_dolar, fechamentos_peso, fechamentos_cartao_cred, fechamentos_cartao_deb, valor_total_fechamentos } = req.body
	const data_hora_fim = new Date()
	const status = false
	let response
	try {
		response = await closeCashRegisterService(id, saldo_final, fechamentos_real, fechamentos_dolar, fechamentos_peso, fechamentos_cartao_cred, fechamentos_cartao_deb, valor_total_fechamentos, data_hora_fim, status)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Caixa fechado com sucesso.', response))
}

module.exports = {
	getCashRegisterList,
	getCashRegisterById,
	postCashRegister,
	putCashRegister,
	deleteCashRegister,
	closeCashRegister
}