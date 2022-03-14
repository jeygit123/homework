const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

// var total_seconds=60*10
// var c_minutes=parseInt(total_seconds/60);
// var c_seconds=parseInt(total_seconds%60);
// function Checktime(){
//     document.getElementById("quiz-time-left").innerHTML=
//     'Time Left: '+c_minutes + 'minutes' + c_seconds + 'seconds';
//     if(total_seconds <=0){
//         setTimeout('document.quiz.submit()',1);
//     }else{
//         total_seconds=total_seconds -1;
//         c_minutes=parseInt(total_seconds/60);
//         c_seconds=parseInt(total_seconds%60);
//         setTimeout("CheckTime()",1000);
//     }
// }
// setTimeout("CheckTime()",1000)

let questions = [
    {
        question:'What is 2+2?',
        choice1:'2',
        choice2:'6',
        choice3:'4',
        choice4:'17',
        answer:3,
    },
    {
        question:'What is color of a Penguin?',
        choice1:'black-white',
        choice2:'red-pink',
        choice3:'white-red',
        choice4:'white-grey',
        answer:1,
    },
    {
        question:'What is the color of banana?',
        choice1:'red',
        choice2:'blue',
        choice3:'yellow',
        choice4:'pinK',
        answer:3,
    },
    {
        question:'What is state of water?',
        choice1:'liquid',
        choice2:'solid',
        choice3:'semi-solid',
        choice4:'17',
        answer:1,
    },
    {
        question:'How many wheels does a car have?',
        choice1:'2',
        choice2:'6',
        choice3:'4',
        choice4:'1',
        answer:3,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter=0
    score=0
    availableQuestions=[...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore',score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText=`Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice'+ number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers)return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'        
        
        if(classToApply ==='correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        },1000)
        })
    })

    incrementScore = num => {
        score += num
        scoreText.innerText =  score
    }

    startGame()