/* Tabela Pais */
const SELECT_SUPPLIERS = `SELECT fornecedor.id, fornecedor.nome_fantasia, fornecedor.razao_social, fornecedor.cpf_cnpj, fornecedor.insc_municipal, 
		fornecedor.insc_estadual, fornecedor.status, fornecedor.email, fornecedor.telefone, fornecedor.celular, fornecedor.conta_corrente, 
endereco.id as id_endereco, endereco.cep, endereco.rua, endereco.numero, endereco.bairro, endereco.complemento, endereco.pais as pais, endereco.estado as estado, endereco.cidade as cidade
FROM fornecedor
INNER JOIN endereco ON fornecedor.id_endereco=endereco.id;`										

const SELECT_SUPPLIER_BY_ID = `SELECT fornecedor.id, fornecedor.nome_fantasia, fornecedor.razao_social, fornecedor.cpf_cnpj, fornecedor.insc_municipal, 
		fornecedor.insc_estadual, fornecedor.status, fornecedor.email, fornecedor.telefone, fornecedor.celular, fornecedor.conta_corrente, 
endereco.id as id_endereco, endereco.cep, endereco.rua, endereco.numero, endereco.bairro, endereco.complemento, endereco.pais as pais, endereco.estado as estado, endereco.cidade as cidade
FROM fornecedor
INNER JOIN endereco ON fornecedor.id_endereco=endereco.id 
WHERE fornecedor.id = ($1);`			

const SELECT_SUPPLIER_BY_RAZAO_SOCIAL = `SELECT fornecedor.id, fornecedor.nome_fantasia, fornecedor.razao_social, fornecedor.cpf_cnpj, fornecedor.insc_municipal, 
		fornecedor.insc_estadual, fornecedor.status, fornecedor.email, fornecedor.telefone, fornecedor.celular, fornecedor.conta_corrente, 
endereco.id as id_endereco, endereco.cep, endereco.rua, endereco.numero, endereco.bairro, endereco.complemento, endereco.pais as pais, endereco.estado as estado, endereco.cidade as cidade
FROM fornecedor
INNER JOIN endereco ON fornecedor.id_endereco=endereco.id
WHERE fornecedor.razao_social like ($1);`

const SELECT_SUPPLIER_BY_NOME_FANTASIA = `SELECT fornecedor.id, fornecedor.nome_fantasia, fornecedor.razao_social, fornecedor.cpf_cnpj, fornecedor.insc_municipal, 
		fornecedor.insc_estadual, fornecedor.status, fornecedor.email, fornecedor.telefone, fornecedor.celular, fornecedor.conta_corrente, 
endereco.id as id_endereco, endereco.cep, endereco.rua, endereco.numero, endereco.bairro, endereco.complemento, endereco.pais as pais, endereco.estado as estado, endereco.cidade as cidade
FROM fornecedor
INNER JOIN endereco ON fornecedor.id_endereco=endereco.id
WHERE fornecedor.nome_fantasia like ($1);`											

const INSERT_NEW_SUPPLIER = `INSERT INTO fornecedor (nome_fantasia, razao_social, cpf_cnpj, insc_municipal, insc_estadual, status, email, telefone, celular, conta_corrente, id_endereco) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`

const UPDATE_SUPPLIER = `UPDATE fornecedor 
												SET nome_fantasia = ($2), razao_social = ($3), cpf_cnpj = ($4), insc_municipal = ($5), insc_estadual = ($6), status = ($7), email = ($8), telefone = ($9), celular = ($10), conta_corrente = ($11) ,id_endereco = ($12)
												WHERE id = ($1);`

const DELETE_SUPPLIER = `DELETE FROM fornecedor WHERE id = ($1);`

module.exports = {
	SELECT_SUPPLIERS,
	SELECT_SUPPLIER_BY_ID,
	SELECT_SUPPLIER_BY_RAZAO_SOCIAL,
	SELECT_SUPPLIER_BY_NOME_FANTASIA,
	INSERT_NEW_SUPPLIER,
	UPDATE_SUPPLIER,
	DELETE_SUPPLIER
}