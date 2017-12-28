const errors = {
  phoneTaken: {
    code: 'security-0-1',
    message: 'Phone taken'
  },
  emailTaken: {
    code: 'security-1-1',
    message: 'Email taken'
  },
  invalidCode: {
    code: 'security-2-1',
    message: 'Invalid code'
  },
  errorMatch: {
    code: 'security-3-1',
    message: 'Identity does not match with your id or not exist'
  },
  invalidName: {
    code: 'security-3-2',
    message: 'Your id name does not match'
  },
  invalidFatherLastName: {
    code: 'security-3-3',
    message: 'Your id father last name does not match'
  },
  invalidMotherLastName: {
    code: 'security-3-4',
    message: 'Your id mother last name does not match'
  },
  invalidDeadPerson: {
    code: 'security-3-5',
    message: 'Death person'
  },
  idDocumentExpired: {
    code: 'security-3-6',
    message: 'Id document expired'
  },
  identityTaken: {
    code: 'security-3-7',
    message: 'Id document has been token'
  },
  invalidImageEncoding: {
    code: 'security-4-1',
    message: 'Image need to be base64'
  },
  invalidProfileToken: {
    code: 'security-5-1',
    message: 'Invalid profile token'
  },
  clientTaken: {
    code: 'security-5-2',
    message: 'Some unique attributes taken: username, id document, phone'
  },
  clientAlreadyConfirmed: {
    code: 'security-6-1',
    message: 'Client already confirm'
  },
  notPendingConfirmation: {
    code: 'security-6-2',
    message: 'Not pending confirmation'
  },
  clientAlreadyConfirmed: {
    code: 'security-7-1',
    message: 'Client already confirm'
  },
  notPendingConfirmation: {
    code: 'security-7-2',
    message: 'Not pending confirmation'
  },
  invalidCode: {
    code: 'security-7-3',
    message: 'Invalid confirmation code'
  },
  pendingKYC: {
    code: 'security-7-4',
    message: 'Pending KYC, please contact online support'
  },
  invalidPassword: {
    code: 'security-8-1',
    message: 'Invalid password'
  },
  clientNotConfirmed: {
    code: 'security-8-2',
    message: 'Pending email confirmation'
  },
  invalidClientStatus: {
    code: 'security-8-3',
    message: 'Invalid client status'
  },
  pendingChangePassword: {
    code: 'security-8-4',
    message: 'Client has pending change password'
  },
  deviceNotSet: {
    code: 'security-8-5',
    message: 'Device not set'
  },
  invalidDevice: {
    code: 'security-8-6',
    message: 'Invalid device'
  },
  invalidCredentials: {
    code: 'security-10-1',
    message: 'Invalid credentials'
  },
  invalidClientStatus: {
    code: 'security-11-1',
    message: 'Invalid client status'
  },
  invalidClientStatus: {
    code: 'security-12-1',
    message: 'Invalid client status'
  },
  invalidCurrentPassword: {
    code: 'security-12-2',
    message: 'Invalid current password'
  },
  notValidPendingRequest: {
    code: 'security-13-1',
    message: 'Invalid request for pending change email '
  },
  notValidPendingRequest: {
    code: 'security-14-1',
    message: 'Invalid request for pending change phone '
  },
  sameEmail: {
    code: 'security-15-1',
    message: 'Use a different email'
  },
  samePhone: {
    code: 'security-16-1',
    message: 'Use a different phone'
  }
};

export default errors;