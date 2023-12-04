/*------ plan of action ------*/
// Identify and initialize our state variables
// code the main render() function and renderShip()

//code function to handle right and wrong guesses

//code the guess letter button / or have letter chart
//code the reset button

//code win/loss logic

/*------ constants ------*/
const wordDB = [
    "BOOM",
    "HEART",
    "BUZZED",
    "FIZZY",
    "ROGUE",
    "SPHINX",
    "TODAY",
    "PIXEL",
    "BLESS",
    "CONNECT",
    "LEARN",
    "FOLLOW",
    "DANGER",
    "WELCOME",
    "AFFIX",
    "LENGTHS",
    "GALAXY",
    "LUCKY",
    "AWKWARD",
    "SUBWAY",
    "TRANSCRIPT"
]


/*------ cached element references ------*/

//grabbing the hidden word element - HTML
const hiddenWordEl = document.getElementById('hword')
const guessesEl = document.getElementById('guesses')
const statusEl = document.getElementById('status')
const formEl = document.getElementById('formGuess')
const imgEl = document.querySelector('img');
//console.log("this is hword value: ", hiddenWordEl)




/*------ App's initial state variables ------*/
let wrongGuesses
let guessedLetters
let hiddenWord




/*------ functions ------*/
function init() {
    wrongGuesses = 0
    guessedLetters = []
    hiddenWord = wordDB[Math.floor(Math.random() * wordDB.length)]
    //select the hidden word from wordDB
    console.log("hidden word is: ", hiddenWord)
    formEl.style.visibility = 'visible'
    //eventually call render   
    render() 
    renderShip()
}

init()

function renderHiddenWord() {
    
    for (let i = 0; i < hiddenWord.length; i++) {
        //for each letter in hiddenWord create a span to hold
        //the hiddenWord spaces in the hword element
        hiddenWordtoSpace = document.createElement("span");
		hiddenWordtoSpace.innerText = "__ ";
        hiddenWordtoSpace.setAttribute("id", `space-${i}`);
        hiddenWordEl.appendChild(hiddenWordtoSpace);
        //console.log("this is hword", hword)
	}
}

function render(){
    renderHiddenWord()
}

function handleChoice(evt) {
    evt.preventDefault();
    //hidden word array split by letter so we can compare them to the guessed letter
    const hiddenWordArray = hiddenWord.split("");
    console.log("this is the hidden word array", hiddenWordArray)
    //capturing the user guess and making it upper case
    let userGuess = document.getElementById("guess").value.toUpperCase()
    console.log("this is the userGuessed letter: ", userGuess)

    if (hiddenWordArray.includes(userGuess)) {
        for (var i = 0; i < hiddenWord.length; i++) {
            //it was recomended to make a loop to iterate over the array to resolve that issue.
            if (hiddenWordArray[i] === userGuess) {
                //does hidden word array(letter in array = user Guess?)
                const letterSpace = document.getElementById(`space-${i}`)
                //set letterSpace = to the elementID(blank space id ())
                letterSpace.innerText=userGuess
                //apply letterSpace value to the HTML element
            }
        }
    } else {
        wrongGuesses += 1
        console.log("current wrong guesses: ", wrongGuesses)
    } 
    //updating the guessedLetters array
    guessedLetters.push(userGuess)
    console.log("guessed letter aray: ", guessedLetters)
    //updating the guesses element with the guessedLetters array
    guessesEl.innerText=guessedLetters
    //blank out the guess box
    document.getElementById('guess').value = ''
    renderShip()
    winner()
}

function winner() {
    //if the hiddenWord elent = the hiddenWord variable: WIN!!
    if (hiddenWordEl.innerText === hiddenWord) {
        statusEl.innerText="Spaceman has been stopped. You have won!!"
        statusEl.style.color = "lightgreen"
        statusEl.style.textShadow = "4px 4px 20px #000000"
    } else if (wrongGuesses === 6) {
        //if wrongGuesses = 6: LOSE!
        statusEl.innerText="Spaceman has gotten away. Try again!!"
        statusEl.style.color = "red"
        statusEl.style.textShadow = "4px 4px 20px #000000"
        formEl.style.visibility = 'hidden'
    }
}   

function reset() {
    //reset the hiddenWord element to blank
    hiddenWordEl.innerText=""
    //reset the guessed letters to blank
    guessesEl.innerText=""
    //reset the status element
    statusEl.innerText=""
    init()
}


function renderShip() {
    //render the spaceman based on wrong guesses
    imgEl.src = `imgs/GIR${wrongGuesses}.jpeg`; 
} 

/*------ event listeners ------*/
document.querySelector('#submit').addEventListener('click', handleChoice)
document.querySelector('#reset').addEventListener('click', reset)