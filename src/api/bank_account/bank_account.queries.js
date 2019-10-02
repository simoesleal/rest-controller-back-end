/* Tabela Pais */
const SELECT_BANK_ACCOUNTS = `SELECT conta_bancaria.id, conta_bancaria.agencia, conta_bancaria.conta_corrente, id_banco, banco.banco as nome_banco
FROM conta_bancaria
INNER JOIN banco ON conta_bancaria.id_banco=banco.id;`

const SELECT_BANK_ACCOUNT_BY_ID = `select conta_bancaria.id, conta_bancaria.agencia, conta_bancaria.conta_corrente, id_banco, banco.banco as nome_banco
FROM conta_bancaria
INNER JOIN banco ON conta_bancaria.id_banco=banco.id
where conta_bancaria.id = ($1);`				

const SELECT_BANK_ACCOUNT_BY_ACCOUNT = `select conta_bancaria.id, conta_bancaria.agencia, conta_bancaria.conta_corrente, id_banco, banco.banco as nome_banco
FROM conta_bancaria
INNER JOIN banco ON conta_bancaria.id_banco=banco.id
where conta_bancaria.conta_corrente = ($1);`											

const INSERT_NEW_BANK_ACCOUNT = `INSERT INTO conta_bancaria (id_banco, agencia, conta_corrente) VALUES ($1, $2, $3)`

const UPDATE_BANK_ACCOUNT = `UPDATE conta_bancaria 
												SET conta_corrente = ($2), agencia = ($3), id_banco = ($4)
												WHERE id = ($1);`

const DELETE_BANK_ACCOUNT = `DELETE FROM conta_bancaria WHERE id = ($1);`

module.exports = {
	SELECT_BANK_ACCOUNTS,
	SELECT_BANK_ACCOUNT_BY_ID,
	SELECT_BANK_ACCOUNT_BY_ACCOUNT,
	INSERT_NEW_BANK_ACCOUNT,
	UPDATE_BANK_ACCOUNT,
	DELETE_BANK_ACCOUNT
}