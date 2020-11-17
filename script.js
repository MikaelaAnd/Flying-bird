// Event som triggas, inga paranteser vilket säger att funktionen ska köras när det är dags, inte direkt.
window.onload = start;

/**The position of the bird relative to the left side of the page*/
let left = 0;
let flyRight = true;



/** Starts the program on page load*/
function start() {
    fly(); 
}

// Denna funktion kmr köras en gång i sekunden, vilket gör att fågeln flyttar på sig
/** Sets interval to make bird "fly" */
function fly() {
    setInterval(moveBird, 12);
    //fågeln flyttar till vänster efter 4sek.
}

function moveBird() {
    if (flyRight) {
        moveBirdToTheRight();
    }
    else {
        moveBirdToTheLeft();
    }

}


/**  Moves the bird small steps in percentage to the right*/
function moveBirdToTheRight() {
    //Fetch bird from html
    const bird = document.querySelector('img')
    // Update position
    left += 0.1;
    //Render position
    bird.style.left = left + '%';

    if (left > 90) {
        bird.style.transform = "scaleX(-1)";
        flyRight = false;
    }
}

function moveBirdToTheLeft() {
    const bird = document.querySelector('img')
    bird.style.left = left + '%';

    left -= 0.1;
    if (left < 0) {
        bird.style.transform = "scaleX(1)";
        flyRight = true;
    }
}