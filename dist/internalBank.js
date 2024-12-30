'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const internalErrors = {
  UNEXPECTED_ERROR: {
    code: 'external-1',
    message: 'Unexpected external error'
  },
  INVALID_INPUT: {
    code: 'external-2',
    message: 'Invalid input, please check values'
  },
  INVALID_PASSWORD_FORMAT: {
    code: 'external-3',
    message: 'The password does not comply with the required format.'
  },
  CLIENT_NOT_FOUND: {
    code: 'external-4',
    message: 'Client not found'
  },
  IDENTITY_TAKEN: {
    code: 'external-5',
    message: 'Id document has been token'
  },
  ACCESS_DENIED: {
    code: 'external-6',
    message: 'Access denied'
  },
  INVALID_OTP: {
    code: 'external-7',
    message: 'Invalid OTP value'
  },
  REPEATED_PASSWORD: {
    code: 'external-8',
    message: 'Please do not use a previous password'
  },
  INSUFFICIENT_FUNDS: {
    code: 'external-9',
    message: 'Insufficient funds to process the transaction'
  },
  AMOUNT_MUST_BE_POSITIVE: {
    code: 'external-10',
    message: 'The amount of the transaction must be greater than zero.'
  },
  ORIGIN_ACCOUNT_NOT_EXIST: {
    code: 'external-11',
    message: 'The Origin Account does not exist'
  },
  DESTINATION_ACCOUNT_NOT_EXIST: {
    code: 'external-12',
    message: 'The destination client account does not exist'
  },
  ORIGIN_ACCOUNT_IS_NOT_ACTIVE: {
    code: 'external-13',
    message: 'The Origin Account is not active'
  },
  DESTINATION_ACCOUNT_IS_NOT_ACTIVE: {
    code: 'external-14',
    message: 'Destination Account is not active'
  },
  ORIGIN_ACCOUNT_NOT_ALLOW_DEBITED: {
    code: 'external-15',
    message: 'The Origin Account does not allow to be debited'
  },
  UNEXPECTED_2FA_ERROR: {
    code: 'external-16',
    message: 'It was not possible to verify the value of the double authentication factor to process your transaction'
  },
  UNAUTHORIZED_AMOUNT: {
    code: 'external-17',
    message: 'Unauthorized amount'
  },
  FINANCIAL_ENTITY_EXCLUDED: {
    code: 'external-18',
    message: 'SINPE - Financial entity excluded'
  },
  INVALID_ORIGIN_ACCOUNT_NUMBER: {
    code: 'external-19',
    message: 'Invalid origin account number'
  },
  INVALID_DESTINATION_ACCOUNT_NUMBER: {
    code: 'external-20',
    message: 'Invalid destination account number'
  },
  ORIGIN_AND_DESTINATION_CURRENCY_MISMATCH: {
    code: 'external-21',
    message: 'Origin and destination currency need to be same'
  },
  IDENTITY_AND_ACCOUNT_MISMATCH: {
    code: 'external-22',
    message: 'The identification number of the destination account owner does not correspond with the registered number in the destination Financial Institution'
  },
  OUTSIDE_ALLOWED_TIME: {
    code: 'external-23',
    message: 'Transaction outside the allowed time'
  },
  DESTINATION_ACCOUNT_NOT_ALLOW_ACCREDITED: {
    code: 'external-24',
    message: 'The Destination Account does not allow to be accredited'
  },
  DESTINATION_ACCOUNT_BLOCKED: {
    code: 'external-25',
    message: 'The destination account is blocked'
  },
  UNEXPECTED_ERROR_SERVICE_PROVIDER: {
    code: 'external-26',
    message: 'It was not possible to obtain the payment information of the service consulted. Try to make the query again.'
  },
  NOT_PENDING_INVOICES: {
    code: 'external-27',
    message: 'No pending invoices'
  },
  INVALID_EMAIL: {
    code: 'external-28',
    message: 'Invalid email'
  },
  INVALID_IDENTITY_NUMBER: {
    code: 'external-29',
    message: 'Invalid identity number'
  },
  INVALID_CARD_NUMBER: {
    code: 'external-30',
    message: 'Invalid card number'
  },
  INVALID_PLACE: {
    code: 'external-31',
    message: 'Invalid place'
  },
  CARD_NUMBER_NOT_FOUND: {
    code: 'external-32',
    message: 'Card number not found'
  },
  REPEATED_PRIORITY: {
    code: 'external-33',
    message: 'It is not possible to set the priority {0} to the account No. {1} because there is already another account with that defined priority number'
  },
  ACCOUNT_NOT_BELONG_TO_CARD_HOLDER: {
    code: 'external-34',
    message: 'It is not possible to complete the process of linking accounts of card No. {0}, because the following selected accounts do not belong to the card holder: {1}'
  },
  CARD_IS_IN_STATE_THAT_CAN_NOT_BE_MODIFIED: {
    code: 'external-35',
    message: 'Debit card {0} is in a state that can not be modified'
  },
  CARD_NOT_BELONG_TO_CARD_HOLDER: {
    code: 'external-36',
    message: 'It is not possible to process the requested transaction because the Debit Card {0} does not belong to it'
  },
  INVALID_BLOCK_MONEY: {
    code: 'external-37',
    message: 'Invalid block number'
  },
  BLOCKED_CLIENT_ACCOUNT: {
    code: 'external-38',
    message: "The customer's account is blocked by the issuer"
  },
  CLOSED_CLIENT_ACCOUNT: {
    code: 'external-39',
    message: "Destination customer's account is closed"
  },
  DAILY_LIMIT_EXCEEDED: {
    code: 'external-40',
    message: 'The maximum daily accumulated limit for sending SINPE transfers has been exceeded'
  }
};

exports.default = internalErrors;