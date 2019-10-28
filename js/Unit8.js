// Document SetUp DOM
document.querySelector('#header').innerText = "Grant's Tomb"

document.querySelector('#topic').innerText = "Literal Objects"

const question = {
    stem: "Who is buried in Grant's Tomb?",
    option1: "Tom",
    option2: "Grant",
    option3: "Bill",
    option4: "Crish",
    correct: 2,
    display: () => {
        document.querySelector('#stem').textContent = question.stem
        document.querySelector('#answer1').textContent = question.option1
        document.querySelector('#answer2').textContent = question.option2
        document.querySelector('#answer3').textContent = question.option3
        document.querySelector('#answer4').textContent = question.option4
    },
    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector(".feedback").textContent = "You are Correct!"
            document.querySelector(".feedback").style.backgroundColor  = "rgb(91, 212, 61)";
        } else {
            document.querySelector(".feedback").textContent = "Try Again"
            document.querySelector(".feedback").style.backgroundColor  = "rgba(255, 60, 60)";
        }
    }
}

document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))

question.display()