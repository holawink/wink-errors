const errors = {
  INVALID_INPUT: {
    code: 'general-0-2',
    message: 'Invalid input'
  },
  INTERNAL_ERROR: {
    code: 'general-0-3',
    httpStatus: 500,
    message: 'Internal error'
  },
  CLIENT_NOT_FOUND: {
    code: 'general-0-4',
    httpStatus: 404,
    message: 'Client not found'
  },
  PROFILE_NOT_FOUND: {
    code: 'general-0-5',
    httpStatus: 404,
    message: 'Profile not found'
  },
  ACCOUNT_NOT_FOUND: {
    code: 'general-0-6',
    httpStatus: 404,
    message: 'Account not found'
  },
  BANK_ACCOUNT_NOT_FOUND: { // when externalBankAPI.localPayments.getAccountInfo is not found
    code: 'general-0-6',
    httpStatus: 404,
    message: 'Account not found'
  },
}

export default errors
