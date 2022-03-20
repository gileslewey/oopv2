/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const keyStrokes = document.getElementById('qwerty');
const startButton = document.getElementById('btn__reset');
const overlay = document.getElementById('overlay');
const gameOverMessage = document.getElementById('game-over-message');
const keyRows = document.getElementById('qwerty');
const textSpot = document.getElementById('phrase').getElementsByTagName('ul')[0];
const buttons = document.querySelectorAll('button');
const key = document.querySelectorAll('.key');
const lives = document.querySelectorAll('li.tries');
const endImage = document.getElementById('btn__reset');
const keypad = document.getElementById('qwerty');


/* custom style colors
 * Simpsons theme
 */
const chosenColor = '#2f64d6';
const wrongColor = '#ff81c1';
const tileColor = '#f8db27';
const showColor = '#9c5b01';
const loseColor = '#ff81c1';
const winColor = '#2f64d6';
const winMessage = 'Woo Hoo!';
const loseMessage = '(BEEEELLLCH)';
document.documentElement.style
    .setProperty('--color-neutral-light', tileColor);



startButton.addEventListener('click', function(){
game = new Game();
game.startGame();
});


// keypad option
keypad.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);

    }
});

//keyboard option
const keyboard = document.querySelectorAll('.key');
document.addEventListener('keydown', (event) => {
    for(let i=0; i< keyboard.length; i++) {
    if (event.key.toLowerCase() === keyboard[i].textContent && keyboard[i].disabled === false) {
        game.handleInteraction(keyboard[i]);
    }
  }
});
