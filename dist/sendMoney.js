'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const errors = {
  INVALID_DESTINATION_ACCOUNT: {
    code: 'sendMoney-1',
    message: 'Invalid destination account'
  },
  SAME_ORIGIN_DESTINATION: {
    code: 'sendMoney-2',
    message: 'Invalid destination account'
  },
  CURRENCY_DOES_NOT_MATCH: {
    code: 'sendMoney-3',
    message: 'Currency does not match'
  }
};

exports.default = errors;
//# sourceMappingURL=sendMoney.js.map