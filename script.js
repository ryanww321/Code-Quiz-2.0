// Creating all of the get element by ids
const welcome = document.getElementById("welcome");
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const scoreDiv = document.getElementById("scoreContainer");

// the array of questions
let questions = [
    {
        question: "Programming is the act of constructing a(n):",
        choiceA: "Element",
        choiceB: "Document",
        choiceC: "Program",
        correct: "C"
    }, {
        question: "What year was JavaScript introduced?",
        choiceA: "1984",
        choiceB: "1995",
        choiceC: "1945",
        correct: "B"
    }, {
        question: "Which organization created the ECMAScript standard?",
        choiceA: "Ecma International",
        choiceB: "Google",
        choiceC: "Mozilla",
        correct: "A"
    },
    {
        question: "__________ is the text that makes up programs.",
        choiceA: "HTTP",
        choiceB: "DOM",
        choiceC: "Code",
        correct: "C"
    },
    {
        question: "A function is created with an expression that starts with the keyword:",
        choiceA: "global",
        choiceB: "function",
        choiceC: "local",
        correct: "B"
    }
];

// some of the global variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
let TIMER;
let score = 0;

// function to render the questions
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// function to start the quiz
function startQuiz() {
    welcome.style.display = "none";
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
}

// the function to render the progress through the questions
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// if they finish the question before the time runs out they move on

function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        count++
    } else {
        count = 0;
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// function to check the answer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        score++;
    } else {
        count = 0;
    }
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        clearInterval(TIMER);
        scoreRender();
    }
}

// this will cause the score to show up after the quiz is over
function scoreRender() {
    quiz.style.display = "none";
    scoreDiv.style.display = "block";
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);
    //to add the score % after the calculation above has ran
    scoreDiv.innerHTML += "<p>" + "You scored " + scorePerCent + "%</p>";
}





















