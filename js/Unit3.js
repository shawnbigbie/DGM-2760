document.querySelector('#company').innerText = "Guessing Game"

document.querySelector('#slogan').innerText = "Loops"

document.querySelector('#instructions').innerText = "In this game you try to guess a random number between 1 and 16 in as few tries as possible. You will be awarded a ribbon for your tries, Good luck. If you would like to play again, refresh the page."

// Pick a random number between 0 and 16

let correctNumber = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

function evalGuess(){
    totalGuesses += 1 // totalGuesses = totalGuesses +1
    gamerGuess = document.querySelector('#guess').value
    console.log(totalGuesses, gamerGuess)
    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
        console.log(`gamerGuess is equal to correctNumber`)
        feedback.innerText = 'You win!'
        giveAward()
        document.getElementById("myBtn").disabled = true;
    } else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'too high , try again'
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'too low, try again'
    } else {
        feedback.innerText = 'Please choose a number between 1 and 15 and try again'
        totalGuesses -= 1
    }

    document.querySelector('#attempts').innerText = totalGuesses

}

function giveAward() {
    console.log('Congratulations!')
    let imagePath = '#'
    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = '../images/1stplace.PNG'
        break
        case 4:
        case 5:
        case 6:
            imagePath = '../images/2ndplace.PNG'
        break
        case 7:
            imagePath = '../images/3rdplace.PNG'
        break
    }

    const awardImage = document.createElement('img') // Creates a <img> element
    awardImage.setAttribute('src', imagePath)

    const ribbon = document.querySelector('#ribbon')

    ribbon.appendChild(awardImage)
}