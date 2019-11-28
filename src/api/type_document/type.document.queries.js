/* Tabela Pais */
const SELECT_TYPES_DOCUMENT = `SELECT id, tipo_documento, descricao, status FROM tipo_documento where status is not false;`

const SELECT_TYPE_DOCUMENT = `SELECT id, tipo_documento, descricao, status FROM tipo_documento WHERE id = ($1) and status is not false;`

const SELECT_TYPE_DOCUMENT_BY_NAME = `SELECT id, tipo_documento, descricao, status FROM tipo_documento WHERE tipo_documento like ($1) and status is not false;`

const INSERT_TYPE_DOCUMENT = `INSERT INTO tipo_documento (tipo_documento, descricao, status) 
												 VALUES ($1, $2, $3);`

const UPDATE_TYPE_DOCUMENT = `UPDATE tipo_documento
SET tipo_documento  = ($2), descricao = ($3), status = ($4)
WHERE id = ($1);`

const DELETE_TYPE_DOCUMENT = `DELETE FROM tipo_documento WHERE id = ($1);`

module.exports = {
	SELECT_TYPES_DOCUMENT,
	SELECT_TYPE_DOCUMENT,
	SELECT_TYPE_DOCUMENT_BY_NAME,
	INSERT_TYPE_DOCUMENT,
	UPDATE_TYPE_DOCUMENT,
	DELETE_TYPE_DOCUMENT
}
