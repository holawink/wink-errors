const internalErrors = {
  UNEXPECTED_ERROR: {
    code: 'external-1',
    message: 'Unexpected external error'
  },
  INVALID_INPUT: {
    code: 'external-2',
    message: 'Invalid input, please check values'
  },
  INVALID_PASSWORD_FORMAT: {
    code: 'external-3',
    message: 'The password does not comply with the required format.'
  },
  CLIENT_NOT_FOUND: {
    code: 'external-4',
    message: 'Client not found'
  },
  IDENTITY_TAKEN: {
    code: 'external-5',
    message: 'Id document has been token'
  }
}

const externalErrors = {
  'DEFAULT': {
    description: 'Error desconocido en el sistema externo',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '-2': {
    description: 'Se presentó un error no especificado con los Sistemas Internos al procesar su solicitud',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '-1': {
    description: 'Problemas de comunicación con los Sistemas Internos al procesar su solicitud',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '1': {
    description: 'Se ha presentado un problema. Por favor intente mas tarde nuevamente',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '2': {
    description: 'Se requiere el valor para el campo {0}',
    error: internalErrors.INVALID_INPUT
  },
  '6': {
    description: 'El número de teléfono {0} es inválido.',
    error: internalErrors.INVALID_INPUT
  },
  '38': {
    description: 'El estado civil {0} es inválido',
    error: internalErrors.INVALID_INPUT
  },
  '39': {
    description: 'El sexo {0} es inválido',
    error: internalErrors.INVALID_INPUT
  },
  '44': {
    description: 'El código de país {0} es incorrecto',
    error: internalErrors.INVALID_INPUT
  },
  '52': {
    description: 'La fecha {0} no es válida',
    error: internalErrors.INVALID_INPUT
  },
  '53': {
    description: 'El tipo de identificación {0} es inválido',
    error: internalErrors.INVALID_INPUT
  },
  '54': {
    description: 'El código de provincia {0} no es válido',
    error: internalErrors.INVALID_INPUT
  },
  '55': {
    description: 'El código de cantón {0} no es válido',
    error: internalErrors.INVALID_INPUT
  },
  '56': {
    description: 'El código de distrito {0} no es válido',
    error: internalErrors.INVALID_INPUT
  },
  '58': {
    description: 'El tipo de dirección {0} es inválida',
    error: internalErrors.INVALID_INPUT
  },
  '59': {
    description: 'El tipo de teléfono {0} es inválido',
    error: internalErrors.INVALID_INPUT
  },
  '7020': {
    description: 'Host no autorizado para utilizar la plataforma',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '7021': {
    description: 'IP del Host no autorizada para utilizar la plataforma',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '7022': {
    description: 'El País y/o Canal indicado no está autorizado para utilizar la plataforma',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '7032': {
    description: 'La contraseña no cumple con el formato requerido.',
    error: internalErrors.INVALID_PASSWORD_FORMAT
  },
  '7035': {
    description: 'El código de cliente debe ser un valor numérico mayor cero',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '7036': {
    description: 'No se encontró información para el código de cliente {0}',
    error: internalErrors.CLIENT_NOT_FOUND
  },
  '7037': {
    description: 'El código de usuario debe ser un valor alfanumérico menor o igual a 100 caracteres.',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '7041': {
    description: 'El Cliente {0} con número de identificación {1} ya existe en el sistema',
    error: internalErrors.IDENTITY_TAKEN
  },
  '7042': {
    description: 'Los Servicios del Core Bancario no están disponibles para obtener la información del cliente {0}',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '10023': {
    description: 'La marca de la tarjeta de débito {0} es inválida',
    error: internalErrors.INVALID_INPUT
  },
  '10024': {
    description: 'El tipo de la tarjeta de débito {0} es inválido',
    error: internalErrors.INVALID_INPUT
  }
}


export default externalErrors