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
  },
  ACCESS_DENIED: {
    code: 'external-6',
    message: 'Access denied'
  },
  INVALID_OTP: {
    code: 'external-7',
    message: 'Invalid OTP value'
  },
  REPEATED_PASSWORD: {
    code: 'external-8',
    message: 'Please do not use a previous password'
  },
  INSUFFICIENT_FUNDS: {
    code: 'external-9',
    message: 'Insufficient funds to process the transaction'
  },
  AMOUNT_MUST_BE_POSITIVE:{
    code: 'external-10',
    message: 'The amount of the transaction must be greater than zero.'
  },
  ORIGIN_ACCOUNT_NOT_EXIST: {
    code: 'external-11',
    message: 'The Origin Account does not exist'
  },
  DESTINATION_ACCOUNT_NOT_EXIST: {
    code: 'external-12',
    message: 'The destination client account does not exist'
  },
  ORIGIN_ACCOUNT_IS_NOT_ACTIVE: {
    code: 'external-13',
    message: 'The Origin Account is not active'
  },
  DESTINATION_ACCOUNT_IS_NOT_ACTIVE: {
    code: 'external-14',
    message: 'Destination Account is not active'
  },
  ORIGIN_ACCOUNT_NOT_ALLOW_DEBITED: {
    code: 'external-15',
    message: 'The Origin Account does not allow to be debited'
  },
  UNEXPECTED_2FA_ERROR: {
    code: 'external-16',
    message: 'It was not possible to verify the value of the double authentication factor to process your transaction'
  },
  UNAUTHORIZED_AMOUNT:{
    code: 'external-17',
    message: 'Unauthorized amount'
  },
  FINANCIAL_ENTITY_EXCLUDED:{
    code: 'external-18',
    message: 'SINPE - Financial entity excluded'
  },
  INVALID_ORIGIN_ACCOUNT_NUMBER:{
    code: 'external-19',
    message: 'Invalid origin account number'
  },
  INVALID_DESTINATION_ACCOUNT_NUMBER:{
    code: 'external-20',
    message: 'Invalid destination account number'
  },
  ORIGIN_AND_DESTINATION_CURRENCY_MISMATCH: {
    code: 'external-21',
    message: 'Origin and destination currency need to be same'
  },
  IDENTITY_AND_ACCOUNT_MISMATCH: {
    code: 'external-22',
    message: 'The identification number of the destination account owner does not correspond with the registered number in the destination Financial Institution'
  },
  OUTSIDE_ALLOWED_TIME: {
    code: 'external-23',
    message: 'Transaction outside the allowed time'
  },
  DESTINATION_ACCOUNT_NOT_ALLOW_ACCREDITED: {
    code: 'external-24',
    message: 'The Destination Account does not allow to be accredited'
  },
  DESTINATION_ACCOUNT_BLOCKED: {
    code: 'external-25',
    message: 'The destination account is blocked'
  },
  UNEXPECTED_ERROR_SERVICE_PROVIDER: {
    code: 'external-27',
    message: 'It was not possible to obtain the payment information of the service consulted. Try to make the query again.'
  },
  NOT_PENDING_INVOICES: {
    code: 'external-26',
    message: 'No pending invoices'
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
  '7': {
    description: 'Usuario no autorizado para ejecutar la función solicitada',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '23': {
    description: 'Fondos insuficientes para procesar la transacción',
    error: internalErrors.INSUFFICIENT_FUNDS
  },
  '24': {
    description: 'El monto de la transacción debe ser mayor que cero.',
    error: internalErrors.AMOUNT_MUST_BE_POSITIVE
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
  '1010': {
    description: 'El código de cliente {0} no existe',
    error: internalErrors.CLIENT_NOT_FOUND
  },
  '3010': {
    description: 'La Cuenta Origen {0} no existe',
    error: internalErrors.ORIGIN_ACCOUNT_NOT_EXIST
  },
  '3011': {
    description: 'La cuenta del cliente destino no existe',
    error: internalErrors.DESTINATION_ACCOUNT_NOT_EXIST
  },
  '3012': {
    description: 'La Cuenta Origen {0} no se encuentra activa',
    error: internalErrors.ORIGIN_ACCOUNT_IS_NOT_ACTIVE
  },
  '3013': {
    description: 'L.a Cuenta Destino {0} no se encuentra activa',
    error: internalErrors.DESTINATION_ACCOUNT_IS_NOT_ACTIVE
  },
  '3014': {
    description: 'La Cuenta Origin {0} no permite ser debitada',
    error: internalErrors.ORIGIN_ACCOUNT_NOT_ALLOW_DEBITED
  },
  '3017': {
    description: 'La Cuenta Destino {0} no permite ser acreditada',
    error: internalErrors.DESTINATION_ACCOUNT_NOT_ALLOW_ACCREDITED
  },
  '3034': {
    description: 'La cuenta destino {0} se encuentra bloqueada',
    error: internalErrors.DESTINATION_ACCOUNT_BLOCKED
  },
  '3035': {
    description: 'La cuenta destino {0} se encuentra cerrada',
    error: internalErrors.DESTINATION_ACCOUNT_CLOSED
  },
  '3044': {
    description: 'No fue posible debitar su cuenta {0} para efectuar el pago del servicio.',
    error: internalErrors.UNEXPECTED_ERROR
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
  '7023': {
    description: 'No tiene una sesión activa para ejecutar la transacción',
    error: internalErrors.ACCESS_DENIED
  },
  '7024': {
    description: 'Código de usuario o contraseña inválida',
    error: internalErrors.INVALID_CREDENTIALS
  },
  '7030': {
    description: 'El tipo de OTP seleccionado no le ha sido autorizado',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '7031': {
    description: 'El valor del OTP indicado es incorrecto.',
    error: internalErrors.INVALID_OTP
  },
  '7032': {
    description: 'La contraseña no cumple con el formato requerido.',
    error: internalErrors.INVALID_PASSWORD_FORMAT
  },
  '7033': {
    description: 'La nueva contraseña y su confirmación deben ser iguales.',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '7034': {
    description: 'La nueva contraseña debe ser diferente a las últimas {0} registradas',
    error: internalErrors.REPEATED_PASSWORD
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
  '7043': {
    description: 'No fue posible verificar el valor del doble factor de autenticación para procesar su transacción',
    error: internalErrors.UNEXPECTED_2FA_ERROR
  },
  '8000': {
    description: 'No fue posible obtener la información de pago del servicio consultado. Intente realizar la consulta nuevamente.',
    error: internalErrors.UNEXPECTED_ERROR_SERVICE_PROVIDER
  },
  '8001': {
    description: 'No fue posible obtener la información de pago del servicio consultado. Intente realizar la consulta nuevamente.',
    error: internalErrors.UNEXPECTED_ERROR_SERVICE_PROVIDER
  },
  '8002': {
    description: 'No fue posible realizar el pago del servicio Facturador={0}, Servicio={1}, Moneda={2}. No. Servicio={3} por el motivo ={4}',
    error: internalErrors.UNEXPECTED_ERROR_SERVICE_PROVIDER
  },
  '8003': {
    description: 'No se encontraron pagos pendientes.',
    error: internalErrors.NOT_PENDING_INVOICES
  },
  '9020': {
    description: 'Monto no autorizado',
    error: internalErrors.UNAUTHORIZED_AMOUNT
  },
  '9021': {
    description: 'Entidad excluida del sistema SINPE',
    error: internalErrors.FINANCIAL_ENTITY_EXCLUDED
  },
  '9022': {
    description: 'Reversion Por SINPE',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '9023': {
    description: 'El formato de identificación del cliente destino es incorrecto',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '9024': {
    description: 'El número de la cuenta origen es incorrecto',
    error: internalErrors.INVALID_ORIGIN_ACCOUNT_NUMBER
  },
  '9025': {
    description: 'El número de la cuenta destino es incorrecto',
    error: internalErrors.INVALID_DESTINATION_ACCOUNT_NUMBER
  },
  '9026': {
    description: 'La moneda de la cuenta destino y la transferencia deben ser iguales',
    error: internalErrors.ORIGIN_AND_DESTINATION_CURRENCY_MISMATCH
  },
  '9027': {
    description: 'The identification number of the destination account owner does not correspond with the registered number in the destination Financial Institution',
    error: internalErrors.IDENTITY_AND_ACCOUNT_MISMATCH
  },
  '9028': {
    description: 'Problemas de comunicación con el Sistema Nacional de Pagos para procesar su consulta o transacción.',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '9029': {
    description: 'La Entidad Financiera destino de la transferencia no puede procesar su transacción',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '9030': {
    description: 'El servicio de transferencias a otras Entidades Financieras no está disponible',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '9031': {
    description: 'El formato del nombre del cliente destino es incorrecto',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '9034': {
    description: 'La Entidad Destino es inválida',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '9035': {
    description: 'No es posible procesar su transferencia, pues está fuera del horario permitido ({0} – {1})',
    error: internalErrors.OUTSIDE_ALLOWED_TIME
  },
  '9036': {
    description: 'El cliente destino no autorizó la transacción',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '9037': {
    description: 'Fondos insuficientes de la Entidad Origen de la transferencia para procesar la transferencia en el Sistema Local de Pagos',
    error: internalErrors.INSUFFICIENT_FUNDS
  },
  '9038': {
    description: 'No fue posible procesar su transferencia, intente nuevamente en unos momentos',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '9039': {
    description: 'Número de referencia de la transferencia incorrecto',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '9040': {
    description: 'El número de referencia de la transferencia no fue indicado',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '9046': {
    description: 'El formato del servicio a debitar es incorrecto',
    error: internalErrors.UNEXPECTED_ERROR
  },
  '9047': {
    description: 'El formato del nombre del titular del servicio a debitar es incorrecto',
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
