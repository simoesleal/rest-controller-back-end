const INSERT_NEW_WAITER_REQUEST = `select f_pedido_garcom($1, $2, $3, $4);`

const DELETE_WAITER_REQUERET = `DELETE FROM produto_pedido WHERE id = ($1);`

const REVERT_PRODUCT_CURRENT_QUANTITY = `update produto
set qtd_atual = qtd_atual + ($2)
where id = ($1);`

module.exports = {
	INSERT_NEW_WAITER_REQUEST,
	DELETE_WAITER_REQUERET,
	REVERT_PRODUCT_CURRENT_QUANTITY
}