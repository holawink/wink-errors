const internalErrors = {
  UNEXPECTED_ERROR: {
    code: 'external-1',
    message: 'Unexpected external error'
  },
  INVALID_INPUT: {
    code: 'external-1',
    message: 'Invalid input, please check values'
  }
}

const externalErrors = {
  '-2': {
    message: 'Se presentó un error no especificado con los Sistemas Internos al procesar su solicitud',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '-1': {
    message: 'Problemas de comunicación con los Sistemas Internos al procesar su solicitud',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '1': {
    message: 'Se ha presentado un problema. Por favor intente mas tarde nuevamente',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '2': {},
  '6': {},
  '38': {},
  '39': {},
  '44': {},
  '52': {},
  '53': {},
  '54': {},
  '55': {},
  '56': {},
  '58': {},
  '59': {},
  '7020': {},
  '7021': {},
  '7022': {},
  '10023': {},
  '10024': {}
}


export default errors