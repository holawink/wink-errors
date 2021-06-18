'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const errors = {
  cardNotBelong: {
    code: 'cards-1',
    message: 'The card does not belong to the customer'
  },
  UNABLE_TO_ACTIVATE_NAE_ERROR: {
    code: 'cards-2',
    message: 'Nae did not generate the transaction id for the activation'
  },
  PENDING_REQUEST_CARD: {
    code: 'cards-3',
    message: 'Pending previous card replacement'
  },
  CLIENT_WITHOUT_CREDIT_CARD: {
    code: 'cards-4',
    message: 'Client does not have a credit card registered'
  },
  CARD_PIN_NOT_SET: {
    code: 'cards-6',
    message: 'Card pin not established'
  }
};

exports.default = errors;