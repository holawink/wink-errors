'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const errors = {
  CANNOT_SUBSCRIBE_TO_MAILCHIMP: {
    code: 'email-1',
    message: 'Error on Register on MailChimp'
  },
  CANNOT_UPDATE_SUBSCRIPTION_TO_MAILCHIMP: {
    code: 'email-2',
    message: 'Error on update on MailChimp'
  },
  GENERAL_MAILCHIMP_ERROR: {
    code: 'email-3',
    message: 'Error on update on MailChimp'
  }
};

exports.default = errors;