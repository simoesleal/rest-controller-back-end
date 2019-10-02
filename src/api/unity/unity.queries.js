/* Tabela Pais */
const SELECT_UNITS = `SELECT id, nome_unidade, abreviatura FROM unidade;`

const SELECT_UNITY = `SELECT id, nome_unidade, abreviatura FROM unidade WHERE id = ($1);`

const SELECT_UNITY_BY_NAME = `SELECT  id, nome_unidade, abreviatura FROM unidade WHERE nome_unidade like ($1);`

const INSERT_NEW_UNITY = `INSERT INTO unidade (nome_unidade, abreviatura) VALUES ($1, $2);`

const UPDATE_UNITY = `UPDATE unidade 
												SET nome_unidade = ($2), abreviatura = ($3)
												WHERE id = ($1);`

const DELETE_UNITY = `DELETE FROM unidade WHERE id = ($1);`


module.exports = {
	SELECT_UNITS,
	SELECT_UNITY,
	SELECT_UNITY_BY_NAME,
	INSERT_NEW_UNITY,
	UPDATE_UNITY,
	DELETE_UNITY
}
