/*
 WINK_HTTP_CODE|ES_DESCRIPTION
 */

/*
 
 Forma del código
 w-X-Y-A
 
 X: sección
 Y: subsección
 A: código de error (contador)
 */

const internalErrors = {
  generic: {},
  signUp: {
    checkEmail: {
      INTERNAL_ERROR: {
        code: 'w-1-0-1',
        type: 'INTERNAL_ERROR',
        httpStatus: 409,
        message: 'Error looking for email'
      },
      INVALID_INPUT: {
        code: 'w-1-0-1',
        httpStatus: 409,
        message: 'Invalid input'
      },
      EMAIL_TAKEN: {
        code: 'w-1-0-2',
        httpStatus: 409,
        message: 'Email taken'
      }
    },
    requestPhoneValidationId: {
      INTERNAL_ERROR: {
        code: 'w-1-1-0',
        httpStatus: 409,
        message: 'Error looking for email'
      },
      INVALID_INPUT: {
        code: 'w-1-1-1',
        httpStatus: 409,
        message: 'Invalid input'
      },
      PHONE_TAKEN: {
        code: 'w-1-1-2',
        httpStatus: 409,
        message: 'Phone taken'
      },
      SENDING_ERROR: {
        code: 'w-1-1-3',
        httpStatus: 409,
        message: 'Error sending confirmation code'
      }
    },
    validatePhone: {
      INTERNAL_ERROR: {
        code: 'w-1-2-0',
        httpStatus: 409,
        message: 'Error validation phone'
      },
      INVALID_INPUT: {
        code: 'w-1-2-1',
        httpStatus: 409,
        message: 'Invalid input'
      },
      VALIDATION: {
        code: 'w-1-2-2',
        httpStatus: 409,
        message: 'Invalid confirmation code'
      }
    },
    checkProfile: {
      INTERNAL_ERROR: {
        code: 'w-1-3-0',
        httpStatus: 409,
        message: 'Error looking for person'
      },
      INVALID_INPUT: {
        code: 'w-1-3-1',
        httpStatus: 409,
        message: 'Invalid input'
      },
      PERSON_NOT_EXIST: {
        code: 'w-1-3-2',
        httpStatus: 409,
        message: 'Person does not exist'
      },
      INCORRECT_DOCUMENT_TYPE: {
        code: 'w-1-3-3',
        httpStatus: 409,
        message: 'Incorrect document type'
      },
      DOCUMENT_EXPIRED: {
        code: 'w-1-3-4',
        httpStatus: 409,
        message: 'Document expired'
      },
      DEAD_PERSON: {
        code: 'w-1-3-5',
        httpStatus: 409,
        message: 'Dead person'
      },
      INVALID_NAME: {
        code: 'w-1-3-6',
        httpStatus: 409,
        message: 'Invalid name'
      },
      INVALID_LAST_NAME: {
        code: 'w-1-3-7',
        httpStatus: 409,
        message: 'Invalid lastName'
      },
      ID_NUMBER_TAKEN: {
        code: 'w-1-3-8',
        httpStatus: 409,
        message: 'Identification number taken'
      }
    },
    uploadProfile: {
      INTERNAL_ERROR: {
        code: 'w-1-4-0',
        httpStatus: 409,
        message: 'Error uploading profile picture'
      },
      INVALID_INPUT: {
        code: 'w-1-4-1',
        httpStatus: 409,
        message: 'Invalid input'
      }
    },
    registerUser: {
      INTERNAL_ERROR: {
        code: 'w-1-5-0',
        httpStatus: 409,
        message: 'Error registering user'
      },
      INVALID_INPUT: {
        code: 'w-1-5-1',
        httpStatus: 409,
        message: 'Invalid input'
      },
      EMAIL_TAKEN: {
        code: 'w-1-5-2',
        httpStatus: 409,
        message: 'Email taken'
      }
    },
    verifyUser: {
      INTERNAL_ERROR: {
        code: 'w-1-6-0',
        httpStatus: 409,
        message: 'Error verifying user'
      },
      INVALID_INPUT: {
        code: 'w-1-6-1',
        httpStatus: 409,
        message: 'Invalid input'
      },
      INVALID_VERIFICATION_CODE: {
        code: 'w-1-6-2',
        httpStatus: 409,
        message: 'Invalid verification code'
      },
      EXPIRED_VERIFICATION_CODE: {
        code: 'w-1-6-3',
        httpStatus: 409,
        message: 'Verification code expired'
      },
      USER_ALREADY_CONFIRMED: {
        code: 'w-1-6-4',
        httpStatus: 409,
        message: 'User already confirmed'
      },
      USER_NOT_FOUND: {
        code: 'w-1-6-5',
        httpStatus: 409,
        message: 'User not found'
      }
    },
    resendCode: {
      INTERNAL_ERROR: {
        code: 'w-1-7-0',
        httpStatus: 409,
        message: 'Error sending verification code'
      },
      INVALID_INPUT: {
        code: 'w-1-7-1',
        httpStatus: 409,
        message: 'Invalid input'
      },
      USER_ALREADY_CONFIRMED: {
        code: 'w-1-7-2',
        httpStatus: 409,
        message: 'User already confirmed'
      },
      USER_NOT_FOUND: {
        code: 'w-1-7-3',
        httpStatus: 409,
        message: 'User not found'
      }
    },
    emailConfirmed: {
      INTERNAL_ERROR: {
        code: 'w-1-8-0',
        httpStatus: 409,
        message: 'Error looking for user status'
      },
      INVALID_INPUT: {
        code: 'w-1-8-1',
        httpStatus: 409,
        message: 'Invalid input'
      },
      USER_NOT_FOUND: {
        code: 'w-1-8-2',
        httpStatus: 409,
        message: 'User not found'
      }
    },
    createProfile: {
      INTERNAL_ERROR: {
        code: 'w-1-9-0',
        type: 'INTERNAL_ERROR',
        httpStatus: 409,
        message: 'Error creating user profile'
      }
    },
    definePin: {
      INTERNAL_ERROR: {
        code: 'w-1-10-0',
        type: 'INTERNAL_ERROR',
        httpStatus: 409,
        message: 'Error setting user pin'
      },
      INVALID_PIN_LENGTH: {
        code: 'w-1-10-1',
        type: 'INVALID_PIN_LENGTH',
        httpStatus: 409,
        message: 'Error invalid pin length'
      }
    }
  },
  auth: {
    login: {
      INTERNAL_ERROR: {
        code: 'w-2-0-0',
        httpStatus: 409,
        message: 'Error loging in'
      },
      INVALID_INPUT: {
        code: 'w-2-0-1',
        httpStatus: 409,
        message: 'Invalid input'
      },
      USER_NOT_FOUND: {
        code: 'w-2-0-2',
        httpStatus: 409,
        message: 'User not found'
      },
      USER_NOT_CONFIRMED: {
        code: 'w-2-0-3',
        httpStatus: 409,
        message: 'User not confirmed'
      },
      INVALID_CREDENTIALS: {
        code: 'w-2-0-4',
        httpStatus: 409,
        message: 'Invalid credentials'
      }
    },
    logout: {
      INTERNAL_ERROR: {
        code: 'w-2-1-0',
        httpStatus: 409,
        message: 'Error logout'
      },
      INVALID_INPUT: {
        code: 'w-2-1-1',
        httpStatus: 409,
        message: 'Invalid input'
      },
      INVALID_CREDENTIALS: {
        code: 'w-2-1-2',
        httpStatus: 409,
        message: 'Not Authorized'
      }
    },
    refreshToken: {
      INTERNAL_ERROR: {
        code: 'w-2-2-0',
        httpStatus: 409,
        message: 'Error refreshing token'
      },
      INVALID_INPUT: {
        code: 'w-2-2-1',
        httpStatus: 409,
        message: 'Invalid input'
      }
    },
    passwordForgot: {
      INTERNAL_ERROR: {
        code: 'w-2-3-0',
        httpStatus: 409,
        message: 'Error sending reset password email'
      },
      INVALID_INPUT: {
        code: 'w-2-3-1',
        httpStatus: 409,
        message: 'Invalid input'
      },
      USER_NOT_EXIST: {
        code: 'w-2-3-2',
        httpStatus: 409,
        message: 'User does not exist'
      }
    },
    passwordChange: {
      INTERNAL_ERROR: {
        code: 'w-2-4-0',
        httpStatus: 409,
        message: 'Error changing password'
      },
      INVALID_INPUT: {
        code: 'w-2-4-1',
        httpStatus: 409,
        message: 'Invalid input'
      },
      INVALID_CREDENTIALS: {
        code: 'w-2-4-2',
        httpStatus: 409,
        message: 'Not Authorized'
      }
    },
    passwordReset: {
      INTERNAL_ERROR: {
        code: 'w-2-5-0',
        httpStatus: 409,
        message: 'Error resetting password'
      },
      INVALID_INPUT: {
        code: 'w-2-5-1',
        httpStatus: 409,
        message: 'Invalid input'
      },
      USER_NOT_EXIST: {
        code: 'w-2-5-2',
        httpStatus: 409,
        message: 'User does not exist'
      },
      EXPIRED_VERIFICATION_CODE: {
        code: 'w-2-5-3',
        httpStatus: 409,
        message: 'Verification code expired'
      },
      INVALID_VERIFICATION_CODE: {
        code: 'w-2-5-4',
        httpStatus: 409,
        message: 'Invalid verification code'
      }
    }
  },
  // X = 3
  localPayments: {
    // Y = 0
    addAccount: {
      INTERNAL_ERROR: {
        code: 'w-3-0-0',
        httpStatus: 409,
        message: 'Error checking bank account'
      },
      ACCOUNT_NOT_EXIST: {
        code: 'w-3-0-1',
        externalCodes: '3011',
        httpStatus: 409,
        message: 'Account not exist'
      },
      BLOCKED_ACCOUNT: {
        code: 'w-3-0-2',
        externalCodes: '3034',
        httpStatus: 409,
        message: 'Blocked account'
      },
      CLOSED_ACCOUNT: {
        code: 'w-3-0-3',
        externalCodes: '3035',
        httpStatus: 409,
        message: 'Closed account'
      },
      INVALID_ACCOUNT_NUMBER: {
        code: 'w-3-0-4',
        externalCodes: '9025,9033',
        httpStatus: 409,
        message: 'Invalid account number'
      },
      ALREADY_SAVED: {
        code: 'w-3-0-5',
        externalCodes: '',
        httpStatus: 409,
        message: 'Account already saved'
      }
    },
    reloadMoney: {
      INTERNAL_ERROR: {
        code: 'w-3-1-0',
        httpStatus: 409,
        message: 'Error reloading money'
      },
      INVALID_INPUT: {
        code: 'w-3-1-1',
        httpStatus: 409,
        message: 'Invalid Input'
      },
      INVALID_ORIGIN_ACCOUNT: {
        code: 'w-3-1-2',
        httpStatus: 409,
        message: 'Invalid deposit account'
      },
      INVALID_DESTINATION_ACCOUNT: {
        code: 'w-3-1-3',
        httpStatus: 409,
        message: 'Invalid source account'
      },
      INVALID_PIN: {
        code: 'w-3-1-4',
        httpStatus: 409,
        message: 'Invalid pin'
      }
    }
  },
  coreBase: {
    createCustomer: {
      INTERNAL_ERROR: {
        code: 'w-4-0-0',
        httpStatus: 409,
        message: 'Error creating core bank account'
      },
      INVALID_INPUT: {
        code: 'w-4-0-1',
        httpStatus: 409,
        message: 'Invalid input'
      }
    }
  },
  account: {
    externalAccounts: {
      INTERNAL_ERROR: {
        code: 'w-5-0-0',
        httpStatus: 409,
        message: 'Error getting external accounts'
      },
      INVALID_INPUT: {
        code: 'w-5-0-1',
        httpStatus: 409,
        message: 'Invalid input'
      },
      USER_NOT_FOUND: {
        code: 'w-5-0-2',
        httpStatus: 409,
        message: 'User not found'
      }
    },
    sendMoneyInternal: {
      INTERNAL_ERROR: {
        code: 'w-5-1-0',
        httpStatus: 409,
        message: 'Error sending money internal accounts'
      },
      INVALID_INPUT: {
        code: 'w-5-1-1',
        httpStatus: 409,
        message: 'Invalid Input'
      },
      INVALID_PIN: {
        code: 'w-5-1-2',
        httpStatus: 409,
        message: 'Invalid pin'
      },
      INVALID_DESTINATION_ACCOUNT: {
        code: 'w-5-1-3',
        httpStatus: 409,
        message: 'Invalid destination account'
      },
      SAME_ORIGIN_DESTINATION: {
        code: 'w-5-1-4',
        httpStatus: 409,
        message: 'Invalid destination account'
      },
      INSUFFICIENT_FUNDS: {
        code: 'w-5-1-5',
        httpStatus: 409,
        message: 'Error insufficient funds'
      }
    },
    sendMoneyExternal: {
      INTERNAL_ERROR: {
        code: 'w-5-2-0',
        httpStatus: 409,
        message: 'Error sending money external accounts'
      },
      INVALID_INPUT: {
        code: 'w-5-2-1',
        httpStatus: 409,
        message: 'Invalid Input'
      },
      NOTIFICATION_ERROR_EMAIL: {
        code: 'w-5-2-3',
        httpStatus: 409,
        message: 'Error sending notification'
      },
      INVALID_PIN: {
        code: 'w-5-2-4',
        httpStatus: 409,
        message: 'Invalid pin'
      },
      INSUFFICIENT_FUNDS: {
        code: 'w-5-2-5',
        httpStatus: 409,
        message: 'Error insufficient funds'
      },
      INVALID_DESTINATION_ACCOUNT: {
        code: 'w-5-2-6',
        httpStatus: 409,
        message: 'Invalid destination account'
      }
    }
  },
  servicePayments: {
    payService: {
      INTERNAL_ERROR: {
        code: 'w-6-1-0',
        httpStatus: 409,
        message: 'Error paying service'
      },
      INVALID_INPUT: {
        code: 'w-6-1-1',
        httpStatus: 409,
        message: 'Invalid Input'
      },
      INVALID_PIN: {
        code: 'w-6-1-2',
        httpStatus: 409,
        message: 'Invalid pin'
      },
      INSUFFICIENT_FUNDS: {
        code: 'w-6-1-3',
        httpStatus: 409,
        message: 'Error insufficient funds'
      }
    }
  },
  envelopes: {
    createEnvelopeBudget: {
      INTERNAL_ERROR: {
        code: 'w-7-0-0',
        httpStatus: 409,
        message: 'Error creating envelope budget'
      },
      INVALID_INPUT: {
        code: 'w-7-0-1',
        httpStatus: 409,
        message: 'Invalid Input'
      },
      INSUFFICIENT_FUNDS: {
        code: 'w-7-0-2',
        httpStatus: 409,
        message: 'Error insufficient funds'
      }
    },
    createEnvelopeSavings: {
      INTERNAL_ERROR: {
        code: 'w-7-1-0',
        httpStatus: 409,
        message: 'Error creating envelope saving'
      },
      INVALID_INPUT: {
        code: 'w-7-1-1',
        httpStatus: 409,
        message: 'Invalid Input'
      },
      INSUFFICIENT_FUNDS: {
        code: 'w-7-1-2',
        httpStatus: 409,
        message: 'Error insufficient funds'
      }
    },
    deleteEnvelope: {
      INTERNAL_ERROR: {
        code: 'w-7-2-0',
        httpStatus: 409,
        message: 'Error deleting envelope'
      },
      INVALID_INPUT: {
        code: 'w-7-2-1',
        httpStatus: 409,
        message: 'Invalid Input'
      }
    },
    changeNameEnvelope: {
      INTERNAL_ERROR: {
        code: 'w-7-3-0',
        httpStatus: 409,
        message: 'Error changing envelope name'
      },
      INVALID_INPUT: {
        code: 'w-7-3-1',
        httpStatus: 409,
        message: 'Invalid Input'
      }
    },
    addFundsEnvelope: {
      INTERNAL_ERROR: {
        code: 'w-7-4-0',
        httpStatus: 409,
        message: 'Error adding envelope funds'
      },
      INVALID_INPUT: {
        code: 'w-7-4-1',
        httpStatus: 409,
        message: 'Invalid Input'
      },
      INSUFFICIENT_FUNDS: {
        code: 'w-7-4-2',
        httpStatus: 409,
        message: 'Error insufficient funds'
      }
    },
    transferFundsToCard: {
      INTERNAL_ERROR: {
        code: 'w-7-5-0',
        httpStatus: 409,
        message: 'Error transferring envelope funds'
      },
      INVALID_INPUT: {
        code: 'w-7-5-1',
        httpStatus: 409,
        message: 'Invalid Input'
      }
    },
    getEnvelopes: {
      INTERNAL_ERROR: {
        code: 'w-7-5-0',
        httpStatus: 409,
        message: 'Error getting envelopes'
      },
      INVALID_INPUT: {
        code: 'w-7-5-1',
        httpStatus: 409,
        message: 'Invalid Input'
      }
    }
  },
  requestMoney: {
    create: {
      INTERNAL_ERROR: {
        code: 'w-8-0-0',
        httpStatus: 409,
        message: 'Error creating request money'
      },
      INVALID_INPUT: {
        code: 'w-8-0-1',
        httpStatus: 409,
        message: 'Invalid Input'
      }
    },
    list: {
      INTERNAL_ERROR: {
        code: 'w-8-1-0',
        httpStatus: 409,
        message: 'Error listing request money'
      },
      INVALID_INPUT: {
        code: 'w-8-1-1',
        httpStatus: 409,
        message: 'Invalid Input'
      }
    }
  }
}

