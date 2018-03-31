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
  },
  SEND_BLOCKED: {
    code: 'sendMoney-4',
    message: 'You are not allowed to send funds'
  }
}

export default errors
