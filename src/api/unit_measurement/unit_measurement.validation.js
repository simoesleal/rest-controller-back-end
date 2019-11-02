const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewUnitMeasurement (name, abbreviation) {
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome da Unidade de Medida e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!await validateParam(abbreviation)) throw new DefaultError(`Não identificamos a abreviatura da Unidade de Medida e este é um campo obrigatório. Por favor, tente novamente.`, 'abbreviation nulo ou vazio')
}

async function validateUpdateUnitMeasurement (id, name, abbreviation) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código do País e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome do Grupo de Produtos e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
    if (!await validateParam(abbreviation)) throw new DefaultError(`Não identificamos a abreviatura da Unidade de Medida e este é um campo obrigatório. Por favor, tente novamente.`, 'abbreviation nulo ou vazio')
}

module.exports = {
	validateNewUnitMeasurement,
  validateUpdateUnitMeasurement
}