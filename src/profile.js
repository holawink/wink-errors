// Obsoletos borrar en proximos deploys

const errors = {
  PIN_IS_ALREADY_DEFINED: {
    code: 'profile-1',
    message: 'Client has a pin'
  },
  INVALID_PIN: {
    code: 'profile-2',
    message: 'Current pin does not match'
  },
  PRODUCT_NOT_CONFIGURED:{
    code: 'profile-3',
    message: 'Product does not exist for this client'
  }
}

export default errors;
