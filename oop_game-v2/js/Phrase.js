/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{

constructor(phrase){
  console.log('hi there');
  this.phrase = phrase.toLowerCase();
}

   addPhraseToDisplay(){
     const randArr = this.phrase.split("");
     const map1 = randArr.map( function (letter) {
       if (letter === ' '){
         return `<li class="space">${letter}</li>`
       } else { return `<li class="hide letter ${letter}">${letter}</li>`;
     }
     });
     let noCommas = map1.join('');
     let textSpot = document.getElementById('phrase').getElementsByTagName('ul')[0];
     textSpot.textContent = '';
     textSpot.insertAdjacentHTML("afterbegin", noCommas);
}

   checkLetter(){


   }

   showMatchedLetter(){



   }




 }
