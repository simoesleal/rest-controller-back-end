const SELECT_INSTALLMENTS = `select parcela.id, parcela.codigo, numero_parcela, parcela.status, valor_parcela, data_emissao, data_vencimento, data_apropriacao, parcela.descricao, 
	   id_contas_pagar, qtd_parcela, valor_total
from parcelas_a_pagar as parcela
inner join contas_a_pagar on parcela.id_contas_pagar=contas_a_pagar.id
order by parcela.id asc, numero_parcela asc;`

const SELECT_INSTALLMENTS_BY_ACCOUNT_ID = `select parcela.id, parcela.codigo, numero_parcela, parcela.status, valor_parcela, data_emissao, data_vencimento, data_apropriacao, parcela.descricao, 
	   id_contas_pagar, qtd_parcela, valor_total
from parcelas_a_pagar as parcela
inner join contas_a_pagar on parcela.id_contas_pagar=contas_a_pagar.id
where contas_a_pagar.id = ($1)
order by parcela.id asc, numero_parcela asc;`

const SELECT_INSTALLMENTS_BY_IDENTIFIER = `select parcela.id, parcela.codigo, numero_parcela, parcela.status, valor_parcela, data_emissao, data_vencimento, data_apropriacao, parcela.descricao, 
	   id_contas_pagar, qtd_parcela, valor_total
from parcelas_a_pagar as parcela
inner join contas_a_pagar on parcela.id_contas_pagar=contas_a_pagar.id
where parcela.codigo like ($1)
order by parcela.id asc, numero_parcela asc;`

const UPDATE_INSTALLMENT_BY_ID = `UPDATE parcelas_a_pagar
SET data_emissao = ($2), data_vencimento = ($3), data_apropriacao = ($4), descricao = ($5)
WHERE id = ($1);`

const SET_INSTALLMENT_PAID_BY_ID = `UPDATE parcelas_a_pagar SET status = 'PAGA' WHERE id = ($1);`

const SET_INSTALLMENT_CANCELED_BY_ID = `UPDATE parcelas_a_pagar SET status = 'CANCELADA' WHERE id = ($1);`

module.exports = {
	SELECT_INSTALLMENTS_BY_ACCOUNT_ID,
	SELECT_INSTALLMENTS,
	SELECT_INSTALLMENTS_BY_IDENTIFIER,
	UPDATE_INSTALLMENT_BY_ID,
	SET_INSTALLMENT_PAID_BY_ID,
	SET_INSTALLMENT_CANCELED_BY_ID
}