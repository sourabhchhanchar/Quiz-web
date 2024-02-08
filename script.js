const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Vietnam"],
        correctAnswer: "Japan"
    },
    {
        question: "What is the currency of India?",
        options: ["Yuan", "Rupee", "Won", "Baht"],
        correctAnswer: "Rupee"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Carbon", "Hydrogen"],
        correctAnswer: "Oxygen"
    },
    {
        question: "In what year did the Titanic sink?",
        options: ["1912", "1920", "1931", "1945"],
        correctAnswer: "1912"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: "Canberra"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara Desert", "Arctic Desert", "Gobi Desert", "Antarctic Desert"],
        correctAnswer: "Antarctic Desert"
    },
    {
        question: "Which famous scientist developed the theory of general relativity?",
        options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileo Galilei"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"],
        correctAnswer: "Brasilia"
    },
    {
        question: "What is the world's longest river?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: "Amazon River"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["J.K. Rowling", "Harper Lee", "George Orwell", "Ernest Hemingway"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "What is the largest species of big cat?",
        options: ["Lion", "Leopard", "Tiger", "Jaguar"],
        correctAnswer: "Tiger"
    },
    {
        question: "Which planet is known as the 'Evening Star'?",
        options: ["Venus", "Mars", "Mercury", "Jupiter"],
        correctAnswer: "Venus"
    },
    {
        question: "Who is the author of 'The Great Gatsby'?",
        options: ["F. Scott Fitzgerald", "Herman Melville", "Jane Austen", "George Orwell"],
        correctAnswer: "F. Scott Fitzgerald"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p class="question-text">${index + 1}. ${question.question}</p>
            <div class="options">${buildOptions(question.options, index)}</div>
        `;
        quizContainer.appendChild(questionElement);
    });
}

function buildOptions(options, index) {
    return options.map((option, optionIndex) => `
        <input type="radio" name="question${index}" value="${option}" id="q${index}-option${optionIndex}">
        <label for="q${index}-option${optionIndex}">${option}</label>
    `).join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.question');
    let score = 0;

    questions.forEach((question, index) => {
        const answerContainer = answerContainers[index];
        const selectedOption = answerContainer.querySelector(`input[name=question${index}]:checked`);
        const userAnswer = selectedOption ? selectedOption.value : undefined;

        if (userAnswer === question.correctAnswer) {
            score++;
            answerContainer.classList.add('correct');
        } else {
            answerContainer.classList.add('incorrect');
        }
    });

    const resultText = `You got ${score} out of ${questions.length} questions right!`;
    resultContainer.innerHTML = resultText;
    resultContainer.classList.add('display');
}

buildQuiz();

submitButton.addEventListener('click', () => {
    showResults();
    quizContainer.style.display = 'none'; // Hide the quiz after submitting
});
// Add a function to retake the quiz
function retakeQuiz() {
    // Reset quiz state
    document.getElementById('quiz').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').classList.remove('display');
    document.getElementById('quiz').style.display = 'block';

    // Rebuild quiz
    buildQuiz();
}

// Modify the submit button event listener
submitButton.addEventListener('click', () => {
    showResults();
    quizContainer.style.display = 'none'; // Hide the quiz after submitting
    resultContainer.classList.add('display');
    retakeButton.classList.remove('hidden');
});

// Add event listener for the "Retake Quiz" button
const retakeButton = document.getElementById('retake-btn');
retakeButton.addEventListener('click', retakeQuiz);

