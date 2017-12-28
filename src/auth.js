const errors = {
  PHONE_TAKEN: {
    code: 'security-0-1',
    message: 'Phone taken'
  },
  EMAIL_TAKEN: {
    code: 'security-1-1',
    message: 'Email taken'
  },
  INVALID_CODE: {
    code: 'security-2-1',
    message: 'Invalid code'
  },
  ERROR_MATCH: {
    code: 'security-3-1',
    message: 'Identity does not match with your id or not exist'
  },
  INVALID_NAME: {
    code: 'security-3-2',
    message: 'Your id name does not match'
  },
  INVALID_FATHER_LAST_NAME: {
    code: 'security-3-3',
    message: 'Your id father last name does not match'
  },
  INVALID_MOTHER_LAST_NAME: {
    code: 'security-3-4',
    message: 'Your id mother last name does not match'
  },
  INVALID_DEAD_PERSON: {
    code: 'security-3-5',
    message: 'Death person'
  },
  ID_DOCUMENT_EXPIRED: {
    code: 'security-3-6',
    message: 'Id document expired'
  },
  IDENTITY_TAKEN: {
    code: 'security-3-7',
    message: 'Id document has been token'
  },
  INVALID_IMAGE_ENCODING: {
    code: 'security-4-1',
    message: 'Image need to be base64'
  },
  CLIENT_TAKEN: {
    code: 'security-5-2',
    message: 'Some unique attributes taken: username, id document, phone'
  },
  CLIENT_ALREADY_CONFIRMED: {
    code: 'security-6-1',
    message: 'Client already confirm'
  },
  NOT_PENDING_CONFIRMATION: {
    code: 'security-6-2',
    message: 'Not pending confirmation'
  },
  PENDING_KYC: {
    code: 'security-7-4',
    message: 'Pending KYC, please contact online support'
  },
  INVALID_PASSWORD: {
    code: 'security-8-1',
    message: 'Invalid password'
  },
  CLIENT_NOT_CONFIRMED: {
    code: 'security-8-2',
    message: 'Pending email confirmation'
  },
  INVALID_CLIENT_STATUS: {
    code: 'security-8-3',
    message: 'Invalid client status'
  },
  PENDING_CHANGE_PASSWORD: {
    code: 'security-8-4',
    message: 'Client has pending change password'
  },
  DEVICE_NOT_SET: {
    code: 'security-8-5',
    message: 'Device not set'
  },
  INVALID_DEVICE: {
    code: 'security-8-6',
    message: 'Invalid device'
  },
  INVALID_CREDENTIALS: {
    code: 'security-10-1',
    message: 'Invalid credentials'
  },
  INVALID_CURRENT_PASSWORD: {
    code: 'security-12-2',
    message: 'Invalid current password'
  },
  NOT_VALID_PENDING_REQUEST: { // TODO: There are several of cases for this same error, create one for each
    code: 'security-13-1',
    message: 'Invalid request for pending change'
  },
  SAME_EMAIL: {
    code: 'security-15-1',
    message: 'Use a different email'
  },
  SAME_PHONE: {
    code: 'security-16-1',
    message: 'Use a different phone'
  }
}

export default errors;
