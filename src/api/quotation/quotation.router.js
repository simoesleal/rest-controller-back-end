const express = require('express')
const { 
	getQuotationList,
	postQuotation,
	putQuotation,
	deleteQuotation,
	getQuotationByCoinId,
	updataQuotationCashier
} = require('./quotation.controller')

const router = express.Router()

router.get('/consultar/', getQuotationList)
router.post('/cadastrar/', postQuotation)
router.put('/atualizar/', putQuotation)
router.delete('/deletar/:id', deleteQuotation)
router.get('/consultar/lista/caixa', getQuotationByCoinId)
router.put('/atualizar/cotacoes/caixa', updataQuotationCashier)
module.exports = router