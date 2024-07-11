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
  },
  DESTINATION_DONT_ALLOW_THE_TRX: {
    code: 'sendMoney-5',
    message: 'THE DESTINATION DONT ALLOW THE TRANSACCTION'
  },
  TRANSACTION_IN_PORGRESS_OR_PROCESSED: {
    code: 'sendMoney-6',
    message: 'Transaction in progress or processed'
  },
  FAILED_TRANSACTION_TO_EXTERNAL_BANK: {
    code: 'sendMoney-7',
    message:
      'It was not possible to register the transaction to the account of the client because a problem occurred'
  },
  INVALID_ACCOUNT_NUMBER: {
    code: 'sendMoney-8',
    message: 'Invalid account number'
  },
  INTERNAL_ACCOUNT_TRANSACTION_TIMEOUT: {
    code: 'sendMoney-9',
    message: 'Internal transaction failed due to connection timeout error.'
  }
}

export default errors
