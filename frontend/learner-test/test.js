const TEST_QUESTION_COUNT = 20;

/* =========================
   SHUFFLE ARRAY
========================= */
function shuffleArray(array) {
    const shuffled = [...array];
    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {
        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );
        [
            shuffled[i],
            shuffled[randomIndex]
        ]
        =
        [
            shuffled[randomIndex],
            shuffled[i]
        ];
    }
    return shuffled;
}
/* =========================
   SHUFFLE QUESTION OPTIONS
========================= */
function shuffleQuestionOptions(question) {
    const optionsWithAnswer =
        question.options.map(
            function(option, index) {
                return {
                    text: option,
                    isCorrect:
                        index ===
                        question.correctAnswer
                };
            }
        );
    const shuffledOptions =
        shuffleArray(
            optionsWithAnswer
        );
    return {
        ...question,
        options:
            shuffledOptions.map(
                item => item.text
            ),
        correctAnswer:
            shuffledOptions.findIndex(
                item =>
                    item.isCorrect
            )
    };
}

/* =========================
   CREATE RANDOM TEST
========================= */
const questions =
    shuffleArray(questionBank)
        .slice(0,Math.min(TEST_QUESTION_COUNT,questionBank.length)
        ).map(shuffleQuestionOptions);


let currentQuestionIndex = 0;

const userAnswers = new Array(
    questions.length
).fill(null);
const markedForReview = new Array(
    questions.length
).fill(false);
let timeRemaining = 15 * 60;
/* =========================
   GET ELEMENTS
========================= */
const questionText =
    document.getElementById(
        "questionText"
    );
const optionsContainer =
    document.getElementById(
        "optionsContainer"
    );
const currentQuestionElement =
    document.getElementById(
        "currentQuestion"
    );
const totalQuestionsElement =
    document.getElementById(
        "totalQuestions"
    );
const questionCategory =
    document.getElementById(
        "questionCategory"
    );
const questionPalette =
    document.getElementById(
        "questionPalette"
    );
const progress =
    document.getElementById(
        "progress"
    );
const questionImageContainer =
    document.getElementById(
        "questionImageContainer"
    );
const questionImage =
    document.getElementById(
        "questionImage"
    );
/* =========================
   TOTAL QUESTIONS
========================= */
totalQuestionsElement.textContent =
    questions.length;
/* =========================
   LOAD QUESTION
========================= */
function loadQuestion() {
    const question =
        questions[currentQuestionIndex];
    currentQuestionElement.textContent =
        currentQuestionIndex + 1;
    questionCategory.textContent =
        question.category;
    questionText.textContent =
        question.question;
    if (question.image) {
        questionImage.src = question.image;
        questionImage.alt =
            `${question.category} question image`;
        questionImageContainer.classList.remove(
            "hidden"
        );
    }
    else {
        questionImage.removeAttribute("src");
        questionImageContainer.classList.add(
            "hidden"
        );
    }
    const progressPercentage =
        (
            (currentQuestionIndex + 1)
            /
            questions.length
        ) * 100;
    progress.style.width =
        `${progressPercentage}%`;
    optionsContainer.innerHTML = "";
    question.options.forEach(
        function (option, index) {
            const optionElement =
                document.createElement("button");
            optionElement.classList.add(
                "option"
            );
            if (
                userAnswers[currentQuestionIndex]
                === index
            ) {
                optionElement.classList.add(
                    "selected"
                );
            }
            const letters =
                ["A", "B", "C", "D"];
            optionElement.innerHTML = `
                <span class="option-letter">
                    ${letters[index]}
                </span>
                <span>
                    ${option}
                </span>
            `;
            optionElement.addEventListener(
                "click",
                function () {
                    userAnswers[
                        currentQuestionIndex
                    ] = index;
                    loadQuestion();
                    renderQuestionPalette();
                }
            );
            optionsContainer.appendChild(
                optionElement
            );
        }
    );
    renderQuestionPalette();
    updateReviewButton();
}
/* =========================
   QUESTION PALETTE
========================= */
function renderQuestionPalette() {
    questionPalette.innerHTML = "";
    questions.forEach(
        function (question, index) {
            const button =
                document.createElement(
                    "button"
                );
            button.textContent =
                index + 1;
            button.classList.add(
                "palette-btn"
            );
            if (
                userAnswers[index] !== null
            ) {
                button.classList.add(
                    "answered"
                );
            }
            if (
                markedForReview[index]
            ) {
                button.classList.remove(
                    "answered"
                );
                button.classList.add(
                    "review"
                );
            }
            if (
                index === currentQuestionIndex
            ) {
                button.classList.add(
                    "current"
                );
            }
            button.addEventListener(
                "click",
                function () {
                    currentQuestionIndex =
                        index;
                    loadQuestion();
                }
            );
            questionPalette.appendChild(
                button
            );
        }
    );
}
/* =========================
   PREVIOUS
========================= */
document
    .getElementById("prevBtn")
    .addEventListener(
        "click",
        function () {
            if (
                currentQuestionIndex > 0
            ) {
                currentQuestionIndex--;
                loadQuestion();
            }
        }
    );
/* =========================
   NEXT
========================= */
document
    .getElementById("nextBtn")
    .addEventListener(
        "click",
        function () {
            if (
                currentQuestionIndex
                <
                questions.length - 1
            ) {
                currentQuestionIndex++;
                loadQuestion();
            }
            else {
                submitTest();
            }
        }
    );
/* =========================
   MARK FOR REVIEW
========================= */
const reviewBtn =
    document.getElementById(
        "reviewBtn"
    );
reviewBtn.addEventListener(
    "click",
    function () {
        markedForReview[
            currentQuestionIndex
        ]
        =
        !markedForReview[
            currentQuestionIndex
        ];
        updateReviewButton();
        renderQuestionPalette();
    }
);
function updateReviewButton() {
    if (
        markedForReview[
            currentQuestionIndex
        ]
    ) {
        reviewBtn.textContent =
            "★ Remove Review";
    }
    else {
        reviewBtn.textContent =
            "☆ Mark for Review";
    }
}
/* =========================
   TIMER
========================= */
function updateTimer() {
    const minutes =
        Math.floor(
            timeRemaining / 60
        );
    const seconds =
        timeRemaining % 60;
    document.getElementById(
        "timer"
    ).textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        submitTest();
    }
    timeRemaining--;
}
const timerInterval =
    setInterval(
        updateTimer,
        1000
    );
updateTimer();
/* =========================
   SUBMIT TEST
========================= */
function submitTest() {
    clearInterval(
        timerInterval
    );
    let correctAnswers = 0;
    questions.forEach(
        function (question, index) {
            if (
                userAnswers[index]
                ===
                question.correctAnswer
            ) {
                correctAnswers++;
            }
        }
    );
    const result = {
        score:
            correctAnswers,
        total:
            questions.length,
        answers:
            userAnswers,
        questions:
            questions
    };
    localStorage.setItem(
        "testResult",
        JSON.stringify(result)
    );
    window.location.href =
        "result.html";
}
/* =========================
   SUBMIT BUTTON
========================= */
document
    .getElementById(
        "submitTestBtn"
    )
    .addEventListener(
        "click",
        function () {
            const confirmSubmit =
                confirm(
                    "Are you sure you want to submit the test?"
                );
            if (
                confirmSubmit
            ) {
                submitTest();
            }
        }
    );
/* =========================
   INITIAL LOAD
========================= */
loadQuestion();