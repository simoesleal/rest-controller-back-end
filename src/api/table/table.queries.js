/* Tabela Pais */
const SELECT_TABLES = `SELECT id, numero, detalhes, status FROM mesa ORDER BY numero ASC;`
const SELECT_TABLE_BY_ID = `SELECT id, numero, detalhes, status FROM mesa WHERE id = ($1);`

const SELECT_TABLE_BY_NUMBER = `SELECT id, numero, detalhes, status FROM mesa WHERE numero = ($1);`

const INSERT_NEW_TABLE = `INSERT INTO mesa (numero, detalhes, status) VALUES ($1, $2, $3)`
const UPDATE_TABLE = `UPDATE mesa 
												SET numero = ($2), detalhes = ($3), status = ($4) 
												WHERE id = ($1);`
const DELETE_TABLE = `DELETE FROM mesa WHERE id = ($1);`


module.exports = {
	SELECT_TABLES,
	SELECT_TABLE_BY_ID,
	SELECT_TABLE_BY_NUMBER,
	INSERT_NEW_TABLE,
	UPDATE_TABLE,
	DELETE_TABLE
}