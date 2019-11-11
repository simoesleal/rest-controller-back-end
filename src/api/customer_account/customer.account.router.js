const express = require('express')
const { 
	getOccupiedTableList,
	getOrderFromCustomer
} = require('./customer.account.controller')

const router = express.Router()

router.get('/consultar/mesas/ocupadas', getOccupiedTableList)
router.get('/consultar/pedidos/:idMesa/:numeroMesa', getOrderFromCustomer)

module.exports = router