const express = require('express')
const { 
	getEmployeeList,
	getEmployeeById,
	getEmployeeByName,
	postEmployee,
	putEmployee,
	putEmployeePassword,
	deleteEmployee
} = require('./employee.controller')

const router = express.Router()

router.get('/consultar/funcionario', getEmployeeList)
router.get('/consultar/funcionario/:id', getEmployeeById)
router.get('/consultar/funcionario/nome/:name', getEmployeeByName)
router.post('/cadastrar/funcionario/', postEmployee)
router.put('/atualizar/funcionario/', putEmployee)
router.put('/atualizar/funcionario/senha', putEmployeePassword)
router.delete('/deletar/funcionario/:id', deleteEmployee)

module.exports = router