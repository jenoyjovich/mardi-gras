const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex
let countRightAnswers = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion()
})


function startGame() {

    console.log("started")
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() =>
        Math.random() - .5
    );
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion();
    countRightAnswers = 0; // to reset the counter after the test started
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    document.querySelector('.right-answers').style.display = "none";
    answerButtonsElement.classList.remove('disable')
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(
        button => {
            setStatusClass(button, button.dataset.correct)
        }
    )
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
        document.querySelector('.right-answers').style.display = "none"
    } else {

        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        document.querySelector('.right-answers').style.display = "flex"
    }
    if (selectedButton.dataset = correct) {
        countRightAnswers += 10;
    }

    document.querySelector('.right-answers').innerHTML = `Your Score Is ${countRightAnswers}`;


    answerButtonsElement.classList.add('disable')

}



function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
    question: 'The religious name for Mardi Gras is:',
    answers: [{
        text: 'Shrove Tuesday',
        correct: true
    }, {
        text: 'Whitsunday',
        correct: false
    }, {
        text: 'Prelent',
        correct: false
    }, {
        text: 'Mardiday',
        correct: false
    }]
}, {
    question: 'New Orleans and Mardi Gras are often associated with this type of music:',
    answers: [{
        text: 'Jazz',
        correct: true
    }, {
        text: 'Blues',
        correct: false
    }, {
        text: 'French Folk Songs',
        correct: false
    }, {
        text: 'Heavy Metal',
        correct: false
    }]
}, {
    question: 'This relatively small country features one of the largest Carnival celebrations in the world:',
    answers: [{
        text: 'Jamaica',
        correct: false
    }, {
        text: 'Trinidad and Tobago',
        correct: true
    }, {
        text: 'Grenada',
        correct: false
    }, {
        text: 'Cuba',
        correct: false
    }]
}, {
    question: 'The Mardi Gras colors are:',
    answers: [{
        text: 'red white and blue representing the American flag',
        correct: false
    }, {
        text: 'white and gold colours of the french imperial navi',
        correct: false
    }, {
        text: 'green white and purple which represents the LGTBIQ community',
        correct: false
    }, {
        text: 'purple green and gold in honor of the Russian royal family',
        correct: true
    }]
}, {
    question: '"Mardi Gras" actually means:',
    answers: [{
        text: 'Merry times',
        correct: false
    }, {
        text: 'Fat Tuesday',
        correct: true
    }, {
        text: 'Spring Welcome',
        correct: false
    }, {
        text: 'Freedom Day',
        correct: false
    }]
}, {
    question: 'The young of all ages line the Mardi Gras parade route hoping to catch special coins tossed from the floats. The coins are known as:',
    answers: [{
        text: 'Mardi Gras Pennies',
        correct: false
    }, {
        text: 'Centimes',
        correct: false
    }, {
        text: 'Doubloons',
        correct: true
    }, {
        text: 'Shekels',
        correct: false
    }]
}, {
    question: 'In Rio de Janeiro, Brazil, the Mardi Gras celebration is known as:',
    answers: [{
        text: 'Mardi Gras',
        correct: false
    }, {
        text: 'Brazil Day',
        correct: false
    }, {
        text: 'Carnival',
        correct: true
    }, {
        text: 'Festival',
        correct: false
    }]
}, {
    question: 'King Cakes are a popular Mardi Gras tradition. Inside the cake is hidden a:',
    answers: [{
        text: 'Golden coin',
        correct: false
    }, {
        text: 'Silver dollar',
        correct: false
    }, {
        text: 'Treasurehunt Map',
        correct: false
    }, {
        text: 'Plastic baby',
        correct: true
    }]
}, {
    question: 'In New Orleans, La., Mardi Gras celebrations are centered around this famous neighborhood:',
    answers: [{
        text: 'Latin Quarter',
        correct: false
    }, {
        text: 'French Quarter',
        correct: true
    }, {
        text: 'Sin City',
        correct: false
    }, {
        text: 'China Town',
        correct: false
    }]
}, {
    question: 'Many Mardi Gras events are organized by private clubs known as:',
    answers: [{
        text: 'Krewes',
        correct: true
    }, {
        text: 'Fraternities',
        correct: false
    }, {
        text: 'Brotherhoods',
        correct: false
    }, {
        text: 'Gangs',
        correct: false
    }]
}]