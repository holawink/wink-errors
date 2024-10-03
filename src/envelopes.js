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
  },
  EXTRACT_TOTAL_AMOUNT: {
    code: 'envelope-6',
    message: 'Close the envelope if extracting the full current amount'
  },
  FUNDS_RETURNED_FAILED: {
    code: 'envelope-7',
    message: "Error, funds couldn't be returned"
  },
  TOTAL_FUNDS_RETURNED_FAILED: {
    code: 'envelope-8',
    message: 'The total amount of the envelope could not be released'
  },
  FAILED_ENVELOPE_CREATION: {
    code: 'envelope-9',
    message: 'We had an issue creating the savings envelope'
  },
  INVALID_AMOUNT: {
    code: 'envelope-10',
    message: 'The initial envelope amount must be greater than zero.'
  }
}

export default errors
