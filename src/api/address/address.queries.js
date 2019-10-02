
const SELECT_ADDRESS_BY_ID = `SELECT endereco.id, endereco.cep, endereco.rua, endereco.numero, 	endereco.bairro, endereco.complemento, pais.id, pais.nome_pt as nome_pais, estado.id, estado.nome as nome_estado, cidade.id, cidade.nome_cidade as nome_cidade
														FROM endereco
														INNER JOIN pais ON endereco.pais=pais.id
INNER JOIN estado ON endereco.estado=estado.id
INNER JOIN cidade ON endereco.cidade=cidade.id
														WHERE endereco.id = $1;`		

const INSERT_NEW_ADDRESS = `INSERT INTO endereco (cep, rua, numero, bairro, complemento, pais, estado, cidade) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id;`

const UPDATE_ADDRESS = `UPDATE endereco 
												SET cep = ($2), rua = ($3), numero = ($4), bairro = ($5), complemento = ($6), pais = ($7), estado = ($8), cidade = ($9)
												WHERE id = ($1);`

module.exports = {
	SELECT_ADDRESS_BY_ID,
	INSERT_NEW_ADDRESS,
	UPDATE_ADDRESS
}