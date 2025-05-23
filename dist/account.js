'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const errors = {
  ALREADY_SAVED: {
    code: 'account-1',
    message: 'Account already saved'
  },
  CARD_LINK_FAILED_AFTER_ACCOUNT_STATUS_UPDATE: {
    code: 'account-2',
    message: 'The account status was successfully updated, but the card could not be linked to the account.'
  },
  INACTIVE_ACCOUNT: {
    code: 'account-3',
    message: 'Rhe account is inactive.'
  }
};

exports.default = errors;