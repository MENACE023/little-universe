const questions = [

{
question:
"🎨 If emotions had colors, which color would curiosity be?",

answers:[
"💙 Blue",
"💛 Yellow",
"💜 Purple",
"❤️ Red"
],

responses:[

"🌊 Curiosity can be as deep as an ocean.",

"☀️ Curiosity often begins with light.",

"✨ Interesting choice. Purple feels mysterious.",

"🌹 A passionate answer."
]
},

{
question:
"🌌 What sounds most magical?",

answers:[
"⭐ A wishing star",
"🖼️ A forgotten painting",
"📖 A notebook that answers",
"🚪 A hidden door"
],

responses:[

"✨ Some stars guide journeys.",

"🎨 Every forgotten painting has a story.",

"📖 Perhaps questions are treasures.",

"🚪 Hidden doors often lead somewhere unexpected."
]
},

{
question:
"🎭 What gives art meaning?",

answers:[
"💰 Value",
"🏆 Fame",
"❤️ Emotion",
"📏 Perfection"
],

responses:[

"💭 Interesting perspective.",

"🌟 Recognition has its place.",

"❤️ Emotion gives life to art.",

"🎨 Perfection isn't always memorable."
]
},

{
question:
"🌙 Which would you rather paint?",

answers:[
"☁️ The sky",
"💭 A memory",
"✨ A dream",
"❤️ A feeling"
],

responses:[

"☁️ Endless possibilities.",

"💭 Memories are powerful subjects.",

"✨ Dreams ignore limits.",

"❤️ Feelings leave lasting impressions."
]
},

{
question:
"⭐ Which is more beautiful?",

answers:[
"🌅 A sunset",
"🌊 The ocean",
"🎨 A masterpiece",
"💫 A meaningful moment"
],

responses:[

"🌅 Nature paints too.",

"🌊 The ocean hides mysteries.",

"🎨 Masterpieces inspire generations.",

"💫 Moments become memories."
]
}

];

let currentQuestion = 0;

const questionText =
document.getElementById(
"questionText"
);

const answersDiv =
document.getElementById(
"answers"
);

const messageBox =
document.getElementById(
"messageBox"
);

const nextBtn =
document.getElementById(
"nextBtn"
);

const questionNumber =
document.getElementById(
"questionNumber"
);

document.getElementById(
"totalQuestions"
).textContent =
questions.length;

function loadQuestion(){

const q =
questions[currentQuestion];

questionText.innerHTML =
q.question;

questionNumber.innerHTML =
currentQuestion + 1;

answersDiv.innerHTML = "";

messageBox.innerHTML =
"Choose what feels right ✨";

nextBtn.style.display =
"none";

q.answers.forEach(
(answer,index)=>{

const button =
document.createElement(
"button"
);

button.className =
"answer-btn";

button.innerHTML =
answer;

button.onclick =
()=>{

messageBox.innerHTML =
q.responses[index];

nextBtn.style.display =
"inline-block";

};

answersDiv.appendChild(
button
);

});
}

nextBtn.addEventListener(
"click",
()=>{

currentQuestion++;

if(
currentQuestion
<
questions.length
){

loadQuestion();

}else{

questionText.innerHTML =
"🎉 Exploration Complete";

answersDiv.innerHTML = "";

messageBox.innerHTML =
"✨ Thank you for sharing your thoughts. Every answer painted a different picture.";

nextBtn.style.display =
"none";

localStorage.setItem(
"questionsComplete",
"true"
);

}

});

loadQuestion();