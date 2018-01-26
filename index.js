var uppercase = "HELLO"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false

function shout(string) {
  console.log(string.uppercase)
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  if (string === uppercase)
  console.log(string)
}

function logWhisper(string) {
  if (string === lowercase)
  console.log(string)
}

