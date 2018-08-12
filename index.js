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
  spy = shout(string)
  console.log(`shout(string)`)
}

function logWhisper(string)
{
  spy = whisper(string)
  console.log(`${spy}`)
}
