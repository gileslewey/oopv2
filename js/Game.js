/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {

  constructor(){
  this.missed = 0;

   this.phrases = [
   new Phrase('May the force be with you'),
   new Phrase('Bond james Bond'),
   new Phrase('May the force be with you'),
   new Phrase('You cant handle the truth'),
   new Phrase('Houston we have a problem')
   ];

  this.activePhrase = null;
  }

  /**
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    this.activePhrase = game.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };


 /**
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */
  getRandomPhrase(){
    let newPhrase = this.phrases;
    return newPhrase[Math.floor(Math.random()*newPhrase.length)];
  };

  handleInteraction(){}

  removeLife(){}

  checkForWin(){}

  gameOver(){}

 }
