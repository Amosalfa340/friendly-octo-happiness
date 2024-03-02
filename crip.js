const quizData = [
    {
        question: "Which of the following can replace ukurumiri?",
        a: "Twark",
        b: "tina",
        c: "oja",
        d: "crystal",
        correct: "d",
    },
    {
        question: "Who was the founder?",
        a: "Sir spark",
        b: "Estafa",
        c: "dodo",
        d: "unknown",
        correct: "a",
    },
    {
        question: "What is uses of it acccording to ajiolo people?",
        a: "to skip sleep",
        b: "used in making money",
        c: "Vibing enhancer",
        d: "Cruise",
        correct: "b",
    },
    {
        question: "What year was it launched?",
        a: "2019",
        b: "2022",
        c: "2024",
        d: "none of the above",
        correct: "b",
    },
     {
        question: "What does oja stand for?",
        a: "To enhance power",
        b: "to skip sleep",
        c: "to see email vision",
        d: "to cry",
        correct: "a",
    },
     {
        question: "Who run mad pass?",
        a: "vix",
        b: "phil",
        c: "dodo",
        d: "akor",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
