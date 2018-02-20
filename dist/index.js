'use strict';

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _general = require('./general');

var _general2 = _interopRequireDefault(_general);

var _cards = require('./cards');

var _cards2 = _interopRequireDefault(_cards);

var _profile = require('./profile');

var _profile2 = _interopRequireDefault(_profile);

var _account = require('./account');

var _account2 = _interopRequireDefault(_account);

var _envelopes = require('./envelopes');

var _envelopes2 = _interopRequireDefault(_envelopes);

var _preRegister = require('./preRegister');

var _preRegister2 = _interopRequireDefault(_preRegister);

var _reloadMoney = require('./reloadMoney');

var _reloadMoney2 = _interopRequireDefault(_reloadMoney);

var _sendMoney = require('./sendMoney');

var _sendMoney2 = _interopRequireDefault(_sendMoney);

var _servicePayments = require('./servicePayments');

var _servicePayments2 = _interopRequireDefault(_servicePayments);

var _pushNotifications = require('./pushNotifications');

var _pushNotifications2 = _interopRequireDefault(_pushNotifications);

var _externalBank = require('./externalBank');

var _externalBank2 = _interopRequireDefault(_externalBank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const errorCodes = {
  general: _general2.default,
  cards: _cards2.default,
  profile: _profile2.default,
  auth: _auth2.default,
  account: _account2.default,
  envelopes: _envelopes2.default,
  preregister: _preRegister2.default,
  reloadMoney: _reloadMoney2.default,
  sendMoney: _sendMoney2.default,
  servicePayments: _servicePayments2.default,
  pushNotifications: _pushNotifications2.default,
  external: _externalBank2.default
};

const buildErrorResponse = (error = {}, description, originalError) => {
  let customError = new Error();
  if (error.mainError) {
    customError.message = error.mainError.message || _externalBank2.default.DEFAULT.error.message || '';
    customError.httpStatus = error.mainError.httpStatus || 409;
    customError.code = error.mainError.code || _externalBank2.default.DEFAULT.error.code || '';
    customError.description = description || error.mainError.description || _externalBank2.default.DEFAULT.description || '';
  } else {
    customError.message = error.message || _general2.default.INTERNAL_ERROR.message || '';
    customError.httpStatus = error.httpStatus || _general2.default.INTERNAL_ERROR.httpStatus || 409;
    customError.code = error.code || _general2.default.INTERNAL_ERROR.code || '';
    customError.description = description || '';
  }
  return customError;
};

module.exports = {
  buildErrorResponse,
  errorCodes
};
//# sourceMappingURL=index.js.map