// Document SetUp DOM
document.querySelector('#header').innerText = "Nonsense Story"

document.querySelector('#topic').innerText = "String Manipulation"

// Fuction
function tellStory(){

    //Get Rid of Spaces and Tabs in Array
    const res = (/\s+/)

    //Array and Variables
    var nounArray = document.getElementById("noun").value //Get each Value
    var nounlow = nounArray.toLowerCase(); // LowerCase Values
    var noun = nounlow.split(res); // Split into Array
    console.log(noun)

    var adjectiveArray = document.getElementById("adjective").value //Get each Value
    var adjectivelow = adjectiveArray.toLowerCase(); // LowerCase Values
    var adjective = adjectivelow.split(res); // Split into Array
    console.log(adjective)

    var verbArray = document.getElementById("verb").value //Get each Value
    var verblow = verbArray.toLowerCase(); // LowerCase Values
    var verb = verblow.split(res); // Split into Array
    console.log(verb)

    // Story Setup
    const myStory = `Meet your new supper ${noun[2]}, a supper-${adjective[1]} and ${adjective[0]} hero. He has lots of powers such as ${verb[1]}ing and ${verb[2]}ing, He fights crime at Night in a ${noun[0]} and Eventually wins over the ${adjective[2]} enemy by subdued them by ${verb[0]}ing them with a ${noun[1]}, The End.`

    // Send Story back to Webpage HTML
    document.querySelector('#story').innerHTML = myStory
}