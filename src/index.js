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
      invalidCode: {
        code: 'security-2-1',
        message: 'Invalid code'
      }
    },
    checkIdentity: {
      errorMatch: {
        code: 'security-3-1',
        message: 'Identity does not match with your id'
      }
    }
  }
}

const buildErrorResponse = (error = {}, description = '') => {
  let customError = new Error()
  customError.message = error.message || 'Unexpected error'
  customError.httpStatus = error.httpStatus || 409
  customError.code = error.code || 'general-0-1'
  customError.description = description
  return customError
}

export {
  buildErrorResponse,
  errorCodes
}
