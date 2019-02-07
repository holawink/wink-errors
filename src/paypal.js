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
  }
}

export default errors
