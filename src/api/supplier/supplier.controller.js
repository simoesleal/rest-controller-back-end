const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getSupplierListService,
	getSupplierByIdService,
	getSupplierByRazaoSocialService,
	getSupplierByNomeFantasiaService,
	postSupplierService,
	putSupplierService,
	deleteSupplierService,
	getSupplierByDocService
} = require('./supplier.service')

async function getSupplierList (req, res, next) {
	let supplierList
	try {
		supplierList = await getSupplierListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Fornecedores realizada com sucesso.', supplierList))
}

async function getSupplierBy (req, res, next) {
	const { id } = req.params
	let supplier
	try {
		supplier = await getSupplierByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Fornecedor realizada com sucesso.', supplier))
}

async function getSupplierByRazaoSocial (req, res, next) {
	const { razaoSocial } = req.params
	let supplier
	try {
		supplier = await getSupplierByRazaoSocialService(razaoSocial)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Fornecedor realizada com sucesso.', supplier))
}

async function getSupplierByDoc (req, res, next) {
	const { document } = req.params
	let response
	try {
		response = await getSupplierByDocService(document)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Fornecedor realizada com sucesso.', response))
}

async function getSupplierByNomeFantasia (req, res, next) {
	const { fakeName } = req.params
	let supplier
	try {
		supplier = await getSupplierByNomeFantasiaService(fakeName)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Fornecedor realizada com sucesso.', supplier))
}


async function postSupplier (req, res, next) {
	const { nome_fantasia, razao_social, cpf_cnpj, insc_municipal, insc_estadual, status, email, phone, cellphone, tipo_fornecedor, id_endereco } = req.body
	let response
	try {
		response = await postSupplierService(nome_fantasia, razao_social, cpf_cnpj, insc_municipal, insc_estadual, status, email, phone, cellphone, tipo_fornecedor, id_endereco)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Fornecedor cadastrado com sucesso.', response))
}

async function putSupplier (req, res, next) {
	const { id, nome_fantasia, razao_social, cpf_cnpj, insc_municipal, insc_estadual, status, email, phone, cellphone, tipo_fornecedor, id_endereco } = req.body
	let response
	try {
		response = await putSupplierService(id, nome_fantasia, razao_social, cpf_cnpj, insc_municipal, insc_estadual, status, email, phone, cellphone, tipo_fornecedor, id_endereco)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Fornecedor atualizado com sucesso.', response))
}

async function deleteSupplier (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteSupplierService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Fornecedor excluído com sucesso.', response))
}

module.exports = {
	getSupplierList,
	getSupplierBy,
	getSupplierByRazaoSocial,
	getSupplierByNomeFantasia,
	postSupplier,
	putSupplier,
	deleteSupplier,
	getSupplierByDoc
}