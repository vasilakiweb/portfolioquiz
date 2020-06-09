let numberForData = 0;
let corectAnswers = 0;
// ===== Store data =====
// Array for store data
const dataForQuiz = [
    {
        question: 'Какой цветок до сих пор считают символом Японии и самого Солнца?',
        answers: ['Фиалка', 'Хризантема', 'Марунги', 'Джаруми'],
        corectAnswer: 'Хризантема',
    },

    {
        question: 'Как называется активная оболочка Земли, которая населена живыми организмами? ',
        answers: ['Биосфера', 'Азоновый слой', 'Солнце', 'Стратосфера', 'Меркурий'],
        corectAnswer: 'Биосфера',
    },

    {
        question: 'В каком году произошла Чернобыльская катастрофа?',
        answers: ['1986', '1965', '1974', '1979'],
        corectAnswer: '1986',
    },

    {
        question: 'Fsdfsafasfsaf',
        answers: ['2', '1', 'sadsd', 'dasdsad'],
        corectAnswer: '2',
    }

];


const answers = document.querySelector('.answers');



// ===== Load questions at the start =====
window.addEventListener('load', showData);

function showData() {
    // Create div with data of question
    let questionDiv = document.createElement('div');
    questionDiv.classList = 'question' + numberForData;
    answers.appendChild(questionDiv);

    // Create Question <p>
    let paragraph = document.createElement('p');
    let paragraphText = document.createTextNode(dataForQuiz[numberForData].question);

    paragraph.appendChild(paragraphText);

    answers.appendChild(paragraph);

    questionDiv.appendChild(paragraph);

    for (let i = 0; i < dataForQuiz[numberForData].answers.length; i++) {
        // Create <div class="answer">
        let divAnswer = document.createElement('div');
        divAnswer.className = 'answer';
        answers.appendChild(divAnswer);

        // Adding to <div class="answer"> input and label
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = dataForQuiz[numberForData].answers[i];

        let span = document.createElement('span');
        let spanText = document.createTextNode(dataForQuiz[numberForData].answers[i]);
        span.appendChild(spanText);

        divAnswer.appendChild(input);
        divAnswer.appendChild(span);

        questionDiv.appendChild(divAnswer);
    }
}


// ===== Try Again button ===
const buttonTryAgain = document.querySelector('.tryAgain');

// ===== Next question button + Checked radio value =====
const buttonNextQuestion = document.querySelector('.nextQuestion');

// On button click
buttonNextQuestion.addEventListener('click', () => {

    if (numberForData < dataForQuiz.length - 1) {
        if (getCheckedRadioValue('answer') === dataForQuiz[numberForData].corectAnswer) {
            corectAnswers++;
        }
        let deleteDiv = document.querySelector ('.question' + numberForData);
        deleteDiv.remove();
        numberForData++;
        showData();
    }
    else {
        if (getCheckedRadioValue('answer') === dataForQuiz[numberForData].corectAnswer) {
            corectAnswers++;
        }
        alert ('You scored: ' + corectAnswers + ' out of ' + dataForQuiz.length );

        buttonTryAgain.classList.toggle('display-none');
        buttonTryAgain.addEventListener ('click', ()=>{
            let deleteDiv = document.querySelector ('.question' + numberForData);
            deleteDiv.remove();
            numberForData = 0;  
            corectAnswers = 0;
            showData();
            buttonTryAgain.classList.add('display-none');
        });


    }
    
    

});


// return Checked radio value 
function getCheckedRadioValue(name) {
    var elements = document.getElementsByName(name);

    for (var i = 0, len = elements.length; i < len; ++i) {
        if (elements[i].checked) {
            return elements[i].value;
        }
    }
}

