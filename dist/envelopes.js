'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const errors = {
  INSUFFICIENT_FUNDS: {
    code: 'w-7-0-2',
    httpStatus: 400,
    message: 'Error insufficient funds'
  },
  INVALID_SAVING_TYPE_FOR_ADDING_FUNDS: {
    code: 'w-7-0-3',
    httpStatus: 400,
    message: 'Cannot add funds to this envelope'
  },
  ENVELOPE_DOES_NOT_BELONG_TO_ACCOUNT_ID: {
    code: 'w-7-0-3',
    httpStatus: 400,
    message: 'Envelope must belong to client'
  }
};

exports.default = errors;
//# sourceMappingURL=envelopes.js.map