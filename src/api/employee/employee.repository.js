const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	SELECT_EMPLOYEES,
	SELECT_EMPLOYEE_BY_ID,
	SELECT_EMPLOYEE_BY_NAME,
	INSERT_NEW_EMPLOYEE,
	UPDATE_EMPLOYEE,
	UPDATE_PASSWORD,
	DELETE_EMPLOYEE
} = require('./employee.queries')

async function getEmployeeListRepository (transaction = null) {
  let employeeList
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-employees', text: SELECT_EMPLOYEES})
    employeeList = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar a listagem de Funcionários, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(employeeList)
}

async function getEmployeeByIdRepository (id, transaction = null) {
  let employee
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-employee', text: SELECT_EMPLOYEE_BY_ID, values: [id]})
    employee = await transaction.oneOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este Funcionário, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(employee)
}

async function getEmployeeByNameRepository (name, transaction = null) {
  let employee
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'select-employee-by-name', text: SELECT_EMPLOYEE_BY_NAME, values: [name]})
    employee = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível buscar este Funcionário, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(employee)
}

async function postEmployeeRepository (name, lastName, birth, login, password, status, cpf, email, phone, cellphone, id_endereco, id_funcao, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'insert-new-employee', text: INSERT_NEW_EMPLOYEE, values: [name, lastName, birth, login, password, status, cpf, email, phone, cellphone, id_endereco, id_funcao]})
    response = await transaction.query(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível criar este novo Funcionário, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putEmployeeRepository (id, name, lastName, birth, login, status, cpf, email, phone, cellphone, id_endereco, id_funcao, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-employee', text: UPDATE_EMPLOYEE, values: [id, name, lastName, birth, login, status, cpf, email, phone, cellphone, id_endereco, id_funcao]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar este Funcionário, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function putEmployeePasswordRepository (id, password, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'update-employee-password', text: UPDATE_PASSWORD, values: [id, password]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível atualizar a senha, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

async function deleteEmployeeRepository (id, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'delete-employee', text: DELETE_EMPLOYEE, values: [id]})
    response = await transaction.query(QUERY)
  } catch (error) {
    throw new DefaultError(`Não foi possível deletar este Funcionário, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
	getEmployeeListRepository,
  getEmployeeByIdRepository,
  getEmployeeByNameRepository,
  postEmployeeRepository,
  putEmployeeRepository,
  putEmployeePasswordRepository,
  deleteEmployeeRepository
}