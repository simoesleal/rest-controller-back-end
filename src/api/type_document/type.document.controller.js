const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getTypeDocumentListService,
	getTypeDocumentByIdService,
	getTypeDocumentByNameService,
	postTypeDocumentService,
	putTypeDocumentService,
	deleteTypeDocumentService
} = require('./type.document.service')

async function getTypeDocumentList (req, res, next) {
	let response
	try {
		response = await getTypeDocumentListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de tipos de documentos realizada com sucesso.', response))
}

async function getTypeDocumentById (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await getTypeDocumentByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de tipo de documento realizada com sucesso.', response))
}

async function getTypeDocumentByName (req, res, next) {
	const { typeDocument } = req.params
	let response
	try {
		response = await getTypeDocumentByNameService(typeDocument)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de tipo de documento realizada com sucesso.', response))
}

async function postTypeDocument (req, res, next) {
	const { typeDocument, description, status } = req.body
	let response
	try {
		response = await postTypeDocumentService(typeDocument, description, status)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Tipo de Documento cadastrada com sucesso.', response))
}

async function putTypeDocument (req, res, next) {
	const { id, typeDocument, description, status } = req.body
	let response
	try {
		response = await putTypeDocumentService(id, typeDocument, description, status)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Tipo de Documento atualizada com sucesso.', response))
}

async function deleteTypeDocument (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteTypeDocumentService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Tipo de Documento excluído com sucesso.', response))
}

module.exports = {
	getTypeDocumentList,
	getTypeDocumentById,
	getTypeDocumentByName,
	postTypeDocument,
	putTypeDocument,
	deleteTypeDocument
}