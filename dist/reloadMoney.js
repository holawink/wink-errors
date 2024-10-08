'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const errors = {
  INVALID_ORIGIN_ACCOUNT: {
    code: 'reload-1',
    message: 'Invalid origin account'
  },
  LIMIT_EXCEEDED: {
    code: 'reload-2',
    message: 'Monthly limit exceeded'
  },
  REDUCE_AMOUNT_LIMIT_EXCEEDED: {
    code: 'reload-3',
    message: 'Amounts exceeds monthly limit'
  },
  RELOAD_BLOCKED: {
    code: 'reload-4',
    message: 'You are not allowed to reload funds'
  },
  DESTINATION_DONT_ALLOW_THE_TRX: {
    code: 'reload-5',
    message: 'The destination did not allow the transaction'
  },
  CLIENT_ACCOUNT_CLOSED: {
    code: 'reload-6',
    message: 'Client account is closed'
  },
  CLIENT_ACCOUNT_NOT_FOUND: {
    code: 'reload-7',
    message: 'Client account does not exist'
  },
  CLIENT_ACCOUNT_BLOCKED: {
    code: 'reload-8',
    message: 'Client account is blocked'
  },
  IDENTITY_DOES_NOT_MATCH: {
    code: 'reload-9',
    message: 'Identity does not match with destination'
  },
  DESTINATION_INSUFFICIENT_FUNDS: {
    code: 'reload-10',
    message: 'Destination does not have enough funds'
  },
  CURRENCY_DOES_NOT_MATCH: {
    code: 'reload-11',
    message: 'Currency does not match'
  },
  CLIENT_NOT_AUTHORIZED: {
    code: 'reload-12',
    message: 'Origin client is not authorized'
  },
  SERVICE_NOT_AUTHORIZED: {
    code: 'reload-13',
    message: 'Service is not authorized'
  },
  DESTINATION_NOT_AVAILABLE: {
    code: 'reload-14',
    message: 'Destination could not process the transaction'
  },
  CLIENT_ACCOUNT_INCORRECT_NUMBER: {
    code: 'reload-15',
    message: 'Client account number is incorrect'
  },
  CLIENT_ACCOUNT_INSUFFICIENT_FUNDS: {
    code: 'reload-16',
    message: 'Client account does not have enough funds'
  },
  PROCESSING_EXCEPTION: {
    code: 'reload-17',
    message: 'SINPE failed to process the transaction'
  },
  DESTINATION_TIMEOUT: {
    code: 'reload-18',
    message: 'Response time exceeded by destination'
  },
  DESTINATION_INCORRECT_RESPONSE: {
    code: 'reload-19',
    message: 'The destination response is not correct'
  },
  DESTINATION_EXCEPTION: {
    code: 'reload-20',
    message: 'Exception received by destination'
  },
  DESTINATION_MISCOMMUNICATION: {
    code: 'reload-21',
    message: 'Communication error with destination'
  }
};

exports.default = errors;