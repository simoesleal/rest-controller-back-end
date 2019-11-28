const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_PRODUCT } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { HIDDEN_BIG_RETURN } = require('../utils/constants')
const {
	validateNewProduct,
  validateUpdateProduct	
} = require('./product.validation')
const { 
  getProductListRepository,
  getProductByIdRepository,
  getProductByNameRepository,
  postProductRepository,
  putProductRepository,
  deleteProductRepository,
	getProductByMenuGroupRepository
} = require('./product.repository')

async function getProductListService () {
	let methodName = 'getProductListService'
	let productList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_PRODUCT)
		productList = await getProductListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PRODUCT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, HIDDEN_BIG_RETURN, LOG_PRODUCT)
	return productList
}

async function getProductByIdService (id) {
	let methodName = 'getProductByIdService'
	let product
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_PRODUCT)
		product = await getProductByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PRODUCT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, product, LOG_PRODUCT)
	return product
}

async function getProductByNameService (name) {
	let methodName = 'getProductByNameService'
	let product
	const preparedName = `%${name}%`
	try {
		logInfo(`Entering ${methodName}`, `name = [${preparedName}]`, LOG_PRODUCT)
		product = await getProductByNameRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PRODUCT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, product, LOG_PRODUCT)
	return product
}

async function postProductService (name, description, purchase_price, sale_price, cost_price, current_quantity, max_quantity, min_quantity, status, id_grupo_produto, id_unidade, id_grupo_cardapio) {
	let methodName = 'postProductService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}], description = [${description}], purchase_price = [${purchase_price}], sale_price = [${sale_price}], cost_price = [${cost_price}], current_quantity = [${current_quantity}], max_quantity = [${max_quantity}], min_quantity = [${min_quantity}], status = [${status}], id_grupo_produto = [${id_grupo_produto}], id_unidade = [${id_unidade}], id_grupo_cardapio = [${id_grupo_cardapio}]`, LOG_PRODUCT)

		await validateNewProduct(name, purchase_price, sale_price, cost_price, current_quantity, max_quantity,  min_quantity, id_grupo_produto, id_unidade)

		response = await postProductRepository(name, description, purchase_price, sale_price, cost_price, current_quantity, max_quantity, min_quantity, status, id_grupo_produto, id_unidade, id_grupo_cardapio)

	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PRODUCT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_PRODUCT)
	return response
}

async function putProductService (id, name, description, purchase_price, sale_price, cost_price, current_quantity, max_quantity, min_quantity, status, id_grupo_produto, id_unidade, id_grupo_cardapio) {
	let methodName = 'putProductService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], name = [${name}], description = [${description}], purchase_price = [${purchase_price}], sale_price = [${sale_price}], cost_price = [${cost_price}], current_quantity = [${current_quantity}], max_quantity = [${max_quantity}], status = [${status}], id_grupo_produto = [${id_grupo_produto}], id_unidade = [${id_unidade}], id_grupo_cardapio = [${id_grupo_cardapio}]`, LOG_PRODUCT)

		await validateUpdateProduct(id, name, purchase_price, sale_price, cost_price, current_quantity, max_quantity,  min_quantity, id_grupo_produto, id_unidade)

		response = await putProductRepository(id, name, description, purchase_price, sale_price, cost_price, current_quantity, max_quantity, min_quantity, status, id_grupo_produto, id_unidade, id_grupo_cardapio)

	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PRODUCT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_PRODUCT)
	return response
}

async function deleteProductService (id) {
	let methodName = 'deleteProductService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_PRODUCT)
		response = await deleteProductRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PRODUCT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_PRODUCT)
	return response
}

async function getProductByMenuGroupService (id) {
	let methodName = 'getProductByMenuGroupService'
	let product
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_PRODUCT)
		product = await getProductByMenuGroupRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PRODUCT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, product, LOG_PRODUCT)
	return product
}
module.exports = {
	getProductListService,
	getProductByIdService,
	getProductByNameService,
	postProductService,
	putProductService,
	deleteProductService,
	getProductByMenuGroupService
}