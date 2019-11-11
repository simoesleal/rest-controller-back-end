const SELECT_OCCUPIED_TABLES = `SELECT 
	 	 conta_cliente.id, conta_cliente.valor_total, conta_cliente.status, 
	   mesa.id as id_mesa, mesa.numero as numero_mesa, mesa.status,
	   cliente.id as id_cliente, cliente.nome as nome_cliente
FROM conta_cliente
INNER JOIN mesa ON conta_cliente.id_mesa=mesa.id
INNER JOIN cliente ON conta_cliente.id_cliente=cliente.id
WHERE  mesa.status = 'OCUPADA' AND conta_cliente.status  = 'ABERTA'
ORDER by numero_mesa asc;`

const SELECT_ORDERS_FROM_CUSTOMER = `select pp.id, pp.observacao, pp.quantidade,
       produto.id as id_prod, produto.nome_produto as nome_prod, produto.preco_venda as pv_prod,
       pedidos.id as id_pedido, 
       conta_cliente.id as id_conta_cliente, 
       mesa.id as id_mesa, mesa.numero as numero_mesa
from produto_pedido as pp
inner join produto on pp.id_produto=produto.id
inner join pedidos on pp.id_pedido=pedidos.id
inner join conta_cliente on pedidos.id_conta_cliente=conta_cliente.id
inner join mesa on conta_cliente.id_mesa=mesa.id
where mesa.id = ($1) and mesa.numero = ($2) and mesa.status = 'OCUPADA' AND conta_cliente.status  = 'ABERTA';`

module.exports = {
	SELECT_OCCUPIED_TABLES,
	SELECT_ORDERS_FROM_CUSTOMER
}