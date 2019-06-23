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
  }
}

export default errors
