'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const errors = {
  INSUFFICIENT_FUNDS: {
    code: 'envelopes-1',
    message: 'Error insufficient funds'
  },
  INVALID_SAVING_TYPE_FOR_ADDING_FUNDS: {
    code: 'envelopes-2',
    message: 'Cannot add funds to this envelope'
  },
  ENVELOPE_DOES_NOT_BELONG_TO_ACCOUNT_ID: {
    code: 'envelopes-3',
    message: 'Envelope must belong to client'
  },
  SAVINGS_BLOCKED: {
    code: 'envelopes-4',
    message: 'You are not allowed to reload funds'
  }
};

exports.default = errors;
//# sourceMappingURL=envelopes.js.map