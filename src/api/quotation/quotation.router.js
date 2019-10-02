const express = require('express')
const { 
	getQuotationList,
	postQuotation,
	putQuotation,
	deleteQuotation
} = require('./quotation.controller')

const router = express.Router()

router.get('/consultar/', getQuotationList)
router.post('/cadastrar/', postQuotation)
router.put('/atualizar/', putQuotation)
router.delete('/deletar/:id', deleteQuotation)

module.exports = router