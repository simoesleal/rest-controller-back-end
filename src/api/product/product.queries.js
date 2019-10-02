/* Tabela Pais */
const SELECT_PRODUCTS = `SELECT produto.id, produto.nome_produto, produto.descricao_produto, produto.preco_compra, produto.preco_venda, produto.preco_custo,
	   produto.qtd_atual, produto.qtd_max, produto.qtd_min, produto.status, grupo_produto.id as id_gupo_produto, grupo_produto.nome_grupo,
	   unidade.id as id_unidade, unidade.nome_unidade
FROM produto
INNER JOIN grupo_produto ON produto.id_grupo_produto=grupo_produto.id
INNER JOIN unidade ON produto.id_unidade=unidade.id;`

const SELECT_PRODUCT_BY_ID = `SELECT produto.id, produto.nome_produto, produto.descricao_produto, produto.preco_compra, produto.preco_venda, produto.preco_custo,
	   produto.qtd_atual, produto.qtd_max, produto.qtd_min, produto.status, grupo_produto.id as id_gupo_produto, grupo_produto.nome_grupo,
	   unidade.id as id_unidade, unidade.nome_unidade
FROM produto
INNER JOIN grupo_produto ON produto.id_grupo_produto=grupo_produto.id
INNER JOIN unidade ON produto.id_unidade=unidade.id
where produto.id = ($1);`				

const SELECT_PRODUCT_BY_NAME = `SELECT produto.id, produto.nome_produto, produto.descricao_produto, produto.preco_compra, produto.preco_venda, produto.preco_custo,
	   produto.qtd_atual, produto.qtd_max, produto.qtd_min, produto.status, grupo_produto.id as id_gupo_produto, grupo_produto.nome_grupo,
	   unidade.id as id_unidade, unidade.nome_unidade
FROM produto
INNER JOIN grupo_produto ON produto.id_grupo_produto=grupo_produto.id
INNER JOIN unidade ON produto.id_unidade=unidade.id
where produto.nome_produto like ($1);`											

const INSERT_NEW_PRODUCT = `INSERT INTO produto (nome_produto, descricao_produto, preco_compra, preco_venda, preco_custo, qtd_atual, qtd_max, qtd_min, status, id_grupo_produto, id_unidade) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`

const UPDATE_PRODUCT = `UPDATE produto 
												SET nome_produto = ($2), descricao_produto = ($3), preco_compra = ($4), preco_venda = ($5), preco_custo = ($6), qtd_atual = ($7), qtd_max = ($8), qtd_min = ($9), status = ($10),  id_grupo_produto = ($11), id_unidade = ($12)
												WHERE id = ($1);`

const DELETE_PRODUCT = `DELETE FROM produto WHERE id = ($1);`

module.exports = {
	SELECT_PRODUCTS,
	SELECT_PRODUCT_BY_ID,
	SELECT_PRODUCT_BY_NAME,
	INSERT_NEW_PRODUCT,
	UPDATE_PRODUCT,
	DELETE_PRODUCT
}