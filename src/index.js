import security from './auth'

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
      },
      clientNotFound: {
        code: 'general-0-3',
        message: 'Client not found'
      }
    }
  },
  cards: {
    general: {
      cardNotBelong: {
        code: 'cards-0-1',
        message: 'The card does not belong to the customer'
      }
    },
    requestTravel: {},
    list: {},
    activate: {},
    block: {},
    unblock: {},
    cancel: {},
    requestReplacement: {}
  },
  profile: {
    general: {},
    definePin: {
      pinHasBeenDefined: {
        code: 'profile-1-1',
        message: 'Client has a pin'
      }
    },
    redefinePin: {
      invalidPin: {
        code: 'profile-2-1',
        message: 'Current pin does not match'
      }
    }
  },

  security
}

const buildErrorResponse = (error = {}, description = '') => {
  let customError = new Error()
  customError.message = error.message || 'Unexpected error'
  customError.httpStatus = error.httpStatus || 409
  customError.code = error.code || 'general-0-1'
  customError.description = description
  return customError
}

module.exports = {
  buildErrorResponse,
  errorCodes
}
