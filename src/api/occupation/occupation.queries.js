/* Tabela Pais */
const SELECT_OCCUPATIONS = `SELECT id, nome, detalhes FROM funcao where status is not false;`
const SELECT_OCCUPATION_BY_ID = `SELECT id, nome, detalhes FROM funcao WHERE id = ($1) and status is not false;`
const SELECT_OCCUPATION_BY_NAME = `SELECT id, nome, detalhes FROM funcao WHERE nome like $1 and status is not false;`
const INSERT_NEW_OCCUPATION = `INSERT INTO funcao (nome, detalhes) VALUES ($1, $2)`
const UPDATE_OCCUPATION = `UPDATE funcao SET nome = ($2), detalhes = ($3)	WHERE id = ($1);`
const DELETE_OCCUPATION = `DELETE FROM funcao WHERE id = ($1);`


module.exports = {
	SELECT_OCCUPATIONS,
	SELECT_OCCUPATION_BY_ID,
	SELECT_OCCUPATION_BY_NAME,
	INSERT_NEW_OCCUPATION,
	UPDATE_OCCUPATION,
	DELETE_OCCUPATION
}