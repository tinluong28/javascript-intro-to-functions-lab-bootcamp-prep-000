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

function sayHiToGrandma (string){
    if(string.toUpperCase() === string){
	console.log('YES INDEED!')}
	else if(string.toLowerCase() === string){
	console.log('I can\'t hear you')}
	else if(string === "I love you, Grandma."){
	console.log('I love you, too.')}
}
