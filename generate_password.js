function sample(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

function generatePassword(options) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  
  /*test data*/
  // const options = {
  //   length: '2',
  //   originCharacters: '11asd',
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   symbols: 'on',
  //   excludeCharacters: '04'
  // }
  
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  //exculde password 
  if (options.excludeCharacters) {
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
    )
  }

  if (collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }
 
  let originPassword = options.originCharacters.split('')
  
  for (let i = 1; i <= options.length; i++) {
    originPassword.splice(Math.floor(Math.random() * (options.originCharacters.length + i)), 0, sample(collection))
  }

  let newPassword = ''

  for (let i=0; i < originPassword.length; i++) {
    newPassword += originPassword[i]
  }
  
  return newPassword
}


module.exports = generatePassword