const external = {
  // GENERAL: {
  '-2': '409|Se presentó un error no especificado con los Sistemas Internos al procesar su solicitud',
  '-1': '409|Problemas de comunicación con los Sistemas Internos al procesar su solicitud',
  '1': '409|Error general al procesar la transacción',
  '2': '409|OTP inválido',
  '5': '409|La dirección de correo no es válida: {0}',
  '6': '409|El número de teléfono {0} es inválido',
  '7': '409|Usuario no autorizado para ejecutar la función solicitada',
  '8': '409|Número de identificación inválido',
  '9': '409|El número de tarjeta {0} no es válido',
  '10': '409|El tipo de OTP {0} no es válido',
  '20': '409|El rango máximo de días consecutivos a consultar es {0}',
  '21': '409|Rango de montos incorrecto. El monto inicial de ser mayor o igual que el monto final',
  '22': '409|Rango de fechas incorrecto. La fecha inicial debe ser mayor o igual que la fecha final', // TODO: check with Chritian
  '23': '409|Fondos insuficientes para procesar la transacción',
  '24': '409|El monto de la transacción debe ser mayor que cero',
  '25': '409|El monto de la transacción debe ser mayor o igual que cero',
  '34': '409|La dirección IP indica es inválida',
  '38': '409|El código de estado civil {0} es incorrecto',
  '39': '409|El código de sexo {0} es incorrecto',
  '40': '409|El tipo de cliente {0} es incorrecto',
  '41': '409|El código de grado académico {0} es incorrecto',
  '42': '409|El código de profesión {0} es incorrecto',
  '43': '409|El código de tipo de dirección {0} es incorrecto',
  '44': '409|El código de país {0} es incorrecto',
  '45': '409|El código de división política {0} de nivel {1} es incorrecto',
  '46': '409|El código de tipo de teléfono {0} es incorrecto',
  '47': '409|El código de tipo de correo electrónico {0} es incorrecto',
  '48': '409|El ingreso salarial debe ser un valor numérico mayor que cero',
  '52': '409|La fecha {0} no es válida',
  '53': '409|El tipo de identificación {0} del cliente es inválida',
  // },
  // BASE_CORE: {
  // },
  // CREDIT_CARDS: {
  // },
  // ACCOUNTS: {
  '3034': '409|La cuenta destino {0} se encuentra bloqueada',
  '3035': '409|La cuenta destino {0} se encuentra cerrada',
  // },
  // INVESTMENTS: {
  // },
  // LEASING: {
  // },
  // LOANS: {
  // },
  // SECURITY_CENTER: {
  '7020': '409|Host no autorizado para utilizar la plataforma',
  '7021': '409|Dirección IP del Host no autorizada para utilizar la plataforma',
  '7022': '409|El País y/o Canal indicado no está autorizado para utilizar la plataforma',
  '7023': '409|No tiene una sesión activa para ejecutar la transacción',
  // },
  // PAYMENT_SERVICES: {
  // },
  // TRANSFERS: {
  '9022': '409|El formato de identificación del cliente ordenante es incorrecto',
  '9025': '409|El número de la cuenta destino es incorrecto',
  '9028': '409|Problemas de comunicación con el Sistema Nacional de Pagos para procesar su consulta o transacción',
  '9029': '409|La Entidad Financiera destino de la transferencia no puede procesar su transacción',
  '9032': '409|La cuenta del cliente destino no existe',
  '9033': '409|El número de la cuenta a consultar es incorrecto'
  // }
}

