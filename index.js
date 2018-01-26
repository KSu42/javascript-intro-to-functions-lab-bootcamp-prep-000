var uppercase = "HELLO"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false

function shout(string) {
  console.log(string.toUpperCase)
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}


function sayHiToGrandma(string) {
  if (string === uppercase)
  return ('YES INDEED!')
}

