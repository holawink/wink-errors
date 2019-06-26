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
  },
  PROJECTED_AMOUNT_EXCEEDED: {
    code: 'envelopes-5',
    message: 'Amount exceeds projected amount'
  }
}

export default errors
