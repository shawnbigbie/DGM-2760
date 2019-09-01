//document.getElementById('company').innerHTML = "Shawn's Bed and Breakfast"

document.querySelector('#company').innerText = "Website Inspector"

document.querySelector('#slogan').innerText = "Inspector for the Webpage Properities"

function reDisplay() {
    let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
    let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top of the display.`
    let myWindow = document.querySelector('#myWindow').innerText = windowSizes + '\n' + offset

    let documentProp = `Document Title is ${document.title}`
    let update = `This document was last updated on ${document.lastModified}`
    let myDocument = document.querySelector('#myDocument').innerText = documentProp + '\n' + update
}

reDisplay()