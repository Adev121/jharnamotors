const resultData =
    JSON.parse(
        localStorage.getItem(
            "testResult"
        )
    );


if (!resultData) {

    window.location.href =
        "index.html";

}


const score =
    resultData.score;


const total =
    resultData.total;


const incorrect =
    total - score;


const passed =
    score >= Math.ceil(
        total * 0.6
    );


document
    .getElementById("score")
    .textContent =
    `${score} / ${total}`;


document
    .getElementById("correct")
    .textContent =
    score;


document
    .getElementById("incorrect")
    .textContent =
    incorrect;


if (passed) {

    document
        .getElementById(
            "resultStatus"
        )
        .textContent =
        "PASSED";


    document
        .getElementById(
            "resultTitle"
        )
        .textContent =
        "Congratulations! 🎉";


    document
        .getElementById(
            "resultMessage"
        )
        .textContent =
        "You have successfully passed this practice test.";


} else {

    document
        .getElementById(
            "resultStatus"
        )
        .textContent =
        "NEEDS PRACTICE";


    document
        .getElementById(
            "resultTitle"
        )
        .textContent =
        "Keep Practicing! 💪";


    document
        .getElementById(
            "resultMessage"
        )
        .textContent =
        "Review your answers and try again to improve your score.";

}


/* TRY AGAIN */

document
    .getElementById(
        "tryAgainBtn"
    )
    .addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "testResult"
            );


            window.location.href =
                "index.html";

        }
    );


/* REVIEW - placeholder for Step 1 */

document
    .getElementById(
        "reviewAnswersBtn"
    )
    .addEventListener(
        "click",
        function () {

            alert(
                "Answer review will be added in the next step."
            );

        }
    );