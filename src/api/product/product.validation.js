const DefaultError = require('../../handlers/default-error.handler')

async function validateNewProduct (name, purchase_price, sale_price, cost_price, current_quantity, max_quantity,  min_quantity, id_grupo_produto, id_unidade) {
  if (!name) throw new DefaultError(`Não identificamos o nome do Produto e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (purchase_price < 0) throw new DefaultError(`O preço de compra do produto não pode ser menor que R$ 0.00. Por favor, tente novamente.`, 'purchase_price nulo ou vazio')
  if (sale_price < 0) throw new DefaultError(`O preço de venda do produto não pode ser menor que R$ 0.00. Por favor, tente novamente.`, 'purchase_price nulo ou vazio')
  if (cost_price < 0 ) throw new DefaultError(`O preço de custo do produto não pode ser menor que R$ 0.00. Por favor, tente novamente.`, 'purchase_price nulo ou vazio')  
  if (!current_quantity && current_quantity!==0) { 
    throw new DefaultError(`Não identificamos a quantidade atual do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'current_quantity nulo ou vazio') 
  } else {
    if (current_quantity < 0) throw new DefaultError(`A quantidade atual do produto não pode ser menor que 0. Por favor, tente novamente.`, 'purchase_price nulo ou vazio')
  }
  if (!max_quantity && max_quantity!==0) { 
    throw new DefaultError(`Não identificamos a quantidade máxima do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'max_quantity nulo ou vazio') 
  } else {
    if (max_quantity < 0) throw new DefaultError(`A quantidade máxima do produto não pode ser menor que 0. Por favor, tente novamente.`, 'purchase_price nulo ou vazio')
  }
  if (!min_quantity && min_quantity!==0) { 
    throw new DefaultError(`Não identificamos a quantidade mínima do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'min_quantity nulo ou vazio') 
  } else {
    if (min_quantity < 0) throw new DefaultError(`A quantidade atual do produto não pode ser menor que 0. Por favor, tente novamente.`, 'purchase_price nulo ou vazio')
  }
  if (!id_grupo_produto) throw new DefaultError(`Não identificamos o grupo do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'id_grupo_produto nulo ou vazio')
  if (!id_unidade) throw new DefaultError(`Não identificamos a unidade do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'id_unidade nulo ou vazio')
}

async function validateUpdateProduct (id, name, purchase_price, sale_price, cost_price, current_quantity, max_quantity,  min_quantity, id_grupo_produto, id_unidade) {
  if (!id)throw new DefaultError(`Não identificamos o código do Produto e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!name) throw new DefaultError(`Não identificamos o nome do Produto e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (purchase_price < 0) throw new DefaultError(`O preço de compra do produto não pode ser menor que R$ 0.00. Por favor, tente novamente.`, 'purchase_price nulo ou vazio')
  if (sale_price < 0) throw new DefaultError(`O preço de venda do produto não pode ser menor que R$ 0.00. Por favor, tente novamente.`, 'purchase_price nulo ou vazio')
  if (cost_price < 0 ) throw new DefaultError(`O preço de custo do produto não pode ser menor que R$ 0.00. Por favor, tente novamente.`, 'purchase_price nulo ou vazio')  
  if (!current_quantity && current_quantity!==0) { 
    throw new DefaultError(`Não identificamos a quantidade atual do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'current_quantity nulo ou vazio') 
  } else {
    if (current_quantity < 0) throw new DefaultError(`A quantidade atual do produto não pode ser menor que 0. Por favor, tente novamente.`, 'purchase_price nulo ou vazio')
  }
  if (!max_quantity && max_quantity!==0) { 
    throw new DefaultError(`Não identificamos a quantidade máxima do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'max_quantity nulo ou vazio') 
  } else {
    if (max_quantity < 0) throw new DefaultError(`A quantidade máxima do produto não pode ser menor que 0. Por favor, tente novamente.`, 'purchase_price nulo ou vazio')
  }
  if (!min_quantity && min_quantity!==0) { 
    throw new DefaultError(`Não identificamos a quantidade mínima do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'min_quantity nulo ou vazio') 
  } else {
    if (min_quantity < 0) throw new DefaultError(`A quantidade atual do produto não pode ser menor que 0. Por favor, tente novamente.`, 'purchase_price nulo ou vazio')
  }
  if (!id_grupo_produto) throw new DefaultError(`Não identificamos o grupo do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'id_grupo_produto nulo ou vazio')
  if (!id_unidade) throw new DefaultError(`Não identificamos a unidade do produto e este é um campo obrigatório. Por favor, tente novamente.`, 'id_unidade nulo ou vazio')
}

module.exports = {
	validateNewProduct,
  validateUpdateProduct
}