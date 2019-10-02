const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewState (name, uf, ibge, pais) {
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome do Estado e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!await validateParam(uf)) throw new DefaultError(`Não identificamos a UF do estado e este é um campo obrigatório. Por favor, tente novamente.`, 'uf nulo ou vazio')
  if (!await validateParam(ibge)) throw new DefaultError(`Não identificamos o código do IBGE do estado e este é um campo obrigatório. Por favor, tente novamente.`, 'ibge nulo ou vazio')
  if (!await validateParam(pais)) throw new DefaultError(`Não identificamos o País do Estado e este é um campo obrigatório. Por favor, tente novamente.`, 'pais nulo ou vazio')
}

async function validateUpdateState (id, name, uf, ibge, pais) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código do Estado e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome do Estado e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!await validateParam(uf)) throw new DefaultError(`Não identificamos a UF do estado e este é um campo obrigatório. Por favor, tente novamente.`, 'uf nulo ou vazio')
  if (!await validateParam(ibge)) throw new DefaultError(`Não identificamos o código do IBGE do estado e este é um campo obrigatório. Por favor, tente novamente.`, 'ibge nulo ou vazio')
  if (!await validateParam(pais)) throw new DefaultError(`Não identificamos o País do Estado e este é um campo obrigatório. Por favor, tente novamente.`, 'pais nulo ou vazio')
}

module.exports = {
	validateNewState,
  validateUpdateState
}