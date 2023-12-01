/*------ plan of action ------*/
// Identify and initialize our state variables
// code the main render() function and renderShip()

//code function to handle right and wrong guesses

//code the guess letter button / or have letter chart
//code the reset button

//code win/loss logic

/*------ constants ------*/
const wordDB = [
   // "BOOM",
    "HEART",
    "BUZZED",
   // "FIZZY",
    "ROGUE",
    "SPHINX",
    "TODAY",
    "PIXEL",
  //  "BLESS",
  //  "CONNECT",
    "LEARN"
]


/*------ cached element references ------*/

//grabbing the hidden word element - HTML
const hiddenWordEl = document.getElementById('hword')
const guessesEl = document.getElementById('guesses')
const statusEl = document.getElementById('status')
const formEl = document.getElementById('form')
//console.log("this is hword value: ", hiddenWordEl)
const gboardEl1 = document.getElementById('ship1')
const gboardEl2 = document.getElementById('ship2')
const gboardEl3 = document.getElementById('ship3')
const gboardEl4 = document.getElementById('ship4')
const gboardEl5 = document.getElementById('ship5')
const gboardEl6 = document.getElementById('ship6')
const gboardEl7 = document.getElementById('ship7')



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
    //eventually call render   
    render() 
}

init()

function renderHiddenWord() {
    
    for (let i = 0; i < hiddenWord.length; i++) {
        //for each letter in hiddenWord create a span to hold
        //the hiddenWord spaces in the hword element
        hiddenWordtoSpace = document.createElement("span");
		hiddenWordtoSpace.innerText = "__ ";
        hiddenWordtoSpace.setAttribute("id", `space-${i}`);
        hword.appendChild(hiddenWordtoSpace);
        console.log("this is hword", hword)
	}
}

function render(){
    renderHiddenWord()
    //renderShip()
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
        console.log('guess is in word!!!')
        console.log('letter index', hiddenWordArray.indexOf(userGuess))
        //assigning correctGuessIndex to the index of hiddenwordarray(userGuess)
            //if user guess is correct assigning it the index of the guess
        const correctGuessIndex = hiddenWordArray.indexOf(userGuess)
        const letterSpace = document.getElementById(`space-${correctGuessIndex}`)
        letterSpace.innerText=userGuess
        // use above //
    } else {
        wrongGuesses += 1
        console.log("current wrong guesses: ", wrongGuesses)
    } 
    //updating the guessedLetters array
    guessedLetters.push(userGuess)
    console.log("guessed letter aray: ", guessedLetters)
    //updating the guesses element with the guessedLetters array
    guessesEl.innerText=guessedLetters
    renderShip()
    winner()
}

function winner() {
    //if the hiddenWord elent = the hiddenWord variable: WIN!!
    if (hiddenWordEl.innerText === hiddenWord) {
        statusEl.innerText="You have won!"
    } else if (wrongGuesses === 7) {
        //if wrongGuesses = 7: LOSE!
        statusEl.innerText="You have lost!"
        formEl.style.visibility = 'hidden'
    }
}   

function reset() {
    wrongGuesses = 0
    guessedLetters = []
    hiddenWord = wordDB[Math.floor(Math.random() * wordDB.length)]
}

function renderShip() {
    if (wrongGuesses === 1) {
        gboardEl1.src = "imgs/Ship-1.png"
    } else if (wrongGuesses === 2) {
        gboardEl1.src = "imgs/Ship-1.png"
        gboardEl2.src = "imgs/Ship-2.png"
    } else if (wrongGuesses === 3) {
        gboardEl1.src = "imgs/Ship-1.png"
        gboardEl2.src = "imgs/Ship-2.png"
        gboardEl3.src = "imgs/Ship-3.png"
    } else if (wrongGuesses === 4) {
        gboardEl1.src = "imgs/Ship-1.png"
        gboardEl2.src = "imgs/Ship-2.png"
        gboardEl3.src = "imgs/Ship-3.png"
        gboardEl4.src = "imgs/Ship-4.png"
    } else if (wrongGuesses === 5) {
        gboardEl1.src = "imgs/Ship-1.png"
        gboardEl2.src = "imgs/Ship-2.png"
        gboardEl3.src = "imgs/Ship-3.png"
        gboardEl4.src = "imgs/Ship-4.png"
        gboardEl5.src = "imgs/Ship-5.png"
    } else if (wrongGuesses === 6) {
        gboardEl1.src = "imgs/Ship-1.png"
        gboardEl2.src = "imgs/Ship-2.png"
        gboardEl3.src = "imgs/Ship-3.png"
        gboardEl4.src = "imgs/Ship-4.png"
        gboardEl5.src = "imgs/Ship-5.png"
        gboardEl6.src = "imgs/Ship-6.png"
    } else if (wrongGuesses === 7) {
        gboardEl1.src = "imgs/Ship-1.png"
        gboardEl2.src = "imgs/Ship-2.png"
        gboardEl3.src = "imgs/Ship-3.png"
        gboardEl4.src = "imgs/Ship-4.png"
        gboardEl5.src = "imgs/Ship-5.png"
        gboardEl6.src = "imgs/Ship-6.png"
        gboardEl7.src = "imgs/Ship-7.png"
    }    
} 

/*------ event listeners ------*/
//document.querySelector('#reset').addEventListener('click', init)
document.querySelector('#submit').addEventListener('click', handleChoice)
document.querySelector('#reset').addEventListener('click', reset)