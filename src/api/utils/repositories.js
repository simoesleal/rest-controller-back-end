const db = require('../../db/db')
/**
 * @description Efetua a validacao da transaction
 * @param {object} transaction
 * @returns {object}
 */
async function validaTransaction (transaction = null) {
	if (!transaction) transaction = Object.assign(db)
	return transaction
}

module.exports = validaTransaction