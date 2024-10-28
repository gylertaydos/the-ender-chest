window.addEventListener('DOMContentLoaded', buttonSize, false); /*initial loading things? I think I'm doing this right, I tried following samples from the project design hub repo but I'm not totally sure*/

function buttonSize() {
    const button = document.getElementById("clickme")  /*assigning a constant for use in functions*/
    window.alert(button);
    button.addEventListener('click', resize) /* adding an event listener for when the button is clicked */
    alert ('Javascript loaded.');
}


function resize(){ /* the function which is supposed to be activated upon click, resizing the button to a random size */
    var randY = Math.random() * 100; /* Math.random returns a semi-random number from 0-1. multiplying by 100 and concatenating a % on the end in the last two lines of code to set that random number as a percentage for the purposes of resizing the button */
    var randX = Math.random() * 100;
    this.style.height = randY + "vh";
    this.style.width = randX + "vw";
    this.style.top = randX + "vh";
    this.style.left = randX + "vw";
    
}

/* for whatever reason, this doesn't work. I'm not sure why, and I've tried googling "javascript can't resize button", "javascript can't edit css", etc. but no one seems to have this issue which leads me to conclude I'm forgetting something very basic, but I ALSO can't figure out what*/