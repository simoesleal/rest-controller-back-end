const express = require('express')
const { 
	getCashRegisterList,
	getCashRegisterById,
	postCashRegister,
	putCashRegister,
	deleteCashRegister
} = require('./cash_register.controller')

const router = express.Router()
router.get('/consultar/', getCashRegisterList)
router.get('/consultar/:id', getCashRegisterById)
router.post('/cadastrar/', postCashRegister)
router.put('/atualizar/', putCashRegister)
router.delete('/deletar/:id', deleteCashRegister)

module.exports = router