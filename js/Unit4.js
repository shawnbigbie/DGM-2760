document.querySelector('#header').innerText = "Fortune Teller"

document.querySelector('#topic').innerText = "Switch Statements"

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = "January"
            break;
        case 2:
            name = "February"
            break;
        case 3:
            name = "March"
            break;
        case 4:
            name = "April"
            break;
        case 5:
            name = "May"
            break;
        case 6:
            name = "June"
            break;
        case 7:
            name = "July"
            break;
        case 8:
            name = "August"
            break;
        case 9:
            name = "September"
            break;
        case 10:
            name = "October"
            break;
        case 11:
            name = "November"
            break;
        case 12:
            name = "December"
            break;
        default:
            name = "Not a month"
            break;
    } 
    return name
  }

  function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = 'be deatured as the strongest superhero in the next Marvel movie!'
        break;
        case 2:
            message = 'win million of dollars from a long lost family member'
        break;
        case 3:
            message = 'win the lottery'
        break;
        case 4:
            message = 'have a beautiful, smart, and loving person will be coming into your life'
        break;
        case 5:
            message = 'have an important person will offer you support'
        break;
        default:
            message = 'Some sort of error occured'
        break;
    }
    return message
  }

let month = getRandomIntInclusive(1, 12)
const monthName = getMonthName(month)

let fate = getRandomIntInclusive(1,5)
const fateMessage = getFortune(fate)

let day = getRandomIntInclusive (1, 30)

const fortuneRevealed = `On ${monthName} ${day}, you will ${fateMessage}`

document.querySelector('#fortune').innerText = fortuneRevealed