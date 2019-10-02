const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getPaymentTypeListService,
	getPaymentTypeByIdService,
	postPaymentTypeService,
	putPaymentTypeService,
	deletePaymentTypeService
} = require('./payment_type.service')

async function getPaymentTypeList (req, res, next) {
	let paymentTypeList
	try {
		paymentTypeList = await getPaymentTypeListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de formas de pagamento realizada com sucesso.', paymentTypeList))
}

async function getPaymentTypeById (req, res, next) {
	const { id } = req.params
	let paymentType
	try {
		paymentType = await getPaymentTypeByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de formas de pagamento realizada com sucesso.', paymentType))
}

async function postPaymentType (req, res, next) {
	const { typePayment, status } = req.body
	let response
	try {
		response = await postPaymentTypeService(typePayment, status)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Formas de pagamento cadastrado com sucesso.', response))
}

async function putPaymentType (req, res, next) {
	const { id, typePayment, status } = req.body
	let response
	try {
		response = await putPaymentTypeService(id, typePayment, status)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Forma de pagamento atualizado com sucesso.', response))
}

async function deletePaymentType (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deletePaymentTypeService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Forma de pagamento excluído com sucesso.', response))
}

module.exports = {
	getPaymentTypeList,
	getPaymentTypeById,
	postPaymentType,
	putPaymentType,
	deletePaymentType
}