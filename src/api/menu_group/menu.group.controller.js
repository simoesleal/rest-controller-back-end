const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getMenuGroupListService,
	getMenuGroupByIdService,
	getMenuGroupByNameService,
	postMenuGroupService,
	putMenuGroupService,
	deleteMenuGroupService
} = require('./menu.group.service')

async function getMenuGroupList (req, res, next) {
	let response
	try {
		response = await getMenuGroupListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de grupo do cardápio realizada com sucesso.', response))
}

async function getMenuGroupById (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await getMenuGroupByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de grupo do cadrápio realizada com sucesso.', response))
}

async function getMenuGroupByName (req, res, next) {
	const { name } = req.params
	let response
	try {
		response = await getMenuGroupByNameService(name)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de grupo do cardápio realizada com sucesso.', response))
}

async function postMenuGroup (req, res, next) {
	const { name, status } = req.body
	let response
	try {
		response = await postMenuGroupService(name, status)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Grupo do cardápio cadastradao com sucesso.', response))
}

async function putMenuGroup (req, res, next) {
	const { id, name, status } = req.body
	let response
	try {
		response = await putMenuGroupService(id, name, status)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Grupo do cardápio atualizada com sucesso.', response))
}

async function deleteMenuGroup (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteMenuGroupService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Grupo do cardápio excluído com sucesso.', response))
}

module.exports = {
	getMenuGroupList,
	getMenuGroupById,
	getMenuGroupByName,
	postMenuGroup,
	putMenuGroup,
	deleteMenuGroup
}