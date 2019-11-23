const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getProductListService,
	getProductByIdService,
	getProductByNameService,
	postProductService,
	putProductService,
	deleteProductService,
	getProductByMenuGroupService
} = require('./product.service')

async function getProductList (req, res, next) {
	let productList
	try {
		productList = await getProductListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Produtos realizada com sucesso.', productList))
}

async function getProductById (req, res, next) {
	const { id } = req.params
	let product
	try {
		product = await getProductByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta do Produto realizada com sucesso.', product))
}

async function getProductByName (req, res, next) {
	const { name } = req.params
	let product
	try {
		product = await getProductByNameService(name)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta do Produto realizada com sucesso.', product))
}

async function postProduct (req, res, next) {
	const { name, description, purchase_price, sale_price, cost_price, current_quantity, max_quantity, min_quantity, status, id_grupo_produto, id_unidade, id_grupo_cardapio } = req.body
	let response
	try {
		response = await postProductService(name, description, purchase_price, sale_price, cost_price, current_quantity, max_quantity, min_quantity, status, id_grupo_produto, id_unidade, id_grupo_cardapio)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Produto cadastrado com sucesso.', response))
}

async function putProduct (req, res, next) {
	const { id, name, description, purchase_price, sale_price, cost_price, current_quantity, max_quantity, min_quantity, status, id_grupo_produto, id_unidade, id_grupo_cardapio } = req.body
	let response
	try {
		response = await putProductService(id, name, description, purchase_price, sale_price, cost_price, current_quantity, max_quantity, min_quantity, status, id_grupo_produto, id_unidade, id_grupo_cardapio)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Produto atualizado com sucesso.', response))
}

async function deleteProduct (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteProductService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Produto excluído com sucesso.', response))
}

async function getProductByMenuGroup (req, res, next) {
	const { id } = req.params
	let product
	try {
		product = await getProductByMenuGroupService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta do Produto realizada com sucesso.', product))
}

module.exports = {
	getProductList,
	getProductById,
	getProductByName,
	postProduct,
	putProduct,
	deleteProduct,
	getProductByMenuGroup
}