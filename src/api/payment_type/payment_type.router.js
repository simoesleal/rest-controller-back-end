const express = require('express')
const { 
	getPaymentTypeList,
	getPaymentTypeById,
	postPaymentType,
	putPaymentType,
	deletePaymentType
} = require('./payment_type.controller')

const router = express.Router()

router.get('/consultar/', getPaymentTypeList)
router.get('/consultar/:id', getPaymentTypeById)
router.post('/cadastrar/', postPaymentType)
router.put('/atualizar/', putPaymentType)
router.delete('/deletar/:id', deletePaymentType)

module.exports = router