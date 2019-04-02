'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const errors = {
  AMOUNT_TOO_LOW: {
    code: 'paypal-1',
    message: 'Amount must be greater than fees'
  },
  TICKET_NOT_FOUND: {
    code: 'paypal-2',
    message: 'Ticket not found'
  },
  INVALID_PAYPAL_ACCOUNT: {
    code: 'paypal-3',
    message: 'Invalid paypal account'
  },
  INVALID_PAYPAL_ACCOUNT_COUNTRY: {
    code: 'paypal-4',
    message: 'Invalid paypal account country'
  },
  INVALID_PAYPAL_ACCOUNT_NAME: {
    code: 'paypal-5',
    message: 'Your id name does not match with paypal account name'
  }
};

exports.default = errors;