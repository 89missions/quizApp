    /* the data array consist of objects with properties id,question and answers. the answer array also consists of an array of possible answers with a kinda flag. iono*/

const data = [
    {
        id:1,
        question:'Which football club is the greatest in history?',
        answers:[
            {answer:'Manchester United', isCorrect :false},
            {answer:'Chelsea', isCorrect :false},
            {answer:'Real Madrid', isCorrect :true},
            {answer:'Fc Barcelona', isCorrect :false},
        ]
    },
    {
        id:1,
        question:'Who is the goat of football',
        answers:[
            {answer:'Messi', isCorrect :false},
            {answer:'Christiano Ronaldo', isCorrect :true},
            {answer:'Zlatan Ibrahimovic', isCorrect :false},
            {answer:'Erling Haaland', isCorrect :false},
        ]
    },
    {
        id:1,
        question:'Who is the all time top scorer',
        answers:[
            {answer:'Christiano Ronaldo', isCorrect :true},
            {answer:'Lionel Messi', isCorrect :false},
            {answer:'Erling Haaland', isCorrect :false},
            {answer:'Mohammed Salah', isCorrect :false},
        ]
    },
    {
        id:1,
        question:"Who has the most Balon d'or award",
        answers:[
            {answer:'Christiano Ronaldo', isCorrect :false},
            {answer:'Lionel Messi', isCorrect :true},
            {answer:'Ronaldinho', isCorrect :false},
            {answer:'Ronaldo Brazil', isCorrect :false},
        ]
    }
]

const gameScreen = document.querySelector('.game')
const resultScreen = document.querySelector('.result')
const question = document.querySelector('.question')
const answersContainer = document.querySelector('.answers')
const submit = document.querySelector('.submit')
const play = document.querySelector('.play')

let qindex = 0; 
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playagain = ()=>{
     qindex = 0; 
     correctCount = 0;
     wrongCount = 0;
     total = 0;
     selectedAnswer;
    showQuestion(qindex);
}

play.addEventListener('click',()=>{
    resultScreen.style.display = 'none'
    gameScreen.style.display = 'block'
    playagain()
})


const showResult = ()=>{
    resultScreen.style.display = 'block'
    gameScreen.style.display = 'none'

    resultScreen.querySelector('.correct').textContent = `Correct Answers : ${correctCount}`
    resultScreen.querySelector('.wrong').textContent = `wrong Answers : ${wrongCount}`
    resultScreen.querySelector('.score').textContent = `Score : ${(correctCount-wrongCount)*10}`
}

// this function is used to display the elements of the array on the screen

const showQuestion = (qNumber) =>{
    if(qindex === data.length) return showResult()
    selectedAnswer = null;
    question.textContent = data[qNumber].question
    answersContainer.innerHTML = data[qNumber].answers.map((item,index)=>
        `<div class="answer">
                        <input type="radio" name="answer" id=${index}
                        value=${item.isCorrect}>
                        <label for=${index}>${item.answer}</label>
        </div>`
    ).join('')

    selectAnswer()
}
const selectAnswer=()=>{
    answersContainer.querySelectorAll('input').forEach(el=>el.addEventListener('click',(e)=>{
      selectedAnswer = (e.target.value)
    }))
}

const submitAnswer =()=>{
    submit.addEventListener('click',()=>{

        if(selectedAnswer !== null){
            selectedAnswer === 'true' ? correctCount++ : wrongCount++
        qindex++
        showQuestion(qindex)
        }
        else alert('Input an answer')  
    })
}


showQuestion(qindex)
submitAnswer()