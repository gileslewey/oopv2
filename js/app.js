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
const lives = document.querySelectorAll('li.tries');
console.log(lives);

startButton.addEventListener('click', function(){
game = new Game();
game.startGame();
game.handleInteraction();
});

//document.querySelector(`#scoreboard ol :nth-child(${i})`).firstChild.src = 'images/lostHeart.png'
// for (let i=0; i<hearts.length; i++) {
//   document.querySelector(`#scoreboard ol :nth-child(${i})`).firstChild.src = 'images/liveHeart.png';
// }

// for (let i=1; i<lives.length +1; i++) {
//   document.querySelector(`#scoreboard ol :nth-child(${i})`).firstChild.src = 'images/lostHeart.png'
// }
