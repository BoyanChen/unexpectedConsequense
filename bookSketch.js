function setup() {

    createCanvas(800, 300);
}

function draw() {
    if (mouseIsPressed) {
        fill(45);
    } else {
        fill(233);
    }
    ellipse(mouseX, mouseY, 80, 80);
}