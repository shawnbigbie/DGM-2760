//document.getElementById('company').innerHTML = "Shawn's Bed and Breakfast"

document.querySelector('#company').innerText = "Shawn's Bed and Breakfast"

document.querySelector('header > h2').innerText = "Best Legacy B&B this side of Utah!"

let userName = prompt("What is your name?")

//let message = "Hello " + userName + ", welcome to the best B&B in Utah!"

let message = `Hello ${userName}, welcome to the finest B&B in Utah, Salt Lake City`

document.querySelector(`#greeting`).innerText = message