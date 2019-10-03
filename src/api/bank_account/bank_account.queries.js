/* Tabela Pais */
const SELECT_BANK_ACCOUNTS = `SELECT conta_bancaria.id, conta_bancaria.agencia, conta_bancaria.digito_agencia, 
		 conta_bancaria.numero_conta, conta_bancaria.digito_conta, id_banco, banco.banco as nome_banco
FROM conta_bancaria
INNER JOIN banco ON conta_bancaria.id_banco=banco.id;`

const SELECT_BANK_ACCOUNT_BY_ID = `SELECT conta_bancaria.id, conta_bancaria.agencia, conta_bancaria.digito_agencia, 
		 conta_bancaria.numero_conta, conta_bancaria.digito_conta, id_banco, banco.banco as nome_banco
FROM conta_bancaria
INNER JOIN banco ON conta_bancaria.id_banco=banco.id
where conta_bancaria.id = ($1);`				

const SELECT_BANK_ACCOUNT_BY_ACCOUNT = `SELECT conta_bancaria.id, conta_bancaria.agencia, conta_bancaria.digito_agencia, 
		 conta_bancaria.numero_conta, conta_bancaria.digito_conta, id_banco, banco.banco as nome_banco
FROM conta_bancaria
INNER JOIN banco ON conta_bancaria.id_banco=banco.id
where conta_bancaria.conta_corrente = ($1);`											

const INSERT_NEW_BANK_ACCOUNT = `INSERT INTO conta_bancaria (id_banco, agencia, digito_agencia, numero_conta, digito_conta) VALUES ($1, $2, $3, $4, $5)`

const UPDATE_BANK_ACCOUNT = `UPDATE conta_bancaria 
												SET id_banco = ($2), agencia = ($3), digito_agencia = ($4), numero_conta = ($5), digito_conta = ($6)
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