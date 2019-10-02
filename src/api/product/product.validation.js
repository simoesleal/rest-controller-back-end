const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewProduct (name, purchase_price, sale_price, current_quantity, id_grupo_produto, id_unidade) {
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome do Produto e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!await validateParam(purchase_price)) throw new DefaultError(`Não identificamos o preço de compra do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'purchase_price nulo ou vazio')
  if (!await validateParam(sale_price)) throw new DefaultError(`Não identificamos o preço de venda do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'sale_price nulo ou vazio')
  if (!await validateParam(current_quantity)) throw new DefaultError(`Não identificamos a quantidade atual do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'current_quantity nulo ou vazio')
  if (!await validateParam(id_grupo_produto)) throw new DefaultError(`Não identificamos o grupo do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'id_grupo_produto nulo ou vazio')
  if (!await validateParam(id_unidade)) throw new DefaultError(`Não identificamos a unidade do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'id_unidade nulo ou vazio')
}

async function validateUpdateProduct (id, name, purchase_price, sale_price, current_quantity, id_grupo_produto, id_unidade) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código do Produt e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome do Produto e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!await validateParam(purchase_price)) throw new DefaultError(`Não identificamos o preço de compra do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'purchase_price nulo ou vazio')
  if (!await validateParam(sale_price)) throw new DefaultError(`Não identificamos o preço de venda do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'sale_price nulo ou vazio')
  if (!await validateParam(current_quantity)) throw new DefaultError(`Não identificamos a quantidade atual do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'current_quantity nulo ou vazio')
  if (!await validateParam(id_grupo_produto)) throw new DefaultError(`Não identificamos o grupo do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'id_grupo_produto nulo ou vazio')
  if (!await validateParam(id_unidade)) throw new DefaultError(`Não identificamos a unidade do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'id_unidade nulo ou vazio')
}

module.exports = {
	validateNewProduct,
  validateUpdateProduct
}