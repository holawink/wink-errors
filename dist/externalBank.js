'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _internalBank = require('./internalBank');

var _internalBank2 = _interopRequireDefault(_internalBank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const externalErrors = {
  DEFAULT: {
    description: 'Error desconocido en el sistema externo',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '-2': {
    description: 'Se presentó un error no especificado con los Sistemas Internos al procesar su solicitud',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '-1': {
    description: 'Problemas de comunicación con los Sistemas Internos al procesar su solicitud',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '1': {
    description: 'Se ha presentado un problema. Por favor intente mas tarde nuevamente',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '2': {
    description: 'Se requiere el valor para el campo {0}',
    error: _internalBank2.default.INVALID_INPUT
  },
  '5': {
    description: 'El correo electrónico {0} es inválido',
    error: _internalBank2.default.INVALID_EMAIL
  },
  '6': {
    description: 'El número de teléfono {0} es inválido.',
    error: _internalBank2.default.INVALID_INPUT
  },
  '7': {
    description: 'Usuario no autorizado para ejecutar la función solicitada',
    error: _internalBank2.default.ACCESS_DENIED
  },
  '8': {
    description: 'Número de identificación inválido',
    error: _internalBank2.default.INVALID_IDENTITY_NUMBER
  },
  '9': {
    description: 'El número de tarjeta {0} no es válido',
    error: _internalBank2.default.INVALID_CARD_NUMBER
  },
  '12': {
    description: 'El tipo de tarjeta {0} es inválido',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '14': {
    description: 'Identificación Invalida',
    error: _internalBank2.default.INVALID_IDENTITY_NUMBER
  },
  '23': {
    description: 'Fondos insuficientes para procesar la transacción',
    error: _internalBank2.default.INSUFFICIENT_FUNDS
  },
  '24': {
    description: 'El monto de la transacción debe ser mayor que cero.',
    error: _internalBank2.default.AMOUNT_MUST_BE_POSITIVE
  },
  '38': {
    description: 'El estado civil {0} es inválido',
    error: _internalBank2.default.INVALID_INPUT
  },
  '39': {
    description: 'El sexo {0} es inválido',
    error: _internalBank2.default.INVALID_INPUT
  },
  '44': {
    description: 'El código de país {0} es incorrecto',
    error: _internalBank2.default.INVALID_INPUT
  },
  '45': {
    description: 'El código de división política {0} de nivel {1} es incorrecto',
    error: _internalBank2.default.INVALID_PLACE
  },
  '52': {
    description: 'La fecha {0} no es válida',
    error: _internalBank2.default.INVALID_INPUT
  },
  '53': {
    description: 'El tipo de identificación {0} es inválido',
    error: _internalBank2.default.INVALID_INPUT
  },
  '54': {
    description: 'El código de provincia {0} no es válido',
    error: _internalBank2.default.INVALID_INPUT
  },
  '55': {
    description: 'El código de cantón {0} no es válido',
    error: _internalBank2.default.INVALID_INPUT
  },
  '56': {
    description: 'El código de distrito {0} no es válido',
    error: _internalBank2.default.INVALID_INPUT
  },
  '58': {
    description: 'El tipo de dirección {0} es inválida',
    error: _internalBank2.default.INVALID_INPUT
  },
  '59': {
    description: 'El tipo de teléfono {0} es inválido',
    error: _internalBank2.default.INVALID_INPUT
  },
  '66': {
    description: 'La sucursal {0} {1} es inválida',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '1010': {
    description: 'El código de cliente {0} no existe',
    error: _internalBank2.default.CLIENT_NOT_FOUND
  },
  '3004': {
    description: 'Número de cuenta inválida: {0}',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '3010': {
    description: 'La Cuenta Origen {0} no existe',
    error: _internalBank2.default.ORIGIN_ACCOUNT_NOT_EXIST
  },
  '3011': {
    description: 'La cuenta del cliente destino no existe',
    error: _internalBank2.default.DESTINATION_ACCOUNT_NOT_EXIST
  },
  '3012': {
    description: 'La Cuenta Origen {0} no se encuentra activa',
    error: _internalBank2.default.ORIGIN_ACCOUNT_IS_NOT_ACTIVE
  },
  '3013': {
    description: 'L.a Cuenta Destino {0} no se encuentra activa',
    error: _internalBank2.default.DESTINATION_ACCOUNT_IS_NOT_ACTIVE
  },
  '3014': {
    description: 'La Cuenta Origin {0} no permite ser debitada',
    error: _internalBank2.default.ORIGIN_ACCOUNT_NOT_ALLOW_DEBITED
  },
  '3017': {
    description: 'La Cuenta Destino {0} no permite ser acreditada',
    error: _internalBank2.default.DESTINATION_ACCOUNT_NOT_ALLOW_ACCREDITED
  },
  '3033': {
    description: 'No es posible definir la prioridad {0} a la cuenta No. {1} pues ya existe otra cuenta con ese número de prioridad definido',
    error: _internalBank2.default.REPEATED_PRIORITY
  },
  '3034': {
    description: 'La cuenta destino {0} se encuentra bloqueada',
    error: _internalBank2.default.DESTINATION_ACCOUNT_BLOCKED
  },
  '3035': {
    description: 'La cuenta destino {0} se encuentra cerrada',
    error: _internalBank2.default.DESTINATION_ACCOUNT_CLOSED
  },
  '3036': {
    description: 'El número de bloqueo no existe',
    error: _internalBank2.default.INVALID_BLOCK_MONEY
  },
  '3044': {
    description: 'No fue posible debitar su cuenta {0} para efectuar el pago del servicio.',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '7020': {
    description: 'Host no autorizado para utilizar la plataforma',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '7021': {
    description: 'IP del Host no autorizada para utilizar la plataforma',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '7022': {
    description: 'El País y/o Canal indicado no está autorizado para utilizar la plataforma',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '7023': {
    description: 'No tiene una sesión activa para ejecutar la transacción',
    error: _internalBank2.default.ACCESS_DENIED
  },
  '7024': {
    description: 'Código de usuario o contraseña inválida',
    error: _internalBank2.default.INVALID_CREDENTIALS
  },
  '7030': {
    description: 'El tipo de OTP seleccionado no le ha sido autorizado',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '7031': {
    description: 'El valor del OTP indicado es incorrecto.',
    error: _internalBank2.default.INVALID_OTP
  },
  '7032': {
    description: 'La contraseña no cumple con el formato requerido.',
    error: _internalBank2.default.INVALID_PASSWORD_FORMAT
  },
  '7033': {
    description: 'La nueva contraseña y su confirmación deben ser iguales.',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '7034': {
    description: 'La nueva contraseña debe ser diferente a las últimas {0} registradas',
    error: _internalBank2.default.REPEATED_PASSWORD
  },
  '7035': {
    description: 'El código de cliente debe ser un valor numérico mayor cero',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '7036': {
    description: 'No se encontró información para el código de cliente {0}',
    error: _internalBank2.default.CLIENT_NOT_FOUND
  },
  '7037': {
    description: 'El código de usuario debe ser un valor alfanumérico menor o igual a 100 caracteres.',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '7041': {
    description: 'El Cliente {0} con número de identificación {1} ya existe en el sistema',
    error: _internalBank2.default.IDENTITY_TAKEN
  },
  '7042': {
    description: 'Los Servicios del Core Bancario no están disponibles para obtener la información del cliente {0}',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '7043': {
    description: 'No fue posible verificar el valor del doble factor de autenticación para procesar su transacción',
    error: _internalBank2.default.UNEXPECTED_2FA_ERROR
  },
  '8000': {
    description: 'No fue posible obtener la información de pago del servicio consultado. Intente realizar la consulta nuevamente.',
    error: _internalBank2.default.UNEXPECTED_ERROR_SERVICE_PROVIDER
  },
  '8001': {
    description: 'No fue posible obtener la información de pago del servicio consultado. Intente realizar la consulta nuevamente.',
    error: _internalBank2.default.UNEXPECTED_ERROR_SERVICE_PROVIDER
  },
  '8002': {
    description: 'No fue posible realizar el pago del servicio Facturador={0}, Servicio={1}, Moneda={2}. No. Servicio={3} por el motivo ={4}',
    error: _internalBank2.default.UNEXPECTED_ERROR_SERVICE_PROVIDER
  },
  '8003': {
    description: 'No se encontraron pagos pendientes.',
    error: _internalBank2.default.NOT_PENDING_INVOICES
  },
  '9003': {
    description: 'Cuenta del cliente destino cerrada',
    error: _internalBank2.default.CLOSED_CLIENT_ACCOUNT
  },
  '9006': {
    description: 'Identificación del cliente destino no coincide con la registrada en la entidad.',
    error: _internalBank2.default.IDENTITY_AND_ACCOUNT_MISMATCH
  },
  '9005': {
    description: 'Cuenta Cliente bloqueada.',
    error: _internalBank2.default.BLOCKED_CLIENT_ACCOUNT
  },
  '9020': {
    description: 'Monto no autorizado',
    error: _internalBank2.default.UNAUTHORIZED_AMOUNT
  },
  '9021': {
    description: 'Entidad excluida del sistema SINPE',
    error: _internalBank2.default.FINANCIAL_ENTITY_EXCLUDED
  },
  '9022': {
    description: 'Reversion Por SINPE',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '9023': {
    description: 'El formato de identificación del cliente destino es incorrecto',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '9024': {
    description: 'El número de la cuenta origen es incorrecto',
    error: _internalBank2.default.INVALID_ORIGIN_ACCOUNT_NUMBER
  },
  '9025': {
    description: 'El número de la cuenta destino es incorrecto',
    error: _internalBank2.default.INVALID_DESTINATION_ACCOUNT_NUMBER
  },
  '9026': {
    description: 'La moneda de la cuenta destino y la transferencia deben ser iguales',
    error: _internalBank2.default.ORIGIN_AND_DESTINATION_CURRENCY_MISMATCH
  },
  '9027': {
    description: 'The identification number of the destination account owner does not correspond with the registered number in the destination Financial Institution',
    error: _internalBank2.default.IDENTITY_AND_ACCOUNT_MISMATCH
  },
  '9028': {
    description: 'Problemas de comunicación con el Sistema Nacional de Pagos para procesar su consulta o transacción.',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '9029': {
    description: 'La Entidad Financiera destino de la transferencia no puede procesar su transacción',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '9030': {
    description: 'El servicio de transferencias a otras Entidades Financieras no está disponible',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '9031': {
    description: 'El formato del nombre del cliente destino es incorrecto',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '9033': {
    description: 'El número de la cuenta a consultar es incorrecto.',
    error: _internalBank2.default.INVALID_DESTINATION_ACCOUNT_NUMBER
  },
  '9034': {
    description: 'La Entidad Destino es inválida',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '9035': {
    description: 'No es posible procesar su transferencia, pues está fuera del horario permitido ({0} – {1})',
    error: _internalBank2.default.OUTSIDE_ALLOWED_TIME
  },
  '9036': {
    description: 'El cliente destino no autorizó la transacción',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '9037': {
    description: 'Fondos insuficientes de la Entidad Origen de la transferencia para procesar la transferencia en el Sistema Local de Pagos',
    error: _internalBank2.default.INSUFFICIENT_FUNDS
  },
  '9038': {
    description: 'No fue posible procesar su transferencia, intente nuevamente en unos momentos',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '9039': {
    description: 'Número de referencia de la transferencia incorrecto',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '9040': {
    description: 'El número de referencia de la transferencia no fue indicado',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '9046': {
    description: 'El formato del servicio a debitar es incorrecto',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '9047': {
    description: 'El formato del nombre del titular del servicio a debitar es incorrecto',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '10001': {
    description: 'No es posible completar el proceso de vinculación de cuentas de la tarjeta No. {0}, debido a que las siguientes cuentas seleccionadas no pertenecen al titular de la tarjeta: {1}',
    error: _internalBank2.default.ACCOUNT_NOT_BELONG_TO_CARD_HOLDER
  },
  '10005': {
    description: 'No es posible procesar la transacción solicitada, debido a que los datos de la Tarjeta de Débito {0} no pudieron ser verificados',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '10006': {
    description: 'No fue posible realizar el bloqueo de su tarjeta No. {0} en este momento.  Intente realizar la operación nuevamente.',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '10009': {
    description: 'No fue posible realizar el desbloqueo de su tarjeta No. {0} en este momento.  Intente realizar la operación nuevamente.',
    error: _internalBank2.default.UNEXPECTED_ERROR
  },
  '10010': {
    description: 'No es posible procesar la transacción solicitada pues la Tarjeta de Débito {0} pues no le pertenece',
    error: _internalBank2.default.CARD_NOT_BELONG_TO_CARD_HOLDER
  },
  '10011': {
    description: 'No es posible completar el proceso de vinculación de cuentas de la tarjeta No. {0}, debido a que las siguientes cuentas seleccionadas no pertenecen al titular de la tarjeta: {1}',
    error: _internalBank2.default.ACCOUNT_NOT_BELONG_TO_CARD_HOLDER
  },
  '10020': {
    description: 'La Tarjeta de Débito {0} no existe',
    error: _internalBank2.default.CARD_NUMBER_NOT_FOUND
  },
  '10021': {
    description: 'La tarjeta de débito {0} se encuentra en un estado que no permite ser modificado',
    error: _internalBank2.default.CARD_IS_IN_STATE_THAT_CAN_NOT_BE_MODIFIED
  },
  '10023': {
    description: 'La marca de la tarjeta de débito {0} es inválida',
    error: _internalBank2.default.INVALID_INPUT
  },
  '10024': {
    description: 'El tipo de la tarjeta de débito {0} es inválido',
    error: _internalBank2.default.INVALID_INPUT
  }
};

exports.default = externalErrors;