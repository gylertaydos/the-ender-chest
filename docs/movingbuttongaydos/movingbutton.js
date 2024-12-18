window.addEventListener('DOMContentLoaded', buttonSize, false); /*initial loading things? I think I'm doing this right, I tried following samples from the project design hub repo but I'm not totally sure*/

const button = document.getElementById("clickme") /*assigning a constant for use in functions*/

function buttonSize() {
    button.addEventListener("click", resize) /* adding an event listener for when the button is clicked */
}

function resize(){ /* the function which is supposed to be activated upon click, resizing the button to a random size */
    var randY = Math.random() * 100; /* Math.random returns a semi-random number from 0-1. multiplying by 100 and concatenating a % on the end in the last two lines of code to set that random number as a percentage for the purposes of resizing the button */
    var randX = Math.random() * 100;
    button.style.height = randY + "vh";
    button.style.width = randX + "vw";
    button.style.top = randX+ "vh";
    button.style.left = randX+ "vw";
    /*alert ('The function is indeed working... somewhat');*/
}
