const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getProductGroupListService,
	getProductGroupByIdService,
	getProductGroupByNameService,
	postProductGroupService,
	putProductGroupService,
	deleteProductGroupService
} = require('./product_group.service')

async function getProductGroupList (req, res, next) {
	let productGroupList
	try {
		productGroupList = await getProductGroupListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de grupo de produtos realizada com sucesso.', productGroupList))
}

async function getProductGroupById (req, res, next) {
	const { id } = req.params
	let productGroup
	try {
		productGroup = await getProductGroupByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de grupo de produtos realizada com sucesso.', productGroup))
}

async function getProductGroupByName (req, res, next) {
	const { name } = req.params
	let productGroup
	try {
		productGroup = await getProductGroupByNameService(name)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de grupo de produtos realizada com sucesso.', productGroup))
}

async function postProductGroup (req, res, next) {
	const { name, details, status } = req.body
	let response
	try {
		response = await postProductGroupService(name, details, status)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Grupo de produtos cadastradao com sucesso.', response))
}

async function putProductGroup (req, res, next) {
	const { id, name, details, status } = req.body
	let response
	try {
		response = await putProductGroupService(id, name, details, status)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Grupo de produtos atualizada com sucesso.', response))
}

async function deleteProductGroup (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteProductGroupService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Grupo de produtos excluído com sucesso.', response))
}

module.exports = {
	getProductGroupList,
	getProductGroupById,
	getProductGroupByName,
	postProductGroup,
	putProductGroup,
	deleteProductGroup
}