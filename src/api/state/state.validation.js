const DefaultError = require('../../handlers/default-error.handler')

async function validateNewState (name, uf,  pais) {
  if (!name) throw new DefaultError(`Não identificamos o nome do Estado e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!uf) throw new DefaultError(`Não identificamos a UF do estado e este é um campo obrigatório. Por favor, tente novamente.`, 'uf nulo ou vazio')
  if (uf.length !== 2) throw new DefaultError(`O campo UF, deve ser limitado há duas letras.`, 'uf tamanho inválido')
  if (!pais) throw new DefaultError(`Não identificamos o País do Estado e este é um campo obrigatório. Por favor, tente novamente.`, 'pais nulo ou vazio')
}

async function validateUpdateState (id, name, uf, pais) {
  if (!id) throw new DefaultError(`Não identificamos o código do Estado e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!name) throw new DefaultError(`Não identificamos o nome do Estado e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!uf) throw new DefaultError(`Não identificamos a UF do estado e este é um campo obrigatório. Por favor, tente novamente.`, 'uf nulo ou vazio')
  if (uf.length !== 2) throw new DefaultError(`O campo UF, deve ser limitado há duas letras.`, 'uf tamanho inválido')
  if (!pais) throw new DefaultError(`Não identificamos o País do Estado e este é um campo obrigatório. Por favor, tente novamente.`, 'pais nulo ou vazio')
}

module.exports = {
	validateNewState,
  validateUpdateState
}