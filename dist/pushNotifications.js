'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const errors = {
  MISSING_QUEUE_URL: {
    code: 'push-0-1',
    externalCodes: '',
    httpStatus: 500,
    message: 'Missing URL for SQS Queue'
  },
  MISSING_QUEUE: {
    code: 'push-0-2',
    externalCodes: '',
    httpStatus: 500,
    message: 'Missing SQS Queue'
  }
};

exports.default = errors;
//# sourceMappingURL=pushNotifications.js.map