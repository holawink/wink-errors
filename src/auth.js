const errors = {
  PHONE_TAKEN: {
    code: 'security-1',
    message: 'Phone taken'
  },
  EMAIL_TAKEN: {
    code: 'security-2',
    message: 'Email taken'
  },
  INVALID_CODE: {
    code: 'security-3',
    message: 'Invalid code'
  },
  ERROR_MATCH: {
    code: 'security-4',
    message: 'Identity does not match with your id or not exist'
  },
  INVALID_NAME: {
    code: 'security-5',
    message: 'Your id name does not match'
  },
  INVALID_FATHER_LAST_NAME: {
    code: 'security-6',
    message: 'Your id father last name does not match'
  },
  INVALID_MOTHER_LAST_NAME: {
    code: 'security-7',
    message: 'Your id mother last name does not match'
  },
  INVALID_DEAD_PERSON: {
    code: 'security-8',
    message: 'Death person'
  },
  ID_DOCUMENT_EXPIRED: {
    code: 'security-9',
    message: 'Id document expired'
  },
  IDENTITY_TAKEN: {
    code: 'security-10',
    message: 'Id document has been token'
  },
  INVALID_IMAGE_ENCODING: {
    code: 'security-11',
    message: 'Image need to be base64'
  },
  CLIENT_TAKEN: {
    code: 'security-12',
    message: 'Some unique attributes taken: username, id document, phone'
  },
  CLIENT_ALREADY_CONFIRMED: {
    code: 'security-13',
    message: 'Client already confirm'
  },
  NOT_PENDING_CONFIRMATION: {
    code: 'security-14',
    message: 'Not pending confirmation'
  },
  PENDING_KYC: {
    code: 'security-15',
    message: 'Pending KYC, please contact online support'
  },
  INVALID_PASSWORD: {
    code: 'security-16',
    message: 'Invalid password'
  },
  CLIENT_NOT_CONFIRMED: {
    code: 'security-17',
    message: 'Pending email confirmation'
  },
  INVALID_CLIENT_STATUS: {
    code: 'security-18',
    message: 'Invalid client status'
  },
  PENDING_CHANGE_PASSWORD: {
    code: 'security-19',
    message: 'Client has pending change password'
  },
  DEVICE_NOT_SET: {
    code: 'security-20',
    message: 'Device not set'
  },
  INVALID_DEVICE: {
    code: 'security-21',
    message: 'Invalid device'
  },
  INVALID_CREDENTIALS: {
    code: 'security-22',
    message: 'Invalid credentials'
  },
  INVALID_CURRENT_PASSWORD: {
    code: 'security-23',
    message: 'Invalid current password'
  },
  NOT_VALID_PENDING_REQUEST: { // TODO: There are several of cases for this same error, create one for each
    code: 'security-24',
    message: 'Invalid request for pending change'
  },
  SAME_EMAIL: {
    code: 'security-25',
    message: 'Use a different email'
  },
  SAME_PHONE: {
    code: 'security-26',
    message: 'Use a different phone'
  },
  INVALID_PROFILE_TOKEN: {
    code: 'security-27',
    message: 'Sensitive information altered in the identity token'
  }
}

export default errors;
