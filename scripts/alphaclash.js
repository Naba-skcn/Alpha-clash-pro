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
 function removeBackgroundcolorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');

 }
 function setElementTextValueById(elementId,value)
 {
    const element = document.getElementById(elementId);
    element.innerText = value;
 }
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function getElementTextById(elementId)
{
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}
 function handleKeyboardKeyupEvent(event)
{
        const playerPressed = event.key;
        if(playerPressed === 'Escape'){
            gameOver();
        }
        const currentAlphabetElement = document.getElementById('current-alphabet');
        const currentAlphabet = currentAlphabetElement.innerText;
        const expectedAlphabet = currentAlphabet.toLowerCase();

        if(playerPressed === expectedAlphabet){
            
            const currentScoreElement = document.getElementById('current-score');
            const currentScoreText = currentScoreElement.innerText;
            const currentScore = parseInt(currentScoreText);

            const newScore = currentScore + 1;
            currentScoreElement.innerText = newScore;

            removeBackgroundcolorById(expectedAlphabet);
            continueGame();
        }
        else 
        {
            const currentLifeElement = document.getElementById('current-life');
            const currentLifeText = currentLifeElement.innerText;
            const currentLife = parseInt(currentLifeText);

            const newLife = currentLife - 1;
            currentLifeElement.innerText = newLife;

            if(newLife === 0)
            {
               gameOver();
            }

        }

}


 document.addEventListener('keyup', handleKeyboardKeyupEvent);

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
   hideElementById('final-score');
   showElementById('play-ground');

   setElementTextValueById('current-life',5);
   setElementTextValueById('current-score',0);
   continueGame();
   
 }
 function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    const lastScore = getTextElementValueById('current-score');
    setElementTextValueById('last-score',lastScore);
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundcolorById(currentAlphabet);

 }

