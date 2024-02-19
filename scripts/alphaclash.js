function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    console.log(index,alphabet);
    return alphabet;

}
 function setBackgroundcolorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

 }


 

function continueGame(){
       const alphabet = getARandomAlphabet();

       const currentAlphabetElement = document.getElementById('current-alphabet');
       currentAlphabetElement.innerText = alphabet;
       setBackgroundcolorById(alphabet);
}

function play(){
    // const homeSection = document.getElementById('home-screen');
    // homeSection.classList.add('hidden');
 
    // const playGroundSection = document.getElementById('play-ground');
   //  playGroundSection.classList.remove('hidden');
   hideElementById('home-screen');
   showElementById('play-ground');
   continueGame();
   
 }


