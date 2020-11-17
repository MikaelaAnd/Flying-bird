// Event som triggas, inga paranteser vilket säger att funktionen ska köras när det är dags, inte direkt.
window.onload = start;

/**The position of the bird relative to the left side of the page*/
let left = 0;



/** Starts the program on page load*/
function start() {
    fly(); 
}

// Denna funktion kmr köras en gång i sekunden, vilket gör att fågeln flyttar på sig
/** Sets interval to make bird "fly" */
function fly() {
    setInterval(moveBirdToTheRight, 12);
    //fågeln flyttar till vänster efter 4sek.
    
    
}
/**  Moves the bird small steps in percentage to the right*/
function moveBirdToTheRight() {
    //Fetch bird from html
    const bird = document.getElementById(bird1);
    // Update position
    left += 0.1;
    //Render position
    bird1.style.left = left + '%';
    if (left > 30) {
        setInterval(moveBirdToTheLeft, 12);
        left -= 0.1;
    }
}

function moveBirdToTheLeft() {
    const bird = document.getElementById(bird2)
    left -= 0.1;
    if (left < 0) {
        setInterval(moveBirdToTheRight, 12);
        left += 0.1;
    }
}