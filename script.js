// Toggle between multiplication and division sections
document.getElementById('multLink').addEventListener('click', function() {
    document.getElementById('multiplication').style.display = 'block';
    document.getElementById('division').style.display = 'none';
    resetQuestionsAndAnswers();
});

document.getElementById('divLink').addEventListener('click', function() {
    document.getElementById('division').style.display = 'block';
    document.getElementById('multiplication').style.display = 'none';
    resetQuestionsAndAnswers();
});

function resetQuestionsAndAnswers() {
    document.getElementById('questions').innerHTML = "<h2>Questions</h2>";
    document.getElementById('answers').style.display = 'none';
    document.getElementById('answers').innerHTML = "<h2>Answers</h2>";
    document.getElementById('showAnswersBtn').disabled = false;
}

// Generate Questions
function generateQuestions(type) {
    resetQuestionsAndAnswers();

    let questions = [];
    let answers = [];
    let multiplier1, multiplier2, dividend, divisor, quotient, remainder;

    if (type === 'multiplication') {
        let selectedOption = document.getElementById('multiplicationType').value;

        if (selectedOption === '1x2') {
            for (let i = 0; i < 5; i++) {
                multiplier1 = Math.floor(Math.random() * 7) + 3; // 3 to 9
                multiplier2 = Math.floor(Math.random() * 78) + 13; // 13 to 90
                questions.push({ question: `${multiplier1} × ${multiplier2}`, answer: (multiplier1 * multiplier2).toLocaleString() });
            }
        } else if (selectedOption === '1x3') {
            for (let i = 0; i < 5; i++) {
                multiplier1 = Math.floor(Math.random() * 7) + 3; // 3 to 9
                multiplier2 = Math.floor(Math.random() * 899) + 101; // 101 to 999
                questions.push({ question: `${multiplier1} × ${multiplier2}`, answer: (multiplier1 * multiplier2).toLocaleString() });
            }
        } else if (selectedOption === '2x2') {
            for (let i = 0; i < 5; i++) {
                multiplier1 = Math.floor(Math.random() * 90) + 10; // 10 to 99
                multiplier2 = Math.floor(Math.random() * 90) + 10; // 10 to 99
                questions.push({ question: `${multiplier1} × ${multiplier2}`, answer: (multiplier1 * multiplier2).toLocaleString() });
            }
        } else if (selectedOption === '2x3') {
            for (let i = 0; i < 5; i++) {
                multiplier1 = Math.floor(Math.random() * 90) + 10; // 10 to 99
                multiplier2 = Math.floor(Math.random() * 899) + 101; // 101 to 999
                questions.push({ question: `${multiplier1} × ${multiplier2}`, answer: (multiplier1 * multiplier2).toLocaleString() });
            }
        } else if (selectedOption === '3x3') {
            for (let i = 0; i < 5; i++) {
                multiplier1 = Math.floor(Math.random() * 899) + 101; // 101 to 999
                multiplier2 = Math.floor(Math.random() * 899) + 101; // 101 to 999
                questions.push({ question: `${multiplier1} × ${multiplier2}`, answer: (multiplier1 * multiplier2).toLocaleString() });
            }
        }
    } else if (type === 'division') {
        let selectedOption = document.getElementById('divisionType').value;

        if (selectedOption === 'divNoRemainder') {
            for (let i = 0; i < 5; i++) {
                divisor = Math.floor(Math.random() * 12) + 1; // 1 to 12
                quotient = Math.floor(Math.random() * 90) + 12; // 12 to 101
                dividend = divisor * quotient;
                questions.push({ question: `${dividend} ÷ ${divisor}`, answer: quotient.toLocaleString() });
            }
        } else if (selectedOption === 'divWithRemainder') {
            for (let i = 0; i < 5; i++) {
                divisor = Math.floor(Math.random() * 12) + 1; // 1 to 12
                dividend = Math.floor(Math.random() * 900) + 100; // 100 to 999
                quotient = Math.floor(dividend / divisor);
                remainder = dividend % divisor;
                questions.push({ question: `${dividend} ÷ ${divisor}`, answer: `${quotient} R${remainder}` });
            }
        } else if (selectedOption === 'divDecimal') {
            for (let i = 0; i < 5; i++) {
                divisor = Math.floor(Math.random() * 12) + 1; // 1 to 12
                dividend = Math.floor(Math.random() * 900) + 100; // 100 to 999
                quotient = (dividend / divisor).toFixed(2);
                questions.push({ question: `${dividend} ÷ ${divisor}`, answer: quotient });
            }
        } else if (selectedOption === 'divLarge') {
            for (let i = 0; i < 5; i++) {
                divisor = Math.floor(Math.random() * 90) + 10; // 10 to 99
                quotient = Math.floor(Math.random() * 90) + 12; // 12 to 101
                dividend = divisor * quotient;
                questions.push({ question: `${dividend} ÷ ${divisor}`, answer: quotient.toLocaleString() });
            }
        } else if (selectedOption === 'divLargeWithRemainder') {
            for (let i = 0; i < 5; i++) {
                divisor = Math.floor(Math.random() * 90) + 10; // 10 to 99
                dividend = Math.floor(Math.random() * 9000) + 1000; // 1000 to 9999
                quotient = Math.floor(dividend / divisor);
                remainder = dividend % divisor;
                questions.push({ question: `${dividend} ÷ ${divisor}`, answer: `${quotient} R${remainder}` });
            }
        }
    }

    // Display Questions and Answers
    questions.forEach((item, index) => {
        let qaDiv = document.createElement("div");
        qaDiv.classList.add("question-answer");

        let questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerText = `${index + 1}. ${item.question}`;
        qaDiv.appendChild(questionDiv);

        let answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");
        answerDiv.style.visibility = "hidden";
        answerDiv.innerText = item.answer;
        qaDiv.appendChild(answerDiv);

        document.getElementById("questions").appendChild(qaDiv);
        answers.push(answerDiv);
    });

    window.showAnswers = function() {
        if (document.getElementById("showAnswersBtn").disabled) return;
        document.getElementById("showAnswersBtn").disabled = true;
        answers.forEach(answerDiv => answerDiv.style.visibility = "visible");
        document.getElementById("answers").style.display = "block";
    };
}
