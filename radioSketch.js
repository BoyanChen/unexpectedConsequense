let img;
let song;
function setup() {
    createCanvas(800,600);

    song = loadSound('Assets/Time in a bottle');
}

function draw() {
    fill(0);
    rect(30,30,50,50);
    song.play();
}