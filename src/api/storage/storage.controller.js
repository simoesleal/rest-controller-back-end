const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	postNewPurchaseEntryService
} = require('./storage.service')

async function postNewPurchaseEntryController (req, res, next) {
	const { numeroNota, serieNota, totalValue, description, dataEmissao, dataVencimento, dataApropriacao, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, listaProdutos } = req.body
	let response
	try {
		response = await postNewPurchaseEntryService(numeroNota, serieNota, totalValue, description, dataEmissao, dataVencimento, dataApropriacao, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, listaProdutos)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Nota de compra inserida com sucesso.', response))
}

module.exports = {
	postNewPurchaseEntryController
}