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
    
}
/**  Moves the bird small steps in percentage to the right*/
function moveBirdToTheRight() {
    //Fetch bird from html
    const bird = document.querySelector('img');
    // Update position
    left += 0.1;
    //Render position
    bird.style.left = left + '%';
}

