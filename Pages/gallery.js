const questions = [

{
question:
"🎨 What gives a painting its soul?",

answers:[

"Expensive paint 💰",

"Perfect technique 📏",

"Emotion ❤️",

"Luck 🍀"

],

correct:2,

message:
"✨ Beautiful answer. Perhaps every painting is a feeling looking for a home."
},

{
question:
"🌹 What makes something beautiful?",

answers:[

"Popularity 📱",

"Symmetry 📐",

"The feeling it leaves behind ❤️",

"Price 💰"

],

correct:2,

message:
"🌙 Beauty often lingers after the moment is gone."
},

{
question:
"🌌 What is imagination?",

answers:[

"Escaping reality 🚪",

"Creating possibilities ✨",

"Daydreaming 😴",

"Guessing 🎲"

],

correct:1,

message:
"⭐ Every masterpiece begins as imagination."
},

{
question:
"🕯️ Why do humans create art?",

answers:[

"Money 💰",

"Fame 🌟",

"To make feelings visible ❤️",

"Boredom 😴"

],

correct:2,

message:
"🎨 Art gives shape to emotions words can't hold."
}

];

let currentQuestion = 0;

let stars =
parseInt(
localStorage.getItem("stars")
) || 0;

const starCount =
document.getElementById("starCount");

const title =
document.getElementById("questionTitle");

const answers =
document.getElementById("answers");

const result =
document.getElementById("result");

const nextBtn =
document.getElementById("nextBtn");

starCount.textContent = stars;

function loadQuestion(){

const q =
questions[currentQuestion];

title.textContent =
q.question;

answers.innerHTML = "";

result.innerHTML = "";

nextBtn.style.display =
"none";

q.answers.forEach(
(answer,index)=>{

const button =
document.createElement("button");

button.className =
"answer-btn";

button.innerHTML =
answer;

button.onclick =
()=>checkAnswer(index);

answers.appendChild(button);

});
}

function checkAnswer(index){

const q =
questions[currentQuestion];

if(index === q.correct){

result.innerHTML =
q.message;

stars++;

localStorage.setItem(
"stars",
stars
);

starCount.textContent =
stars;

}else{

result.innerHTML =
"✨ Interesting choice...";
}

nextBtn.style.display =
"inline-block";
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

title.innerHTML =
"🎉 Gallery Complete";

answers.innerHTML = "";

result.innerHTML =
"⭐ You discovered every room in the gallery.";

nextBtn.style.display =
"none";

}

});

loadQuestion();