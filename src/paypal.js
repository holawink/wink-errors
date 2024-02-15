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
  },
  VALIDATION_ERROR: {
    code: 'paypal-6',
    message: 'Currency is not allowed for this transaction'
  },
  PAYMENT_DENIED: {
    code: 'paypal-7',
    message: 'Payment was Denied'
  },
  UNAUTHORIZED: {
    code: 'paypal-8',
    message: 'Request is Unauthorized'
  },
  INTERNAL_SERVICE_ERROR: {
    code: 'paypal-9',
    message: 'PayPal internal error'
  },
  UNAUTHORIZED_COUNTRY: {
    code: 'paypal-10',
    message: 'Paypal Country is Unauthorized'
  },
  FUNDING_INSTRUMENTS_UNAVAILABLE: {
    code: 'paypal-11',
    message: 'PayPal internal error'
  },
  INVALID_REFRESH_TOKEN: {
    code: 'paypal-12',
    message: 'Refresh token is invalid'
  },
  SEND_MONEY_TO_EXTERNAL_ACCOUNT_ERROR: {
    code: 'paypal-14',
    message:
      'Error trying to send paypal withdrawal money to an external account'
  },
  INSUFFICIENT_AMOUNT_FOR_EXTERNAL_TRANSFER: {
    code: 'paypal-15',
    message:
      'The withdrawal amount from PayPal is insufficient to cover the transfer fee.'
  }
}

export default errors
