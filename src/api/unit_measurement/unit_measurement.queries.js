/* Tabela Pais */
const SELECT_UNIT_MEASUREMENT = `SELECT id, nome_unidade, abreviatura, status FROM unidade_produto;`

const SELECT_UNIT_MEASUREMENT_BY_ID = `select id, nome_unidade, abreviatura, status FROM unidade_produto WHERE id = ($1);`

const SELECT_UNIT_MEASUREMENT_BY_NAME = `select id, nome_unidade, abreviatura, status FROM unidade_produto WHERE nome_unidade like ($1);`

const INSERT_NEW_UNIT_MEASUREMENT = `INSERT INTO unidade_produto (nome_unidade, abreviatura, status) VALUES ($1, $2, $3);`

const UPDATE_UNIT_MEASUREMENT = `UPDATE unidade_produto 
												SET nome_unidade = ($2), abreviatura = ($3), status = ($4) 
												WHERE id = ($1);`

const DELETE_UNIT_MEASUREMENT = `DELETE FROM unidade_produto WHERE id = ($1);`


module.exports = {
	SELECT_UNIT_MEASUREMENT,
	SELECT_UNIT_MEASUREMENT_BY_ID,
	SELECT_UNIT_MEASUREMENT_BY_NAME,
	INSERT_NEW_UNIT_MEASUREMENT,
	UPDATE_UNIT_MEASUREMENT,
	DELETE_UNIT_MEASUREMENT
}
