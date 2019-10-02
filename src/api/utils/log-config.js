const log4js = require('log4js')

log4js.configure({
  appenders: {
    multi: {
      type: 'multiFile',
      base: 'logs/',
      property: 'categoryName',
      extension: '.log'
    }
  },
  categories: {
    default: {
      appenders: ['multi'],
      level: 'info'
    }
  }
})

let logger = log4js.getLogger()

function testAndAssignCategory (category) {
  if (category && typeof category === 'string') {
    logger = log4js.getLogger(category)
  } else if (category && typeof category !== 'string') {
    console.error('\nErro na função testAndAssignCategory(), do arquivo logs.js. Detalhes: Parâmetro "category" deve ser uma string.\n')
  }
}

/**
 * @description Função utilizada para informar, via log, quando entramos em uma função e qual o retorno dela.
 *
 * Exemplo de chamada (favor não fugir desse padrão):
 * let methodName = 'nomeDoMetodo()'
 * logInfo('Entering ' + methodName, 'param1 = [' + JSON.stringify(param1) + '], ' + 'param2 = [' + JSON.stringify(param2) + ']', 'crédito-parcelado')
 * logInfo('Returning ' + methodName, retorno, 'crédito-parcelado')
 *
 * @param {string} msg
 * @param {json} params
 * @param {string} category
 */
async function logInfo (msg, params = null, category = '') {
  await testAndAssignCategory(category)
  let logParams = (params !== undefined && params !== null) ? ', parametros: ' + JSON.stringify(params) : ''
  logger.info(msg + logParams)
}

/**
 * @description Função utilizada para informar, via log, o erro dentro de uma função e sua mensagem,
 * facilitando na hora de debuggar.
 *
 * Exemplo de chamada (favor não fugir desse padrão):
 * let methodName = 'nomeDoMetodo()'
 * logError('Error ' + methodName, 'param1 = [' + JSON.stringify(param1) + '], ' + 'param2 = [' + JSON.stringify(param2) + ']', 'crédito-parcelado')
 * logError('Error ' + methodName, retorno, 'crédito-parcelado')
 *
 * @param {string} msg
 * @param {json} errorMsg
 * @param {string} category
 */
async function logError (msg, errorMsg = null, category = '') {
  await testAndAssignCategory(category)
  let logParams = (errorMsg !== undefined && errorMsg !== null) ? ', error: ' + errorMsg : ''
  logger.error(msg + logParams)
}


module.exports = { logInfo, logError }