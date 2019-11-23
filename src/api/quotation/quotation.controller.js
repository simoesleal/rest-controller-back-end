const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getQuotationListService,
	postQuotationService,
	putQuotationService,
	deleteQuotationService,
	getQuotationByCoinIdService,
	updataQuotationCashierService
} = require('./quotation.service')

async function getQuotationList (req, res, next) {
	let coinList
	try {
		coinList = await getQuotationListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de cotações realizada com sucesso.', coinList))
}

async function postQuotation (req, res, next) {
	const { quotation, id_coin } = req.body
	let response
	try {
		response = await postQuotationService(quotation, id_coin)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Cotação cadastrada com sucesso.', response))
}

async function putQuotation (req, res, next) {
	const { id, quotation, id_coin } = req.body
	let response
	try {
		response = await putQuotationService(id, quotation, id_coin)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Cotação atualizada com sucesso.', response))
}

async function deleteQuotation (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteQuotationService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Cotação excluída com sucesso.', response))
}

async function getQuotationByCoinId (req, res, next) {
	let response
	try {
		response = await getQuotationByCoinIdService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de cotações realizada com sucesso.', response))
}

async function updataQuotationCashier (req, res, next) {
	const { dolarQuotation, pesoQuotation, gueraniQuotation } = req.body
	let response
	try {
		response = await updataQuotationCashierService(dolarQuotation, pesoQuotation, gueraniQuotation)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Cotação atualizada com sucesso.', response))
}


module.exports = {
	getQuotationList,
	postQuotation,
	putQuotation,
	deleteQuotation,
	getQuotationByCoinId,
	updataQuotationCashier
}