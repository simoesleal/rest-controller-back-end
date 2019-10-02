const express = require('express')
const { 
	getProductList,
	getProductById,
	getProductByName,
	postProduct,
	putProduct,
	deleteProduct
} = require('./product.controller')

const router = express.Router()

router.get('/consultar/produto', getProductList)
router.get('/consultar/produto/:id', getProductById)
router.get('/consultar/produto/descricao/:name', getProductByName)
router.post('/cadastrar/produto/', postProduct)
router.put('/atualizar/produto/', putProduct)
router.delete('/deletar/produto/:id', deleteProduct)

module.exports = router