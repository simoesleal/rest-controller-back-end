const express = require('express')
const { 
	insertNewWaiterRequest
} = require('./waiter_request.controller')

const router = express.Router()
router.post('/novo-pedido/', insertNewWaiterRequest)

module.exports = router