function shout(string)
{
  a = string.toUpperCase()
  return `${a}`
}

function whisper(string)
{
  b = string.toLowerCase()
  return `${b}`
}

function logShout(string)
{
  console.log(`${a}`)
}

function logWhisper(string)
{
  console.log(`${b}`)
}

function sayHiToGrandma (string){
    if(b === string){
	return `I can\'t hear you!`}
	else if(a === string){
	return `YES INDEED!`}
	else if(string === "I love you, Grandma."){
	return `I love you, too.`}
}
