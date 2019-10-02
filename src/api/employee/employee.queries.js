/* Tabela Pais */
const SELECT_EMPLOYEES = `SELECT funcionario.id, funcionario.nome, funcionario.sobrenome, funcionario.data_nascimento, funcionario.login, funcionario.status, 
funcionario.cpf, funcionario.email, funcionario.telefone, funcionario.celular, 
endereco.id as id_endereco, endereco.cep, endereco.rua, endereco.numero, endereco.bairro, endereco.complemento,
funcao.id as id_funcao, funcao.nome AS nome_funcao
											FROM funcionario
											INNER JOIN endereco ON funcionario.id_endereco=endereco.id
											INNER JOIN funcao ON funcionario.id_funcao=funcao.id;`
									

const SELECT_EMPLOYEE_BY_ID = `SELECT funcionario.id, funcionario.nome, funcionario.sobrenome, funcionario.data_nascimento, funcionario.login, funcionario.status, 
funcionario.cpf, funcionario.email, funcionario.telefone, funcionario.celular, 
endereco.id as id_endereco, endereco.cep, endereco.rua, endereco.numero, endereco.bairro, endereco.complemento,
funcao.id as id_funcao, funcao.nome AS nome_funcao
											FROM funcionario
											INNER JOIN endereco ON funcionario.id_endereco=endereco.id
											INNER JOIN funcao ON funcionario.id_funcao=funcao.id
											WHERE funcionario.id = ($1);`				

const SELECT_EMPLOYEE_BY_NAME = `SELECT funcionario.id, funcionario.nome, funcionario.sobrenome, funcionario.data_nascimento, funcionario.login, funcionario.status, 
funcionario.cpf, funcionario.email, funcionario.telefone, funcionario.celular, 
endereco.id as id_endereco, endereco.cep, endereco.rua, endereco.numero, endereco.bairro, endereco.complemento,
funcao.id as id_funcao, funcao.nome AS nome_funcao
											FROM funcionario
											INNER JOIN endereco ON funcionario.id_endereco=endereco.id
											INNER JOIN funcao ON funcionario.id_funcao=funcao.id
											WHERE funcionario.nome like ($1);`											

const INSERT_NEW_EMPLOYEE = `INSERT INTO funcionario (nome, sobrenome, data_nascimento, login, senha, status, cpf, email, telefone, celular, id_endereco, id_funcao) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`

const UPDATE_EMPLOYEE = `UPDATE funcionario 
												SET nome = ($2), sobrenome = ($3), data_nascimento = ($4), login = ($5), status = ($6), cpf = ($7), email = ($8), telefone = ($9), celular = ($10), id_endereco = ($11), id_funcao = ($12)
												WHERE id = ($1);`


const UPDATE_PASSWORD = `UPDATE funcionario
												SET senha = ($2)
												WHERE id = ($1);`

const DELETE_EMPLOYEE = `DELETE FROM funcionario WHERE id = ($1);`

module.exports = {
	SELECT_EMPLOYEES,
	SELECT_EMPLOYEE_BY_ID,
	SELECT_EMPLOYEE_BY_NAME,
	INSERT_NEW_EMPLOYEE,
	UPDATE_EMPLOYEE,
	UPDATE_PASSWORD,
	DELETE_EMPLOYEE
}