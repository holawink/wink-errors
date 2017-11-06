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
        message: 'Identity does not match with your id or not exist'
      },
      invalidName: {
        code: 'security-3-2',
        message: 'Your id name does not match'
      },
      invalidFatherLastName: {
        code: 'security-3-3',
        message: 'Your id father last name does not match'
      },
      invalidMotherLastName: {
        code: 'security-3-4',
        message: 'Your id mother last name does not match'
      },
      invalidDeadPerson: {
        code: 'security-3-5',
        message: 'Death person'
      },
      idDocumentExpired: {
        code: 'security-3-6',
        message: 'Id document expired'
      },
      identityTaken: {
        code: 'security-3-7',
        message: 'Id document has been token'
      }
    },
    uploadPhoto: {
      invalidImageEncoding: {
        code: 'security-4-1',
        message: 'Image need to be base64'
      }
    },
    signUp: {
      invalidProfileToken: {
        code: 'security-5-1',
        message: 'Invalid profile token'
      },
      clientTaken: {
        code: 'security-5-2',
        message: 'Some unique attributes taken: username, id document, phone'
      }
    },
    resendConfirmationEmail: {
      clientNotFound: {
        code: 'security-6-1',
        message: 'Client not found'
      },
      clientAlreadyConfirmed: {
        code: 'security-6-2',
        message: 'Client already confirm'
      },
      notPendingConfirmation: {
        code: 'security-6-3',
        message: 'Not pending confirmation'
      }
    },
    confirmEmail: {
      clientNotFound: {
        code: 'security-7-1',
        message: 'Client not found'
      },
      clientAlreadyConfirmed: {
        code: 'security-7-2',
        message: 'Client already confirm'
      },
      notPendingConfirmation: {
        code: 'security-7-3',
        message: 'Not pending confirmation'
      },
      invalidCode: {
        code: 'security-7-4',
        message: 'Invalid confirmation code'
      },
      pendingKYC: {
        code: 'security-7-5',
        message: 'Pending KYC, please contact online support'
      }
    },
    login: {
      clientNotFound: {
        code: 'security-8-1',
        message: 'Client not found'
      },
      invalidPassword: {
        code: 'security-8-2',
        message: 'Invalid password'
      },
      clientNotConfirmed: {
        code: 'security-8-3',
        message: 'Pending email confirmation'
      },
      invalidClientStatus: {
        code: 'security-8-4',
        message: 'Invalid client status'
      },
      pendingChangePassword: {
        code: 'security-8-5',
        message: 'Client has pending change password'
      },
      invalidDevice: {
        code: 'security-8-6',
        message: 'Invalid device'
      },
    },
    isEmailVerified: {
      clientNotFound: {
        code: 'security-9-1',
        message: 'Client not found'
      }
    },
    logout: {
      invalidCredentials: {
        code: 'security-10-1',
        message: 'Invalid credentials'
      }
    },
    forgotPassword: {
      clientNotFound: {
        code: 'security-11-1',
        message: 'Client not found'
      },
      invalidClientStatus: {
        code: 'security-11-2',
        message: 'Invalid client status'
      }
    },
    changePassword: {
      clientNotFound: {
        code: 'security-12-1',
        message: 'Client not found'
      },
      invalidClientStatus: {
        code: 'security-12-2',
        message: 'Invalid client status'
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
