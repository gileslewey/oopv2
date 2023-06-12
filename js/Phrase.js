/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{

constructor(phrase){
  this.phrase = phrase.toLowerCase();
}


addPhraseToDisplay(){
 const randArr = this.phrase.split("");
 const map1 = randArr.map(function (letter) {
   if (letter === ' '){
     return `<li class="space">${letter}</li>`
   } else { return `<li class="hide letter ${letter}">${letter}</li>`;
 }
 });
 let noCommas = map1.join('');
 textSpot.textContent = '';
 textSpot.insertAdjacentHTML("afterbegin", noCommas);
}

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
checkLetter(letter){
const currentPhrase = game.activePhrase.phrase;
	const letterMatch = currentPhrase.match(letter);
	if (letterMatch === null) {
      return false;
    } else {
      return true;
    this.activePhrase.showMatchedLetter(letter);
  }
}

//make selected key 
showMatchedLetter(letter){
let showLetter = document.getElementById('phrase').firstElementChild.children
for (let i=0; i<showLetter.length; i++){
  if (letter === showLetter[i].innerHTML) {
    showLetter[i].className = `show letter ${letter}`;
    const show = document.querySelectorAll(".show");
    show.forEach(element => {
      element.style.backgroundColor = showColor;
      element.style.color = 'white';
      });
    }
  }
}

}
