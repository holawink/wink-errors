import auth from './auth'
import general from './general'
import cards from './cards'
import profile from './profile'
import account from './account'
import envelopes from './envelopes'
import preregister from './preRegister'
import reloadMoney from './reloadMoney'
import sendMoney from './sendMoney'
import servicePayments from './servicePayments'
import pushNotifications from './pushNotifications'
import external from './externalBank'

const errorCodes = {
  general,
  cards,
  profile,
  auth,
  account,
  envelopes,
  preregister,
  reloadMoney,
  sendMoney,
  servicePayments,
  pushNotifications,
  external
}

const buildErrorResponse = (error = {}, description = '', originalError) => {
  let customError = new Error()
  customError.message = error.message || 'Unexpected error'
  customError.httpStatus = error.httpStatus || 409
  customError.code = error.code || 'general-0-1'
  customError.description = description
  return customError
}

const buildExternalErrorResponse = (error = {}, description) => {
  let customError = new Error()
  if (error.mainError) {
    customError.message = error.mainError.message || 'Unexpected external error'
    customError.httpStatus = error.mainError.httpStatus || 409
    customError.code = error.mainError.code || 'external-1'
    customError.description = description || error.mainError.description
  } else {

  }
  customError.message = error.message || 'Unexpected external error'
  customError.httpStatus = error.httpStatus || 409
  customError.code = error.code || 'external-1'
  customError.description = description || ''
  return customError
}

module.exports = {
  buildErrorResponse,
  buildExternalErrorResponse,
  errorCodes
}
