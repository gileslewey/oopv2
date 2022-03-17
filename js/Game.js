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


  handleInteraction(){
    console.log('handle interaction');
    keyStrokes.addEventListener('click', (event) => {
    let keyStroke = event.target.textContent;
    if (this.activePhrase.checkLetter(keyStroke) === true) {
    this.activePhrase.showMatchedLetter(keyStroke);
    event.target.className = 'chosen';
    event.target.disabled = true;
    } else {this.removeLife()
    event.target.className = 'wrong'
    event.target.disabled = true;
    } if (this.checkForWin()){
      this.gameOver(true);
    } if (this.missed > 4){
      this.gameOver(false)
      }
    })
  };

  removeLife() {
        this.missed += 1
        let missed = this.missed;
        document.querySelector(`#scoreboard ol :nth-child(${missed})`).firstChild.src = 'images/lostHeart.png'
    };

  checkForWin() {
    let phraseLength = this.activePhrase.phrase.split(' ').join('');
    let showLength = document.getElementsByClassName('show letter');
    if (showLength.length === phraseLength.length){
      return true;
      } else {
      return false;
    }
};


  gameOver(gameWon){
    if (this.checkForWin() === true){
      overlay.className = 'win';
      console.log('win');
      gameOverMessage.innerHTML = 'You Win!'
      keyRows.style.display = 'none';
      overlay.style.display = 'block';
      this.resetGame();
      console.log('Win');
    } else {
      overlay.className = 'lose';
      gameOverMessage.innerHTML = 'You Lose'
      keyRows.style.display = 'none';
      overlay.style.display = 'block';
      this.resetGame();
      console.log('Lose');
    }

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

  resetGame(){
      this.activePhrase = null;
      this.missed = 0;
      textSpot.innerHTML = ''
      for (let i = 0; i < buttons.length; i++){
              buttons[i].className = 'key'
              buttons[i].disabled = false;
      }
      for (let i=1; i<lives.length +1; i++) {
        document.querySelector(`#scoreboard ol :nth-child(${i})`).firstChild.src = 'images/liveHeart.png'
      }
      keyRows.style.display = 'block';
  }
 /**
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */
  getRandomPhrase(){
    let newPhrase = this.phrases;
    return newPhrase[Math.floor(Math.random()*newPhrase.length)];
  };
//maybe phrases is why I get it 5*
 }
