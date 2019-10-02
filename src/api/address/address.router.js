const express = require('express')
const { 
	getAddressById,
	postAddress,
	putAddress,
} = require('./address.controller')

const router = express.Router()

router.get('/consultar/endereco/:id', getAddressById)
router.post('/cadastrar/endereco/', postAddress)
router.put('/atualizar/endereco/', putAddress)

module.exports = router