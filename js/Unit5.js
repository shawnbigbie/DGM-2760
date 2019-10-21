document.querySelector('#header').innerText = "The Arborist"

document.querySelector('#topic').innerText = "Events and Arrays"

// Create an array with 4 trees listed
var trees = ['Oak', 'Pine', 'Aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

let x = trees.toString();
let stringtree = `${x.toLowerCase()}`;

var indexToRemove = 1;
var numberToRemove = 1;

// Display the list of trees inside the displayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span> ${trees.length} elements long</span>`
}

listTrees()

//Add a Redwood Tree to end
document.querySelector('#add_redwood').onclick = () => {
    trees.push('Redwood')
    listTrees()
}

//Add a pear to the start
document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees()
}

//Remove the first tree
document.querySelector('#remove_tree1').onclick = () => {
if (trees.length > 0) {
    trees.shift('')
    listTrees()
}   else {
    errorElement.textContent = 'Dude, I cannot remove the first tree cause there are NO TREES!'
}
}

//Remove the second tree down
document.querySelector('#remove_tree2').onclick = () => {
if (trees.length > 0) {
    trees.splice(indexToRemove, numberToRemove);
    listTrees()
}   else {
    errorElement.textContent = 'Dude, I cannot remove the first tree cause there are NO TREES!'
}
}

//Remove the last tree
document.querySelector('#remove_treeLast').onclick = () => {
if (trees.length > 0) {
    trees.pop('')
    listTrees()
}   else {
    errorElement.textContent = 'Dude, I cannot remove the first tree cause there are NO TREES!'
}
}

//Sort Treelist to A > Z
document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees()
}

//Make all trees lower case
document.querySelector('#lowerTrees').onclick = () => {
    document.getElementById("displayResults").innerHTML = stringtree;
}

//Show Name 3 in List
document.querySelector('#showName3').onclick = () => {
if (trees.length > 2){
    var numberthree = trees.slice(2,3)
    listTrees()
    document.getElementById("displayResults").innerHTML = numberthree;
} else {
    errorElement.textContent = 'There is not a 3rd tree in you tree list'
}
}

//Show Name 4 in List
document.querySelector('#showName4').onclick = () => {
if (trees.length > 3){
    var numberfour = trees.slice(3,4)
    listTrees()
    document.getElementById("displayResults").innerHTML = numberfour;
} else {
    errorElement.textContent = 'There is not a 4th tree in you tree list'
}
}