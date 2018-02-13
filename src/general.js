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
  },
  TX_CATEGORY_NOT_FOUND: {
    code: 'general-12',
    message: 'Transaction category not found'
  },
  INVALID_AUTH_TOKEN: {
    code: 'general-13',
    message: 'Invalid token'
  },
  REQUIRED_AUTH_TOKEN: {
    code: 'general-14',
    message: 'Required Authentication token'
  },
  GRAPHQL_UNKNOWN_CODE: {
    code: 'general-15',
    message: 'Unable to get code from microservice error'
  },
  BANK_ACCOUNTS_NOT_FOUND: { // when externalBankAPI.getAccounts returns empty array
    code: 'general-16',
    httpStatus: 404,
    message: 'No accounts found'
  },
  TX_ALREADY_PROCESSED: {
    code: 'general-17',
    httpStatus: 404,
    message: 'Transaction already processed.'
  }
}

export default errors
