const questions = [
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        answer: "4"
    },
    {
        question:"Who is the author of the famous novel To Kill a Mockingbird?",
        answer:"harper lee"
    },
    {
        question:"Who wrote Romeo and Juliet?",
        answer:"william shakespeare"
    },
    {
        question:"Which planet is known as the Red Planet?",
        answer:"mars"
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('questions');
    quizContainer.innerHTML = '';

    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <input type="text" id="answer${index}">
        `;
        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;

    questions.forEach((question, index) => {
        const userAnswer = document.getElementById(`answer${index}`).value.trim().toLowerCase();
        if (userAnswer === question.answer.toLowerCase()) {
            score++;
        }
    });

    const quizResult = document.getElementById('quizResult');
    quizResult.innerHTML = `You scored ${score} out of ${questions.length}.`;
}

// Load quiz on page load
loadQuiz();
