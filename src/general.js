const errors = {
  INVALID_INPUT: {
    code: 'general-0-2',
    message: 'Invalid input'
  },
  INTERNAL_ERROR: {
    code: 'general-0-3',
    httpStatus: 500,
    message: 'Internal error'
  },
  CLIENT_NOT_FOUND: {
    code: 'general-0-4',
    httpStatus: 404,
    message: 'Client not found'
  },
  PROFILE_NOT_FOUND: {
    code: 'general-0-5',
    httpStatus: 404,
    message: 'Profile not found'
  },
}

export default errors
