'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const errors = {
  MISSING_QUEUE_URL: {
    code: 'push-1',
    message: 'Missing URL for SQS Queue'
  },
  MISSING_QUEUE: {
    code: 'push-2',
    message: 'Missing SQS Queue'
  }
};

exports.default = errors;
//# sourceMappingURL=pushNotifications.js.map