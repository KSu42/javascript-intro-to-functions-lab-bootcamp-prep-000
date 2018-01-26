var uppercase = "HELLO"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'I love you, Grandma.'

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
  return ("YES INDEED!")
}

function sayHiToGrandma(string) {
  if (string === lowercase)
  return ("I can't hear you!")
}

function sayHiToGrandma(string) {
  if (string === mixedCase)
  return ("I love you, too.")
}
