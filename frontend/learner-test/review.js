const testResult =
    JSON.parse(
        localStorage.getItem("testResult")
    );
/* =========================
   CHECK RESULT
========================= */
if (!testResult) {
    alert(
        "No test result found."
    );
    window.location.href =
        "test.html";
}
/* =========================
   GET DATA
========================= */
const questions =
    testResult.questions;
const userAnswers =
    testResult.answers;
const totalQuestions =
    testResult.total;
const score =
    testResult.score;
/* =========================
   CALCULATE INCORRECT
========================= */
const incorrect =
    totalQuestions - score;
/* =========================
   SUMMARY
========================= */
const reviewSummary =
    document.getElementById(
        "reviewSummary"
    );
reviewSummary.innerHTML = `
    <div class="summary-card">
        <span class="summary-icon">
            🎯
        </span>
        <div>
            <h3>
                Score
            </h3>
            <p>
                ${score} / ${totalQuestions}
            </p>
        </div>
    </div>
    <div class="summary-card correct-summary">
        <span class="summary-icon">
            ✅
        </span>
        <div>
            <h3>
                Correct
            </h3>
            <p>
                ${score}
            </p>
        </div>
    </div>
    <div class="summary-card incorrect-summary">
        <span class="summary-icon">
            ❌
        </span>
        <div>
            <h3>
                Incorrect
            </h3>
            <p>
                ${incorrect}
            </p>
        </div>
    </div>
`;
/* =========================
   REVIEW CONTAINER
========================= */
const reviewContainer =
    document.getElementById(
        "reviewContainer"
    );
/* =========================
   RENDER QUESTIONS
========================= */
questions.forEach(
    function (question, questionIndex) {
        const userAnswer =
            userAnswers[
                questionIndex
            ];
        const isCorrect =
            userAnswer ===
            question.correctAnswer;
        const reviewCard =
            document.createElement(
                "div"
            );
        reviewCard.classList.add(
            "review-card"
        );
        if (isCorrect) {
            reviewCard.classList.add(
                "correct-card"
            );
        } else {
            reviewCard.classList.add(
                "incorrect-card"
            );
        }
        /* =========================
           IMAGE
        ========================= */
        let imageHTML = "";
        if (question.image) {
            imageHTML = `
                <div
                    class="review-image-container"
                >
                    <img
                        src="${question.image}"
                        alt="Traffic sign"
                        class="review-image"
                    >
                </div>
            `;
        }
        /* =========================
           OPTIONS
        ========================= */
        let optionsHTML = "";
        question.options.forEach(
            function (
                option,
                optionIndex
            ) {
                let optionClass =
                    "review-option";
                /*
                Correct answer
                */
                if (
                    optionIndex ===
                    question.correctAnswer
                ) {
                    optionClass +=
                        " correct-answer";
                }
                /*
                Wrong selected answer
                */
                if (
                    optionIndex ===
                    userAnswer
                    &&
                    optionIndex !==
                    question.correctAnswer
                ) {
                    optionClass +=
                        " wrong-answer";
                }
                /*
                Not answered
                */
                if (
                    userAnswer === null
                ) {
                    optionClass +=
                        "";
                }
                const letters =
                    [
                        "A",
                        "B",
                        "C",
                        "D"
                    ];
                optionsHTML += `
                    <div
                        class="${optionClass}"
                    >
                        <div
                            class="option-letter"
                        >
                            ${letters[
                                optionIndex
                            ]}
                        </div>
                        <div
                            class="option-text"
                        >
                            ${option}
                        </div>
                        <div
                            class="answer-indicator"
                        >
                            ${
                                optionIndex ===
                                question.correctAnswer
                                    ? "✓ Correct"
                                    : optionIndex ===
                                      userAnswer
                                    ? "✗ Your Answer"
                                    : ""
                            }
                        </div>
                    </div>
                `;
            }
        );
        /* =========================
           CARD CONTENT
        ========================= */
        reviewCard.innerHTML = `
            <div
                class="review-card-header"
            >
                <div>
                    <span
                        class="question-number"
                    >
                        Question
                        ${questionIndex + 1}
                    </span>
                    <span
                        class="question-category"
                    >
                        ${question.category}
                    </span>
                </div>
                <div
                    class="review-status"
                >
                    ${
                        isCorrect
                            ? "✓ Correct"
                            : "✗ Incorrect"
                    }
                </div>
            </div>
            <h2
                class="review-question"
            >
                ${question.question}
            </h2>
            ${imageHTML}
            <div
                class="review-options"
            >
                ${optionsHTML}
            </div>
            <div
                class="answer-details"
            >
                <p>
                    <strong>
                        Your Answer:
                    </strong>
                    ${
                        userAnswer !== null
                            ? question.options[
                                userAnswer
                              ]
                            : "Not Answered"
                    }
                </p>
                <p>
                    <strong>
                        Correct Answer:
                    </strong>
                    ${
                        question.options[
                            question.correctAnswer
                        ]
                    }
                </p>
            </div>
        `;
        reviewContainer.appendChild(
            reviewCard
        );
    }
);
/* =========================
   BACK BUTTON
========================= */
document
    .getElementById(
        "backToResultBtn"
    )
    .addEventListener(
        "click",
        function () {
            window.location.href =
                "result.html";
        }
    );