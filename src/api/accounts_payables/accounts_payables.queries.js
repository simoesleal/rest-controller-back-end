const SELECT_ACCOUNTS_PAYABLES = `select cp.id, cp.codigo, cp.qtd_parcela, cp.valor_total, cp.descricao,
	   fornecedor.id as id_fornecedor, fornecedor.razao_social as rs_fornecedor, fornecedor.cpf_cnpj as doc_fornecedor,
	   moeda.id as id_moeda, moeda.nome_moeda as moeda, moeda.simbolo as simbolo_moeda,
	   conta_bancaria.id as id_cb, conta_bancaria.conta_bancaria as conta, conta_bancaria.conta_bancaria as nome_conta_bancaria, conta_bancaria.numero_conta as numero_conta, conta_bancaria.digito_conta as digito_conta, conta_bancaria.agencia as numero_agencia, conta_bancaria.digito_agencia as digito_agencia,
	   tipo_documento.id as id_td, tipo_documento.tipo_documento
from contas_a_pagar as cp
inner join fornecedor on cp.id_fornecedor=fornecedor.id
inner join moeda on cp.id_moeda=moeda.id
inner join conta_bancaria on cp.id_conta_bancaria=conta_bancaria.id
inner join tipo_documento on cp.id_tipo_documento=tipo_documento.id;`

const SELECT_ACCOUNT_PAYABLE_BY_ID = `select cp.id, cp.codigo, cp.qtd_parcela, cp.valor_total, cp.descricao,
	   fornecedor.id as id_fornecedor, fornecedor.razao_social as rs_fornecedor, fornecedor.cpf_cnpj as doc_fornecedor,
	   moeda.id as id_moeda, moeda.nome_moeda as moeda, moeda.simbolo as simbolo_moeda,
	   conta_bancaria.id as id_cb, conta_bancaria.conta_bancaria as conta, conta_bancaria.conta_bancaria as nome_conta_bancaria, conta_bancaria.numero_conta as numero_conta, conta_bancaria.digito_conta as digito_conta, conta_bancaria.agencia as numero_agencia, conta_bancaria.digito_agencia as digito_agencia,
	   tipo_documento.id as id_td, tipo_documento.tipo_documento
from contas_a_pagar as cp
inner join fornecedor on cp.id_fornecedor=fornecedor.id
inner join moeda on cp.id_moeda=moeda.id
inner join conta_bancaria on cp.id_conta_bancaria=conta_bancaria.id
inner join tipo_documento on cp.id_tipo_documento=tipo_documento.id
where cp.id = ($1);`

const SELECT_ACCOUNT_PAYABLE_BY_IDENTIFIER = `select cp.id, cp.codigo, cp.qtd_parcela, cp.valor_total, cp.descricao,
	   fornecedor.id as id_fornecedor, fornecedor.razao_social as rs_fornecedor, fornecedor.cpf_cnpj as doc_fornecedor,
	   moeda.id as id_moeda, moeda.nome_moeda as moeda, moeda.simbolo as simbolo_moeda,
	   conta_bancaria.id as id_cb, conta_bancaria.conta_bancaria as conta, conta_bancaria.conta_bancaria as nome_conta_bancaria, conta_bancaria.numero_conta as numero_conta, conta_bancaria.digito_conta as digito_conta, conta_bancaria.agencia as numero_agencia, conta_bancaria.digito_agencia as digito_agencia,
	   tipo_documento.id as id_td, tipo_documento.tipo_documento
from contas_a_pagar as cp
inner join fornecedor on cp.id_fornecedor=fornecedor.id
inner join moeda on cp.id_moeda=moeda.id
inner join conta_bancaria on cp.id_conta_bancaria=conta_bancaria.id
inner join tipo_documento on cp.id_tipo_documento=tipo_documento.id
where cp.codigo like ($1);`


const UPDATE_ACCOUNT_PAYABLE = `UPDATE contas_a_pagar
SET id_fornecedor=($2), id_moeda=($3), id_tipo_documento=($4), id_conta_bancaria=($5)
WHERE id = ($1);`

const DELETE_ACCOUNT_PAYABLE_AND_INSTALLMENTS = `DELETE
FROM contas_a_pagar  
WHERE id = ($1);`

const DELETE_ACCOUNT_INSTALLMENTS = `
DELETE 
FROM parcelas_a_pagar  
WHERE id_contas_pagar = ($1);`

const CREATE_NEW_ACCOUNT_PAYABLE = `SELECT f_gerar_conta_pagar($1, $2, $3, $4, $5, $6, $7, $8, $9);`

module.exports = {
	SELECT_ACCOUNTS_PAYABLES,
	SELECT_ACCOUNT_PAYABLE_BY_ID,
	SELECT_ACCOUNT_PAYABLE_BY_IDENTIFIER,
	UPDATE_ACCOUNT_PAYABLE,
	DELETE_ACCOUNT_PAYABLE_AND_INSTALLMENTS,
	CREATE_NEW_ACCOUNT_PAYABLE,
	DELETE_ACCOUNT_INSTALLMENTS
}