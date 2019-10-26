/* Tabela Pais */
const SELECT_CITIES = `SELECT cidade.id, cidade.nome_cidade, estado.id as id_estado, estado.nome as nome_estado, estado.uf
											FROM cidade
											INNER JOIN estado ON cidade.estado=estado.id;`

const SELECT_CITY_BY_ID = `SELECT cidade.id, cidade.nome_cidade, estado.id as id_estado, estado.nome as nome_estado, estado.uf
														FROM cidade
														INNER JOIN estado ON cidade.estado=estado.id
														where cidade.id = ($1);`				

const SELECT_CITY_BY_NAME = `SELECT cidade.id, cidade.nome_cidade, estado.id as id_estado, estado.nome as nome_estado, estado.uf
														FROM cidade
														INNER JOIN estado ON cidade.estado=estado.id
														where cidade.nome_cidade like ($1);`		

const SELECT_CITY_BY_STATE_ID = `SELECT cidade.id, cidade.nome_cidade, estado.id as id_estado, estado.nome as nome_estado, estado.uf
											FROM cidade
											INNER JOIN estado ON cidade.estado=estado.id
											where cidade.estado = ($1);`																							

const INSERT_NEW_CITY = `INSERT INTO cidade (nome_cidade, estado) VALUES ($1, $2)`

const UPDATE_CITY = `UPDATE cidade 
												SET nome_cidade = ($2), estado = ($3)
												WHERE id = ($1);`

const DELETE_CITY = `DELETE FROM cidade WHERE id = ($1);`

module.exports = {
	SELECT_CITIES,
	SELECT_CITY_BY_ID,
	SELECT_CITY_BY_NAME,
	SELECT_CITY_BY_STATE_ID,
	INSERT_NEW_CITY,
	UPDATE_CITY,
	DELETE_CITY
}