function buildErrorResponse (error = {}, description = '') {
  let customError = new Error()
  customError.message = error.message || 'Unexpected error'
  customError.httpStatus = error.httpStatus || 409
  customError.code = error.code || 'w-0-1-0'
  customError.description = description
  return customError
}

// ALL 1, 7, 3011, 3034, 3035, 7020-7023, 9022, 9025, 9028, 9029, 9033
function getAccountInfoError (errors) {
  if (errors['3011']) {
    return internalErrors.localPayments.addAccount.ACCOUNT_NOT_EXIST
  } else if (errors['3034']) {
    return internalErrors.localPayments.addAccount.BLOCKED_ACCOUNT
  } else if (errors['3035']) {
    return internalErrors.localPayments.addAccount.CLOSED_ACCOUNT
  } else if (errors['9025'] || errors['9033']) {
    return internalErrors.localPayments.addAccount.INVALID_ACCOUNT_NUMBER
  } else {
    return internalErrors.localPayments.addAccount.INTERNAL_ERROR
  }
}

// TODO: implement
function getSendDebitTransferError (errors) {
}

// TODO: implement
function getSendTransferError (errors) {
}

module.exports = {
  external,
  internalErrors,
  buildErrorResponse,
  translator: {
    getAccountInfoError,
    getSendDebitTransferError,
    getSendTransferError
  }
}
