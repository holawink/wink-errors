import auth from './auth'
import general from './general'
import cards from './cards'
import profile from './profile'
import account from './account'
import envelopes from'./envelopes'
import preregister from'./preRegister'
import reloadMoney from './reloadMoney'
import sendMoney from './sendMoney'

const errorCodes = {
  general,
  cards,
  profile,
  auth,
  account,
  envelopes,
  preregister,
  reloadMoney,
  sendMoney
}

const buildErrorResponse = (error = {}, description = '') => {
  let customError = new Error()
  customError.message = error.message || 'Unexpected error'
  customError.httpStatus = error.httpStatus || 409
  customError.code = error.code || 'general-0-1'
  customError.description = description
  return customError
}

module.exports = {
  buildErrorResponse,
  errorCodes
}
