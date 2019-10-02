/* Tabela Pais */
const SELECT_STATES = `SELECT estado.id, estado.nome, estado.uf, estado.ibge, pais.id as pais_id, 												pais.nome_pt as pais_nome
											FROM estado
											INNER JOIN pais ON estado.pais=pais.id;`

const SELECT_STATE_BY_ID = `SELECT estado.id, estado.nome, estado.uf, estado.ibge, pais.id as pais_id, pais.nome_pt as pais_nome
														FROM estado
														INNER JOIN pais ON estado.pais=pais.id
														where estado.id = ($1);`				

const SELECT_STATE_BY_NAME = `SELECT estado.id, estado.nome, estado.uf, estado.ibge, pais.id as pais_id, pais.nome_pt as pais_nome
														FROM estado
														INNER JOIN pais ON estado.pais=pais.id
														where estado.nome like ($1);`											

const INSERT_NEW_STATE = `INSERT INTO estado (nome, uf, ibge, pais) VALUES ($1, $2, $3, $4)`

const UPDATE_STATE = `UPDATE estado 
												SET nome = ($2), uf = ($3), ibge = ($4), pais = ($5) 
												WHERE id = ($1);`

const DELETE_STATE = `DELETE FROM estado WHERE id = ($1);`

module.exports = {
	SELECT_STATES,
	SELECT_STATE_BY_ID,
	SELECT_STATE_BY_NAME,
	INSERT_NEW_STATE,
	UPDATE_STATE,
	DELETE_STATE
}