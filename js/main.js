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
    // "HEART",
    "BUZZED",
//    // "FIZZY",
//     "ROGUE",
//     "SPHINX",
//     "TODAY",
    "PIXEL",
//   //  "BLESS",
//   //  "CONNECT",
//     "LEARN"
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
let dupLtrArr




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
        console.log("this is hword", hword)
	}
}

function render(){
    renderHiddenWord()
}

function handleChoice(evt) {
    evt.preventDefault();
    dupLtrArr = []
    //hidden word array split by letter so we can compare them to the guessed letter
    const hiddenWordArray = hiddenWord.split("");
    console.log("this is the hidden word array", hiddenWordArray)
    //capturing the user guess and making it upper case
    let userGuess = document.getElementById("guess").value.toUpperCase()
    console.log("this is the userGuessed letter: ", userGuess)

   if (hiddenWordArray.includes(userGuess)) {
        // console.log('guess is in word!!!')
        // console.log('letter index', hiddenWordArray.indexOf(userGuess))
        // //assigning correctGuessIndex to the index of hiddenwordarray(userGuess)
        //     //if user guess is correct assigning it the index of the guess
        // const correctGuessIndex = hiddenWordArray.indexOf(userGuess)
        // const letterSpace = document.getElementById(`space-${correctGuessIndex}`)
        // letterSpace.innerText=userGuess

        // hiddenWordArray.forEach((ltr, idx) => { if(userGuess == ltr){ dupLtrArr.push({letter: ltr, ind: idx})}})
        // console.log("this is the duplicate letters: ", dupLtrArr)
        for (var i = 0; i < hiddenWord.length; i++) {
            if (hiddenWordArray[i]=== userGuess) {
                //const correctGuessIndex = hiddenWordArray.indexOf(userGuess)
                const letterSpace = document.getElementById(`space-${i}`)
                letterSpace.innerText=userGuess
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
        statusEl.innerText="You have won!"
    } else if (wrongGuesses === 6) {
        //if wrongGuesses = 7: LOSE!
        statusEl.innerText="You have lost!"
        formEl.style.visibility = 'hidden'
    }
}   

function reset() {
    hiddenWordEl.innerText=""
    guessesEl.innerText=""
    statusEl.innerText=""
    init()
}


function renderShip() {
    imgEl.src = `imgs/spaceman-${wrongGuesses}.jpg`; 
} 

/*------ event listeners ------*/
//document.querySelector('#reset').addEventListener('click', init)
document.querySelector('#submit').addEventListener('click', handleChoice)
document.querySelector('#reset').addEventListener('click', reset)