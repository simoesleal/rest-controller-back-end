const express = require('express')
const { 
	insertNewWaiterRequest,
	deleteWaiterRequest
} = require('./waiter_request.controller')

const router = express.Router()
router.post('/novo-pedido/', insertNewWaiterRequest)
router.put('/deletar-pedido/', deleteWaiterRequest)

module.exports = router