const errors = {
  UNEXPECTED_EXTERNAL_ERROR: {
    code: 'external-1',
    message: 'Unexpected external error'
  },
  INVALID_REQUEST: {
    code: 'general-0',
    message: 'Invalid request'
  },
  INVALID_INPUT: {
    code: 'general-1',
    message: 'Invalid input'
  },
  INTERNAL_ERROR: {
    code: 'general-2',
    httpStatus: 500,
    message: 'Internal error'
  },
  CLIENT_NOT_FOUND: {
    // client, client_detail
    code: 'general-3',
    httpStatus: 404,
    message: 'Client not found'
  },
  PROFILE_NOT_FOUND: {
    code: 'general-4',
    httpStatus: 404,
    message: 'Profile not found'
  },
  ACCOUNT_NOT_FOUND: {
    // debit_account
    code: 'general-5',
    httpStatus: 404,
    message: 'Account not found'
  },
  BANK_ACCOUNT_NOT_FOUND: {
    // when externalBankAPI.localPayments.getAccountInfo is not found
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
  BANK_ACCOUNTS_NOT_FOUND: {
    // when externalBankAPI.getAccounts returns empty array
    code: 'general-16',
    httpStatus: 404,
    message: 'No accounts found'
  },
  TX_ALREADY_PROCESSED: {
    code: 'general-17',
    message: 'Transaction already processed.'
  },
  INSUFFICIENT_FUNDS: {
    code: 'general-18',
    message: 'Insufficient funds.'
  },
  CARD_NOT_FOUND: {
    code: 'general-19',
    message: 'Card not found.'
  },
  PIN_IS_ALREADY_DEFINED: {
    code: 'general-20',
    message: 'Client has a pin'
  },
  MAX_AMOUNT_LIMIT_EXCEEDED: {
    code: 'general-21',
    message: 'Maximum amount exceeded'
  },
  UNEXPECTED_DB_ERROR: {
    code: 'general-22',
    message: 'Unexpected db error'
  },
  SIGNUP_CLOSE: {
    code:
      'En este momento no podemos registrar tu correo. Estamos dándole mantenimiento a la app, por favor intentá nuevamente a partir del Miercoles 3 de Mayo.',
    message:
      '¡OOOOPS! En este momento no podemos registrar tu correo. Estamos dándole mantenimiento a la app, por favor intentá nuevamente a partir del Martes 24 de Abril.'
  },
  INVALID_EMAIL: {
    code: 'general-24',
    message: 'El formato del email no es válido.'
  },
  PENDING_IDENTITY_INFO: {
    code: 'general-25',
    message: 'Necesita completar datos de identidad de registro.'
  },
  SINPE_REF_REQUIRED: {
    code: 'general-26',
    message: 'Sinpe Reference is required'
  },
  OTP_NOT_DEFINED: {
    code: 'general-27',
    message: 'OTP is not defined'
  },
  SERVICE_CONNECTION_ERROR: {
    code: 'general-28',
    message: 'Service connection error'
  },
  ROUTE_NOT_FOUND: {
    message:
      'Actualiza la APP para que podas continuar con tu experiencia Wink',
    code: 'Actualiza la APP para que podas continuar con tu experiencia Wink',
    description: 'Route or resource not found',
    httpStatus: 404
  }
}

export default errors
