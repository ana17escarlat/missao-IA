const questions = [
    {
        question: "Qual é a importância da Amazônia?",
        answers: [
            { text: "A floresta garante as chuvas para boa parte da América do Sul e tem papel central no combate ao aquecimento global e às mudanças climáticas.", correct: true },
            { text: "nenhuma", correct: false },
            { text: "todas as alternativas estão certas", correct: false }
        ]
    },
    {
        question: "Qual é a importâcia do meio ambiente?",
        answers: [
            { text: "oferece ao ser humano e a todo o ser vivo as condições e os recursos necessários para a sua sobrevivência", correct: true },
            { text: "nenhuma", correct: false },
            { text: "todas as alternativas estão corretas", correct: false }
        ]
    },
    {
        question: " o que é reciclagem'?",
        answers: [
            { text: "é o processo de reaproveitamento de materiais descartados", correct: true },
            { text: " é a poluição", correct: false },
            { text: "é o desperdicio", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        ${question.answers.map((answer, index) => `
            <div class="answer" data-correct="${answer.correct}">
                ${answer.text}
            </div>
        `).join('')}
    `;

    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => {
        answer.addEventListener('click', () => {
            if (answer.dataset.correct === 'true') {
                score++;
            }
            nextQuestion();
        });
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    resultText.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
    resultContainer.classList.remove('hidden');
    document.getElementById('next-button').classList.add('hidden');
}

document.getElementById('next-button').addEventListener('click', nextQuestion);

startQuiz();
