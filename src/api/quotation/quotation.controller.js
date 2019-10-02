const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getQuotationListService,
	postQuotationService,
	putQuotationService,
	deleteQuotationService
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

module.exports = {
	getQuotationList,
	postQuotation,
	putQuotation,
	deleteQuotation
}