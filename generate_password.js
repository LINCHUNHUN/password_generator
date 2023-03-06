//generate_password.js

//define sample function to randomly return a item in an array
function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

//define generatePassword function
function generatePassword(options) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const number = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // remove things user do not need
  let collection = []

  if (options.lowercase === 'on'){
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on'){
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on'){
    collection = collection.concat(number.split(''))
  }

  if (options.symbols === 'on'){
    collection = collection.concat(symbols.split(''))
  }

  //remove things user do not need
  if (options.excludeCharacters) {
    //console.log(`exclude characters: ${options.excludeCharacters}`)
    collection = collection.filter(
        character => !options.excludeCharacters.includes(character)
    )
  }
  //console.log('collection', collection)

  // return error notice if collection is empty
  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }

  // start generating password
  let password = ''
  for ( let i = 0; i < Number(options.length); i++){
    password += sample(collection)
  }
  //console.log('sample(collection)', sample(collection))

  // return the generated password
return password
}

//invoke generatePassword function
module.exports = generatePassword