const errors = {
  CATEGORIES_NOT_FOUND: {
    code: 'service-payments-0-1',
    httpStatus: 404,
    message: 'Category not found'
  },
  PAYMENTS_BLOCKED: {
    code: 'service-payments-0-2',
    message: 'You are not allowed to pay services'
  },
  RECHARGE_PHONE_NUMBER: {
    code: 'service-payments-0-3',
    message: 'An error occurred while recharging the number'
  }
}

export default errors
