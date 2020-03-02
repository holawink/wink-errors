const errors = {
  HARD_RULES_FAILED: {
    code: 'creditAccount-1',
    message: 'The request of the hard rules have failed'
  },
  NO_CREDIT_ACCOUNT_REQUEST: {
    code: 'creditAccount-2',
    message: 'There is not a credit account request registered for this user'
  },
  CREDIT_ACCOUNT_NOT_FOUND: {
    code: 'creditAccount-3',
    message: 'No credit account found for this user'
  },
  ERROR_PAYING_CREDIT_ACCOUNT: {
    code: 'creditAccount-4',
    message: 'There was an error paying the credit account'
  },
  CREDIT_CARD_NOT_FOUND:{
    code: 'creditAccount-5',
    message: 'No credit card found for this user'
  },
  CREDIT_CARD_PAYMENT_FAILURE:{
    code: 'creditAccount-6',
    message: 'An error happened while trying to pay the credit card'
  },
  CREDIT_CARD_CHANGING_STATUS_FAILURE:{
    code: 'creditAccount-7',
    message: 'An error happened while trying to change the credit card status'
  },
  CREDIT_CARD_REQUEST_REPLACEMENT_ERROR:{
    code: 'creditAccount-8',
    message: 'An error happened while trying to request a replacement of the credit card'
  },
  REQUEST_AUTHORIZATION_ERROR:{
    code: 'creditAccount-9',
    message: 'An error happened while requesting for authorization document'
  },
  USER_CREDIT_REQUEST:{
    code: 'creditAccount-10',
    message: 'An error happened while requesting for user credit'
  },
  ERROR_MESA_REQUEST:{
    code: 'creditAccount-11',
    message: 'An error happened while asking for MESA approval'
  },
  ERROR_CLIENT_AFFILIATION:{
    code: 'creditAccount-12',
    message: 'An error happened while request the affiliation'
  },
  ERROR_CREATING_CREDIT_PROFILE:{
    code: 'creditAccount-13',
    message: 'An error happened while creating the credit profile'
  }
}

export default errors
