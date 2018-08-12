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
  console.log(`${spy}`)
}

function logWhisper(string)
{
  
}