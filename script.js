// Event som triggas, inga paranteser vilket säger att funktionen ska köras när det är dags, inte direkt.
window.onload = start;
let left = 0;

function start() {
    fly();
    
}
// Denna funktion kmr köras en gång i sekunden, vilket gör att fågeln flyttar på sig
function fly() {
    setInterval(moveBirdToTheRight, 12);
    
}

function moveBirdToTheRight() {
    //Fetch bird from html
    const bird = document.querySelector('img');
    // Update position
    left += 0.1;
    //Render position
    bird.style.left = left + '%';
}

