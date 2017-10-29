const errorCodes = {
  general: {
    internal: {
      unexpectedError: {
        code: 'general-0-1',
        message: 'Unexpected error'
      },
      invalidInput: {
        code: 'general-0-2',
        message: 'Invalid input'
      }
    }
  },
  security: {
    requestPhoneValidationId: {
      phoneTaken: {
        code: 'security-0-1',
        message: 'Phone taken'
      },
      unexpectedError: {
        code: 'security-0-2',
        message: 'Unexpected error'
      }
    },
    checkEmail: {
      emailTaken: {
        code: 'security-1-1',
        message: 'Email taken'
      }
    },
    confirmPhone: {
      unexpectedError: {
        code: 'security-2-2',
        message: 'Unexpected error'
      }
    }
  }
}

const buildErrorResponse = (error = {}, description = '') => {
  let customError = new Error()
  customError.message = error.message || 'Unexpected error'
  customError.httpStatus = error.httpStatus || 409
  customError.code = error.code || 'general-0-0-0'
  customError.description = description
  return customError
}

export {
  buildErrorResponse,
  errorCodes
}
