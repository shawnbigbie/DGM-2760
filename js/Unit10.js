function duplicateMenu() {
    // get all of the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    // create the new list items for the bottom of the page
    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')

        // make new a tag for new list and get text
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        newLink.textContent = menuItem.textContent

        // append children to make them appear in the DOM
        document.querySelector('#smallNavArea').appendChild(newList)
        newList.appendChild(newLI)
        newLI.appendChild(newLink)
    })
}
duplicateMenu()