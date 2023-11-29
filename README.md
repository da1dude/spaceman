# spaceman
Spaceman is a friendly version of hangman. In this game a spaceship is built as incorrect guesses occur (max of 7). If the player makes too many incorrect guesses the spaceship takes off. The player wins the game by completing the word with guesses still available. 

## Wireframes
![template](wireframe/template.png) 
![loss](wireframe/loss.png) 
![win](wireframe/win.png)


# Images to display to the DOM

- to be added

## User Stories
- As a user, I want to...
- have a reset button (game will load with a current word)
- have a area to input the guess
- have a area to display incorrect guesses
- have a area for the hidden word
- when a letter is guessed correctly it will appear in its word location
- know how many guesses I have left
- know when I have won the game
- know when I have lost the game

## Technologies Used
- HTML5
- CSS3
- JavaScript

##### Font
```css
font-family: Arial, Helvetica, sans-serif;

```

## Psuedocode

1) Define required constants

2) Define required variables used to track the state of the game

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

4) Upon loading the app should:
  4.1) Initialize the state variables
  4.2) Render those values to the page
  4.3) Wait for the user to enter a letter


5) Handle a player entering a letter

6) Render based on correct/incorrect

7) Handle a player clicking the reset button