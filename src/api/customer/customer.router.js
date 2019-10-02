const express = require('express')
const { 
	getCustomerList,
	getCustomerById,
	getCustomerByName,
	getCustomerByLastName,
	getCustomerByPhone,
	getCustomerByCellphone,
	postCustomer,
	putCustomer,
	deleteCustomer
} = require('./customer.controller')

const router = express.Router()

router.get('/consultar/cliente', getCustomerList)
router.get('/consultar/cliente/:id', getCustomerById)
router.get('/consultar/cliente/nome/:name', getCustomerByName)
router.get('/consultar/cliente/sobrenome/:lastName', getCustomerByLastName)
router.get('/consultar/cliente/telefone/:phone', getCustomerByPhone)
router.get('/consultar/cliente/celular/:cellphone', getCustomerByCellphone)
router.post('/cadastrar/cliente/', postCustomer)
router.put('/atualizar/cliente/', putCustomer)
router.delete('/deletar/cliente/:id', deleteCustomer)

module.exports = router