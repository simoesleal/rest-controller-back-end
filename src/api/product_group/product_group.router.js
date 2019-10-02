const express = require('express')
const { 
	getProductGroupList,
	getProductGroupById,
	getProductGroupByName,
	postProductGroup,
	putProductGroup,
	deleteProductGroup
} = require('./product_group.controller')

const router = express.Router()

router.get('/consultar/', getProductGroupList)
router.get('/consultar/:id', getProductGroupById)
router.get('/consultar/nome/:name', getProductGroupByName)
router.post('/cadastrar/', postProductGroup)
router.put('/atualizar/', putProductGroup)
router.delete('/deletar/:id', deleteProductGroup)

module.exports = router