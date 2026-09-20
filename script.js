function toggleThreat(card) {
    card.classList.toggle("open");
}


/* Quiz */

const quizForm = document.getElementById("quizForm");

if (quizForm) {

    quizForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const answers = {
            q1: "b",
            q2: "c",
            q3: "a",
            q4: "a"
        };

        let score = 0;


        Object.keys(answers).forEach(function(question) {

            const selected = document.querySelector(
                'input[name="' + question + '"]:checked'
            );

            if (
                selected &&
                selected.value === answers[question]
            ) {
                score++;
            }

        });


        const result = document.getElementById("quizResult");


        result.innerHTML =
            "<h2>Your Score: " +
            score +
            "/4</h2>" +

            "<p>" +
            getQuizMessage(score) +
            "</p>";


        result.classList.add("show");

    });
}


/* Quiz Result Message */

function getQuizMessage(score) {

    if (score === 4) {

        return "Excellent! Your cybersecurity basics are strong.";

    }

    if (score >= 2) {

        return "Good start! Review the Learn page and try again.";

    }

    return "Keep practicing! Revisit the basics and try the quiz again.";

}
function checkPassword() {

    let password = document.getElementById("password").value;

    let hasUppercase = /[A-Z]/.test(password);
    let hasLowercase = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[^A-Za-z0-9]/.test(password);

    if (password.length < 8) {
        document.getElementById("passwordResult").innerHTML = "Weak Password";
    }
    else if (!hasUppercase) {
        document.getElementById("passwordResult").innerHTML = "Add an uppercase letter";
    }
    else if (!hasLowercase) {
        document.getElementById("passwordResult").innerHTML = "Add a lowercase letter";
    }
    else if (!hasNumber) {
        document.getElementById("passwordResult").innerHTML = "Add a number";
    }
    else if (!hasSpecial) {
        document.getElementById("passwordResult").innerHTML = "Add a special character";
    }
    else {
        document.getElementById("passwordResult").innerHTML = "Strong Password";
    }
}