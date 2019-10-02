/* Tabela Pais */
const SELECT_BANKS = `SELECT id, banco FROM banco;`
const SELECT_BANK_BY_ID = `SELECT id, banco FROM banco WHERE id =  ($1);`
const SELECT_BANK_BY_NAME = `SELECT id, banco FROM banco WHERE banco like ($1);`
const INSERT_NEW_BANK = `INSERT INTO banco (banco) VALUES ($1)`
const UPDATE_BANK = `UPDATE banco SET banco = ($2) WHERE id = ($1);`
const DELETE_BANK = `DELETE FROM banco WHERE id = ($1);`


module.exports = {
	SELECT_BANKS,
	SELECT_BANK_BY_ID,
	SELECT_BANK_BY_NAME,
	INSERT_NEW_BANK,
	UPDATE_BANK,
	DELETE_BANK
}