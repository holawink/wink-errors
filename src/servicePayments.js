const errors = {
  CATEGORIES_NOT_FOUND: {
    code: 'service-payments-0-1',
    httpStatus: 404,
    message: 'Category not found'
  },
  PAYMENTS_BLOCKED: {
    code: 'service-payments-0-2',
    message: 'You are not allowed to pay services'
  }
}

export default errors
