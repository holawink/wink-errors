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
import email from './email'
import paypal from './paypal'
import creditAccount from './creditAccount'

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
  external,
  email,
  paypal,
  creditAccount
}

const buildErrorResponse = (error = {}, description, originalError) => {
  console.log('buildErrorResponse')
  console.log(error)
  console.log(description)
  console.log(originalError)
  let customError = new Error()
  if (error.mainError) {
    customError.message =
      error.mainError.message || external.DEFAULT.error.message || ''
    customError.httpStatus = error.mainError.httpStatus || 409
    customError.code = error.mainError.code || external.DEFAULT.error.code || ''
    customError.description =
      description ||
      error.mainError.description ||
      external.DEFAULT.description ||
      ''
  } else {
    customError.message = error.message || general.INTERNAL_ERROR.message || ''
    customError.httpStatus =
      error.httpStatus || general.INTERNAL_ERROR.httpStatus || 409
    customError.code = error.code || general.INTERNAL_ERROR.code || ''
    customError.description = description || ''
  }
  return customError
}

module.exports = {
  buildErrorResponse,
  errorCodes
}
