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
  }
};

exports.default = errors;