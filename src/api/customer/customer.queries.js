/* Tabela Pais */
const SELECT_CUSTOMERS = `SELECT cliente.id, cliente.nome, cliente.sobrenome, cliente.data_nascimento, cliente.sexo, cliente.status, 
cliente.docs, cliente.email, cliente.telefone, cliente.celular, cliente.preferencias, 
endereco.id as id_endereco, endereco.cep, endereco.rua, endereco.numero, endereco.bairro, endereco.complemento, endereco.pais as pais, endereco.estado as estado, endereco.cidade as cidade
FROM cliente
INNER JOIN endereco ON cliente.id_endereco=endereco.id;`
							

const SELECT_CUSTOMER_BY_ID = `SELECT cliente.id, cliente.nome, cliente.sobrenome, cliente.data_nascimento,cliente.sexo, cliente.status, cliente.docs, cliente.email, cliente.telefone, cliente.celular, cliente.preferencias, 
endereco.id as id_endereco, endereco.cep, endereco.rua, endereco.numero, endereco.bairro, endereco.complemento, endereco.pais as pais, endereco.estado as estado, endereco.cidade as cidade
FROM cliente
INNER JOIN endereco ON cliente.id_endereco=endereco.id
WHERE cliente.id = ($1);`			

const SELECT_CUSTOMER_BY_NAME = `SELECT cliente.id, cliente.nome, cliente.sobrenome, cliente.data_nascimento,cliente.sexo, cliente.status, cliente.docs, cliente.email, cliente.telefone, cliente.celular, cliente.preferencias, 
endereco.id as id_endereco, endereco.cep, endereco.rua, endereco.numero, endereco.bairro, endereco.complemento, endereco.pais as pais, endereco.estado as estado, endereco.cidade as cidade
FROM cliente
INNER JOIN endereco ON cliente.id_endereco=endereco.id
WHERE cliente.nome like ($1);`

const SELECT_CUSTOMER_BY_LAST_NAME = `SELECT cliente.id, cliente.nome, cliente.sobrenome, cliente.data_nascimento,cliente.sexo, cliente.status, cliente.docs, cliente.email, cliente.telefone, cliente.celular, cliente.preferencias, 
endereco.id as id_endereco, endereco.cep, endereco.rua, endereco.numero, endereco.bairro, endereco.complemento, endereco.pais as pais, endereco.estado as estado, endereco.cidade as cidade
FROM cliente
INNER JOIN endereco ON cliente.id_endereco=endereco.id
WHERE cliente.sobrenome like ($1);`											

const SELECT_CUSTOMER_BY_PHONE = `SELECT cliente.id, cliente.nome, cliente.sobrenome, cliente.data_nascimento,cliente.sexo, cliente.status, cliente.docs, cliente.email, cliente.telefone, cliente.celular, cliente.preferencias, 
endereco.id as id_endereco, endereco.cep, endereco.rua, endereco.numero, endereco.bairro, endereco.complemento, endereco.pais as pais, endereco.estado as estado, endereco.cidade as cidade
FROM cliente
INNER JOIN endereco ON cliente.id_endereco=endereco.id
WHERE cliente.telefone like ($1);`											

const SELECT_CUSTOMER_BY_CELLPHONE = `SELECT cliente.id, cliente.nome, cliente.sobrenome, cliente.data_nascimento,cliente.sexo, cliente.status, cliente.docs, cliente.email, cliente.telefone, cliente.celular, cliente.preferencias, 
endereco.id as id_endereco, endereco.cep, endereco.rua, endereco.numero, endereco.bairro, endereco.complemento, endereco.pais as pais, endereco.estado as estado, endereco.cidade as cidade
FROM cliente
INNER JOIN endereco ON cliente.id_endereco=endereco.id
WHERE cliente.celular like ($1);`											

const INSERT_NEW_CUSTOMER = `INSERT INTO cliente (nome, sobrenome, data_nascimento, sexo, status, docs, email, telefone, celular, preferencias, id_endereco) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`	

const UPDATE_CUSTOMER = `UPDATE cliente 
												SET nome = ($2), sobrenome = ($3), data_nascimento = ($4), sexo = ($5), status = ($6), docs = ($7), email = ($8), telefone = ($9), celular = ($10), preferencias = ($11), id_endereco = ($12)
												WHERE id = ($1);`

const DELETE_CUSTOMER = `DELETE FROM cliente WHERE id = ($1);`

module.exports = {
	SELECT_CUSTOMERS,
	SELECT_CUSTOMER_BY_ID,
	SELECT_CUSTOMER_BY_NAME,
	SELECT_CUSTOMER_BY_LAST_NAME,
	SELECT_CUSTOMER_BY_PHONE,
	SELECT_CUSTOMER_BY_CELLPHONE,
	INSERT_NEW_CUSTOMER,
	UPDATE_CUSTOMER,
	DELETE_CUSTOMER
}