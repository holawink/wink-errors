const writeJsonFile = require('write-json-file')
const sortObject = require('sort-object-keys')

const parseErrors = ({errorCodes}) => {
  const errors = {}
  for (let i in errorCodes) {
    if (!errorCodes[i]) {
      continue
    }
    for (let j in errorCodes[i]) {
      if (!errorCodes[i][j]) {
        continue
      }
      for (let k in errorCodes[i][j]) {
        if (!errorCodes[i][j][k]) {
          continue
        }
        const {code, message} = errorCodes[i][j][k]
        if (code) {
          if (errors[code]) {
            throw new Error(`Duplicate code: ${code}`)
          }
          errors[code] = {
            key: `${i}.${j}.${k}`,
            message: `${message}`
          }
        }
      }
    }
  }
  return errors
}

const {errorCodes} = require('./../src/index')

const errors = sortObject(parseErrors({errorCodes}))
writeJsonFile('dist/errors.json', errors).then(() => {
  console.log('done')
})