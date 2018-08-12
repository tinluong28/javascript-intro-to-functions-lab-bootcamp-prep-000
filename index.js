function shout(string)
{
  return string.toUpperCase()
}

function whisper(string)
{
  return string.toLowerCase()
}

function logShout(string)
{
  console.log(`${shout(string)}`)
}

function logWhisper(string)
{
  console.log(`${whisper(string)}`)
}

function sayHiToGrandma (string, response)
{if(string === logWhisper(string)) {
  response = "I can\'t hear you"
  console.log(`${response}`);}
else if(string === logShout(string)) {
  response = "YES INDEED!"
  console.log(`${response}`);}
else if(string === 'I love you, Grandma.') {
  reponse = "I love you, too."
  console.log(`${response}`);}
}
