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
    message: 'Monthy limit exceeded'
  },
  REDUCE_AMOUNT_LIMIT_EXCEEDED: {
    code: 'reload-3',
    message: 'Amounts exceeds monthly limit'
  },
  RELOAD_BLOCKED: {
    code: 'reload-4',
    message: 'You are not allowed to reload funds'
  }
};

exports.default = errors;
//# sourceMappingURL=reloadMoney.js.map