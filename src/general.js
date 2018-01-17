const errors = {
  INVALID_INPUT: {
    code: 'general-1',
    message: 'Invalid input'
  },
  INTERNAL_ERROR: {
    code: 'general-2',
    httpStatus: 500,
    message: 'Internal error'
  },
  CLIENT_NOT_FOUND: { // client, client_detail
    code: 'general-3',
    httpStatus: 404,
    message: 'Client not found'
  },
  PROFILE_NOT_FOUND: {
    code: 'general-4',
    httpStatus: 404,
    message: 'Profile not found'
  },
  ACCOUNT_NOT_FOUND: { // debit_account
    code: 'general-5',
    httpStatus: 404,
    message: 'Account not found'
  },
  BANK_ACCOUNT_NOT_FOUND: { // when externalBankAPI.localPayments.getAccountInfo is not found
    code: 'general-6',
    httpStatus: 404,
    message: 'Bank Account not found'
  },
  SAVING_NOT_FOUND: {
    code: 'general-7',
    httpStatus: 404,
    message: 'Saving not found'
  },
  SERVICE_NOT_FOUND: {
    code: 'general-8',
    httpStatus: 404,
    message: 'Saving not found'
  },
  INVALID_PIN: {
    code: 'general-9',
    message: 'Invalid PIN'
  },
  PIN_NOT_DEFINED: {
    code: 'general-10',
    message: 'Pin is not defined'
  },
  EMAIL_SERVICE_DOWN: {
    code: 'general-11',
    message: 'Email service unexpected problem, please contact admin'
  }
}

export default errors
