var magicAnswers = [
"YES",
"NO",
"I don't understand the question",
"Probably not",
"Possibly?",
"Totally",
"Not possible",
"Try again",
"That's kinda a dumb question",
"( ͡° ͜ʖ ͡°)",
"Nope",
"Nani?!",
"Yes",
"Go eat a sandwich",
"You've had enough computer time",
"The counsel will decide your fate",
];

var randomAnswer = Math.floor(Math.random()*15);

function magicEight(){
document.getElementById("demo").innerHTML = magicAnswers[randomAnswer];
}

