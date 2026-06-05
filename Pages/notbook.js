const input =
document.getElementById(
"questionInput"
);

const askBtn =
document.getElementById(
"askBtn"
);

const responseBox =
document.getElementById(
"responseBox"
);

const questionCount =
document.getElementById(
"questionCount"
);

let asked =
parseInt(
localStorage.getItem(
"questionsAsked"
)
) || 0;

questionCount.textContent =
asked;

const responses = [

"🎨 Art may be the language of emotions words cannot translate.",

"🌙 Perhaps memories are paintings created by time.",

"✨ Beauty often appears when we stop searching for it.",

"🖌️ Every blank canvas is a universe waiting to exist.",

"⭐ Some questions are more beautiful than answers.",

"🌌 Imagination is reality before it happens.",

"🎭 Artists don't just create art. They create perspectives.",

"💭 Feelings are colors the heart tries to paint.",

"🌹 Beauty may simply be attention mixed with wonder.",

"📖 Every person is a story nobody else can write."
];

const secretResponses = [

"✨ Secret Found: Some paintings hang in galleries. Others stay inside people forever.",

"🌙 Secret Found: The most valuable artwork is the one that changes someone.",

"⭐ Secret Found: Curiosity is the brush that paints new worlds."
];

askBtn.addEventListener(
"click",
()=>{

const text =
input.value.trim();

if(text === "")
return;

asked++;

localStorage.setItem(
"questionsAsked",
asked
);

questionCount.textContent =
asked;

let response;

if(Math.random() < 0.15){

response =
secretResponses[
Math.floor(
Math.random()
*
secretResponses.length
)
];

}else{

response =
responses[
Math.floor(
Math.random()
*
responses.length
)
];

}

responseBox.innerHTML =
response;

input.value = "";

if(asked >= 5){

localStorage.setItem(
"secretNotebook",
"true"
);

}

});