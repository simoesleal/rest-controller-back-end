const express = require('express')
const { 
	getPaymentConditionList,
	getPaymentConditionById,
	postPaymentCondition,
	putPaymentCondition,
	deletePaymentCondition
} = require('./payment_condition.controller')

const router = express.Router()

router.get('/consultar/', getPaymentConditionList)
router.get('/consultar/:id', getPaymentConditionById)
router.post('/cadastrar/', postPaymentCondition)
router.put('/atualizar/', putPaymentCondition)
router.delete('/deletar/:id', deletePaymentCondition)

module.exports = router