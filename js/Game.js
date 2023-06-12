/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {

  constructor(){
   this.missed = 0;

   this.phrases = [
   new Phrase('Bad news travels fast'),
   new Phrase('Birds of a feather'),
   new Phrase('Cheats never prosper'),
   new Phrase('Keep your chin up'),
   new Phrase('A piece of cake'),
   new Phrase('An arm and a leg'),
   new Phrase('Back to square one'),
   new Phrase('Barking up the wrong tree'),
   new Phrase('Beating around the bush'),
   new Phrase('Curiosity Killed the cat'),
   new Phrase('No questions asked'),
   new Phrase('Jump the gun'),
   new Phrase('Down the rabbit hole'),
   new Phrase('Elephant in the room'),
   new Phrase('Everything but the kitchen sink'),
   new Phrase('No questions asked'),
   new Phrase('Raining cats and dogs'),
   new Phrase('Make love not war')
   ];
  this.activePhrase = null;
  }


  //handles target pad and keyboard interaction
  handleInteraction(input){
    let keyStroke = input.textContent;
    if (this.activePhrase.checkLetter(keyStroke) === true) {
    this.activePhrase.showMatchedLetter(keyStroke);
    input.className = 'chosen';
    input.disabled = true;
    const chosen = document.querySelectorAll(".chosen");
    chosen.forEach(element => {
      element.style.backgroundColor = chosenColor;
      element.style.color = 'white';
      });
    } else {this.removeLife()
    input.className = 'wrong';
    input.disabled = true;
    const wrong = document.querySelectorAll(".wrong");
    wrong.forEach(element => {
      element.style.backgroundColor = wrongColor;
      element.style.color = 'white';
      });
    } if (this.checkForWin()){
      this.gameOver(true);
    } if (this.missed > 4){
      this.gameOver(false)
      }
  };

  //remove life and heart image
  removeLife() {
        this.missed += 1
        let missed = this.missed;
        document.querySelector(`#scoreboard ol :nth-child(${missed})`).firstChild.src = 'images/lostHeart.png'
    };
  //check if game win or lost
  checkForWin() {
    let phraseLength = this.activePhrase.phrase.split(' ').join('');
    let showLength = document.getElementsByClassName('show letter');
    if (showLength.length === phraseLength.length){
      return true;
      } else {
      return false;
    }
};

  //game won or lost
  gameOver(gameWon){
    if (this.checkForWin() === true){
      overlay.className = 'win';
      const win = document.querySelector(".win");
      win.style.backgroundColor = winColor;
      //remove old image
      let removeImage = document.querySelector('.finalImage');
      if (removeImage) {
        removeImage.remove();
      }
      //create and add image
      const img = new Image();
        img.style.margin = "25px auto";
        img.src = "./images/22.jpg";
        img.style.display = 'block';
        img.className = 'finalImage';
        endImage.before(img);
      gameOverMessage.innerHTML = winMessage;
      keyRows.style.display = 'none';
      overlay.style.display = 'block';
      this.resetGame();
    } else {
      overlay.className = 'lose';
      const lose = document.querySelector(".lose");
        lose.style.backgroundColor = loseColor;
        //remove old image
        let removeImage = document.querySelector('.finalImage');
        if (removeImage) {
          removeImage.remove();
        }
        //create and add image
      const img = new Image();
        img.style.margin = "25px auto";
        img.src = "./images/21.jpg";
        img.style.display = 'block';
        img.className = 'finalImage';
        endImage.before(img);
      gameOverMessage.innerHTML = loseMessage;
      keyRows.style.display = 'none';
      overlay.style.display = 'block';
      this.resetGame();
    }
  }
  /**
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    keyRows.style.display = 'block';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };


  //game reset function
  resetGame(){
      this.activePhrase = null;
      this.missed = 0;
      textSpot.innerHTML = '';
      for (let i = 0; i < buttons.length; i++){
              buttons[i].className = 'key';
              buttons[i].disabled = false;
              buttons[i].style.backgroundColor = '#D2D2D2';
              buttons[i].style.color = 'black';
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
 }
