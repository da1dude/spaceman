/*------ plan of action ------*/
// Identify and initialize our state variables
// code the main render() function and renderShip()

//code function to handle right and wrong guesses

//code the guess letter button / or have letter chart
//code the reset button

//code win/loss logic

/*------ constants ------*/

const CORRECT = new Audio("audio/correct.mp3")
const WRONG = new Audio("audio/wrong.mp3")

const db1 = [
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
    "AFFIX"
]

const db2 = [
    "PIXIES",
    "QUEEN",
    "NIRVANA",
    "BEATLES",
    "METALLICA",
    "FOREIGNER",
    "ACDC",
    "CURE",
    "AEROSMITH",
    "EAGLES",
    "JOURNEY",
    "REM",
    "RUSH",
    "COLDPLAY",
    "SOUNDGARDEN"
]

const db3 = [
    "RED",
    "YELLOW",
    "GREEN",
    "PINK",
    "BLUE",
    "ORANGE",
    "TEAL",
    "BLACK",
    "PURPLE",
    "WHITE",
    "CYAN",
    "BROWN",
    "GREY",
    "MAGENTA",
    "LAVENDER"
]


/*------ cached element references ------*/

//grabbing the hidden word element - HTML
const hiddenWordEl = document.getElementById('hword')
const guessesEl = document.getElementById('guesses')
const statusEl = document.getElementById('status')
const formEl = document.getElementById('formGuess')
const imgEl = document.querySelector('img');
const titleEl = document.querySelector('h1');
const dbChoiceEl = document.querySelector('form-choice');




/*------ App's initial state variables ------*/
let wrongGuesses
let guessedLetters
let hiddenWord
let dbChoice




/*------ functions ------*/
function init() {
    chooseDB() //first choose the DB to use
    wrongGuesses = 0
    guessedLetters = []
    //hiddenWord = wordDB[Math.floor(Math.random() * wordDB.length)]
    //select the hidden word from wordDB
    console.log("hidden word is: ", hiddenWord)
    formEl.style.visibility = 'visible'
    statusEl.innerText="Select a topic and start your guessing!" //setting the default text
    titleEl.classList.remove("animation") //remove the applied animation class to the h1(title)
    titleEl.offsetWidth //this causes a DOM reflow to allow for the animation class list to work on RESET button
    titleEl.classList.add("animation") //add the applied animation class to the h1(title)
    render() 
    renderShip()
}

init()

function chooseDB() {
    //grabing the value of the form HTML to choose which DB to use
    dbChoice = document.getElementById("db-choice").value
    //selecting the DB to use based on dbChoice
    //hiddenWord = `${dbChoice}`[Math.floor(Math.random() * `${dbChoice}`.length)]
    if (dbChoice === "db1") {
        hiddenWord = db1[Math.floor(Math.random() * db1.length)]
    } else if (dbChoice === "db2") {
        hiddenWord = db2[Math.floor(Math.random() * db2.length)]
    } else if (dbChoice === "db3") {
        hiddenWord = db3[Math.floor(Math.random() * db3.length)]
    }
}

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
    //prevents the default action of form in HTML
    evt.preventDefault();
    //hidden word array split by letter so we can compare them to the guessed letter
    const hiddenWordArray = hiddenWord.split("");
    //console.log("this is the hidden word array", hiddenWordArray)
    //capturing the user guess and making it upper case
    let userGuess = document.getElementById("guess").value.toUpperCase()
    //console.log("this is the userGuessed letter: ", userGuess)

    if (hiddenWordArray.includes(userGuess)) {
        //play correct sound
        CORRECT.play()
        for (var i = 0; i < hiddenWord.length; i++) {
            //looping over the array to find all the values that match userGuess
            if (hiddenWordArray[i] === userGuess) {
                //does hidden word array(letter in array = user Guess?)
                const letterSpace = document.getElementById(`space-${i}`)
                //set letterSpace = to the elementID(blank space id ())
                letterSpace.innerText=userGuess
                //apply letterSpace value to the HTML element
            }
        }
    } else {
        //play incorrect sound
        WRONG.play()
        wrongGuesses += 1
        //console.log("current wrong guesses: ", wrongGuesses)
    } 
    //updating the guessedLetters array
    guessedLetters.push(userGuess)
    //console.log("guessed letter aray: ", guessedLetters)
    //updating the guesses element with the guessedLetters array
    guessesEl.innerText=guessedLetters
    //blank out the guess box
    document.getElementById('guess').value = ""
    renderShip()
    winner()
}

function winner() {
    //if the hiddenWord elent = the hiddenWord variable: WIN!!
    if (hiddenWordEl.innerText === hiddenWord) {
        //update and style the element
        statusEl.innerText="Spaceman has been stopped. You have won!!"
        statusEl.style.color = "lightgreen"
        statusEl.style.textShadow = "4px 4px 20px #000000"
        //hdie the guess area on win
        formEl.style.visibility = "hidden"
    } else if (wrongGuesses === 6) {
        //if wrongGuesses = 6: LOSE!
        //update and style the element
        statusEl.innerText=`Spaceman has gotten away. The word was ${hiddenWord} Try again!!`
        statusEl.style.color = "darkred"
        statusEl.style.textShadow = "4px 4px 20px #000000"
        //hdie the guess area on lose
        formEl.style.visibility = "hidden"
    }
}   

function reset() {
    //reset the hiddenWord element to blank
    hiddenWordEl.innerText=""
    //reset the guessed letters to blank
    guessesEl.innerText=""
    //reset the statusEL back to black from red/green
    statusEl.style.color = "black"
    init()
}


function renderShip() {
    //render the spaceman based on wrong guesses
    imgEl.src = `imgs/GIR${wrongGuesses}.jpeg`; 
} 

/*------ event listeners ------*/
document.querySelector('#submit').addEventListener('click', handleChoice)
document.querySelector('#reset').addEventListener('click', reset)
document.querySelector('#db-choice').addEventListener('change', reset)