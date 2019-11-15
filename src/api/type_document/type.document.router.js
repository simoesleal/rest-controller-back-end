const express = require('express')
const { 
	getTypeDocumentList,
	getTypeDocumentById,
	getTypeDocumentByName,
	postTypeDocument,
	putTypeDocument,
	deleteTypeDocument
} = require('./type.document.controller')

const router = express.Router()

router.get('/consultar/', getTypeDocumentList)
router.get('/consultar/:id', getTypeDocumentById)
router.get('/consultar/nome/:typeDocument', getTypeDocumentByName)
router.post('/cadastrar/', postTypeDocument)
router.put('/atualizar/', putTypeDocument)
router.delete('/deletar/:id', deleteTypeDocument)

module.exports = router