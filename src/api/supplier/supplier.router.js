const express = require('express')
const { 
	getSupplierList,
	getSupplierBy,
	getSupplierByRazaoSocial,
	getSupplierByNomeFantasia,
	postSupplier,
	putSupplier,
	deleteSupplier
} = require('./supplier.controller')

const router = express.Router()

router.get('/consultar/fornecedor', getSupplierList)
router.get('/consultar/fornecedor/:id', getSupplierBy)
router.get('/consultar/fornecedor/razao-social/:razaoSocial', getSupplierByRazaoSocial)
router.get('/consultar/fornecedor/nome-fantasia/:fakeName', getSupplierByNomeFantasia)
router.post('/cadastrar/fornecedor/', postSupplier)
router.put('/atualizar/fornecedor/', putSupplier)
router.delete('/deletar/fornecedor/:id', deleteSupplier)

module.exports = router