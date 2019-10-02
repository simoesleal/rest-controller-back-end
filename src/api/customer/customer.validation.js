const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewCustomer (name, id_endereco) {
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome do Cliente e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!await validateParam(id_endereco)) throw new DefaultError(`Não identificamos o Endereço do Cliente e este é um campo obrigatório. Por favor, tente novamente.`, 'id_endereco nulo ou vazio')
}

async function validateUpdateCustomer(id, name, id_endereco) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome do Cliente e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!await validateParam(id_endereco)) throw new DefaultError(`Não identificamos o Endereço do Cliente e este é um campo obrigatório. Por favor, tente novamente.`, 'password nulo ou vazio')
}

module.exports = {
	validateNewCustomer,
  validateUpdateCustomer
}