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
    "LEARN"
]


/*------ cached element references ------*/
//grabbing the hidden word element - HTML
const hiddenWordEl = document.getElementById('hword');
//console.log("this is hword value: ", hiddenWordEl)


/*------ App's initial state variables ------*/
let winner
let wrongGuesses
let hiddenWord
let letterSpace


/*------ functions ------*/
function init() {
    winner = null
    guesses = 0
    //select the hidden word from wordDB
    hiddenWord = wordDB[Math.floor(Math.random() * wordDB.length)];
    console.log("hidden word is: ", hiddenWord)
    //eventually call render   
    render() 
}

init()

function renderHiddenWord() {
    for (let i = 0; i < hiddenWord.length; i++) {
        //for each letter in hiddenWord create a span to hold
        //the hiddenWord spaces in the hword element
		letterSpace = document.createElement('span');
		letterSpace.innerText = '_____ ';
        hword.appendChild(letterSpace);
	}
}

function render(){
    renderHiddenWord()
}

function handleChoice() {

}

/*------ event listeners ------*/
document.querySelector('#reset').addEventListener('click', init)