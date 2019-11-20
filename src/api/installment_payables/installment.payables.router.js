const express = require('express')
const { 
	getInstallments,
	getInstallmentsByAccountId,
	getInstallmentsByIdentifier,
	putInstallmetById,
	setInstallmetPaidById,
	setInstallmetCanceledById
} = require('./installment.payables.controller')

const router = express.Router()
router.get('/consultar', getInstallments)
router.get('/consultar/:id', getInstallmentsByAccountId)
router.get('/consultar/identificador/:identifier', getInstallmentsByIdentifier)
router.put('/atualizar/parcela/', putInstallmetById)
router.put('/atualizar/parcela/baixar', setInstallmetPaidById)
router.put('/atualizar/parcela/cancelar', setInstallmetCanceledById)

module.exports = router