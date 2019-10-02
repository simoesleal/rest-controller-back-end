/* Tabela Pais */
const SELECT_COUNTRIES = `SELECT id, nome_pt, sigla FROM pais;`
const SELECT_COUNTRY_BY_ID = `SELECT id, nome_pt, sigla FROM pais WHERE id = ($1);`
const SELECT_COUNTRY_BY_NAME = `SELECT id, nome_pt, sigla FROM pais WHERE nome_pt like $1;`
const INSERT_NEW_COUNTRY = `INSERT INTO pais (nome, nome_pt, sigla) VALUES ($1, $2, $3)`
const UPDATE_COUNTRY = `UPDATE pais 
												SET nome = ($2), nome_pt = ($3), sigla = ($4) 
												WHERE id = ($1);`
const DELETE_COUNTRY = `DELETE FROM pais WHERE id = ($1);`


module.exports = {
	SELECT_COUNTRIES,
	SELECT_COUNTRY_BY_ID,
	SELECT_COUNTRY_BY_NAME,
	INSERT_NEW_COUNTRY,
	UPDATE_COUNTRY,
	DELETE_COUNTRY
}