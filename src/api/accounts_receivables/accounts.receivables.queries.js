const CREATE_NEW_ACCOUNT_RECEIVABLES = `SELECT f_gerar_conta_receber($1, $2, $3, $4, $5, $6, $7, $8, $9)`

const SELECT_ACCOUNTS_RECEIVABLES = `select cr.id, cr.codigo, cr.qtd_parcela, cr.valor_total, cr.descricao,
	   cliente.id as id_cliente, cliente.docs as doc_cliente, cliente.nome as nome_cliente, cliente.sobrenome as sobrenome_cliente,
	   moeda.id as id_moeda, moeda.nome_moeda as moeda, moeda.simbolo as simbolo_moeda,
	   conta_bancaria.id as id_cb, conta_bancaria.conta_bancaria as conta, conta_bancaria.conta_bancaria as nome_conta_bancaria, conta_bancaria.numero_conta as numero_conta, conta_bancaria.digito_conta as digito_conta, conta_bancaria.agencia as numero_agencia, conta_bancaria.digito_agencia as digito_agencia,
	   tipo_documento.id as id_td, tipo_documento.tipo_documento
from contas_a_receber as cr
inner join cliente on cr.id_cliente=cliente.id
inner join moeda on cr.id_moeda=moeda.id
inner join conta_bancaria on cr.id_conta_bancaria=conta_bancaria.id
inner join tipo_documento on cr.id_tipo_documento=tipo_documento.id;`

const SELECT_ACCOUNTS_RECEIVABLES_BY_IDENTIFIER = `select cr.id, cr.codigo, cr.qtd_parcela, cr.valor_total, cr.descricao,
	   cliente.id as id_cliente, cliente.docs as doc_cliente, cliente.nome as nome_cliente, cliente.sobrenome as sobrenome_cliente,
	   moeda.id as id_moeda, moeda.nome_moeda as moeda, moeda.simbolo as simbolo_moeda,
	   conta_bancaria.id as id_cb, conta_bancaria.conta_bancaria as conta, conta_bancaria.conta_bancaria as nome_conta_bancaria, conta_bancaria.numero_conta as numero_conta, conta_bancaria.digito_conta as digito_conta, conta_bancaria.agencia as numero_agencia, conta_bancaria.digito_agencia as digito_agencia,
	   tipo_documento.id as id_td, tipo_documento.tipo_documento
from contas_a_receber as cr
inner join cliente on cr.id_cliente=cliente.id
inner join moeda on cr.id_moeda=moeda.id
inner join conta_bancaria on cr.id_conta_bancaria=conta_bancaria.id
inner join tipo_documento on cr.id_tipo_documento=tipo_documento.id
where cr.codigo like ($1);`

const UPDATE_ACCOUNT_RECEIVABLE = `UPDATE contas_a_receber
SET id_cliente=($2), id_moeda=($3), id_tipo_documento=($4), id_conta_bancaria=($5)
WHERE id = ($1);`

const DELETE_ACCOUNT_RECEIVABLE = `DELETE
FROM contas_a_receber  
WHERE id = ($1);`

const DELETE_ACCOUNT_INSTALLMENTS = `
DELETE 
FROM parcelas_a_receber  
WHERE id_contas_receber = ($1);`

module.exports = {
	CREATE_NEW_ACCOUNT_RECEIVABLES,	
  SELECT_ACCOUNTS_RECEIVABLES,
	SELECT_ACCOUNTS_RECEIVABLES_BY_IDENTIFIER,
	UPDATE_ACCOUNT_RECEIVABLE,
	DELETE_ACCOUNT_RECEIVABLE,
	DELETE_ACCOUNT_INSTALLMENTS,
		
}