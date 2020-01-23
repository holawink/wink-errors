'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
  ERROR_REQUEST_CASH_ADVANCE:{
    code: 'creditAccount-6',
    message: 'There was an error while trying to request the cash advance'
  }
};

exports.default = errors;