const express = require('express')
const { 
	getMenuGroupList,
	getMenuGroupById,
	getMenuGroupByName,
	postMenuGroup,
	putMenuGroup,
	deleteMenuGroup
} = require('./menu.group.controller')

const router = express.Router()

router.get('/consultar/', getMenuGroupList)
router.get('/consultar/:id', getMenuGroupById)
router.get('/consultar/nome/:name', getMenuGroupByName)
router.post('/cadastrar/', postMenuGroup)
router.put('/atualizar/', putMenuGroup)
router.delete('/deletar/:id', deleteMenuGroup)

module.exports = router