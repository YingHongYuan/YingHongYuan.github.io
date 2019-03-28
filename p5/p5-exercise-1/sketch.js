

function setup() {
  createCanvas(500, 500);
  background(0,250,300);
  ellipse(252, 252, 214, 222);
  loadImage('clock.png', img => {
    image(img, 142, 142);
  });
}

function draw() {
  
  line(253, 256, mouseX, mouseY);
}
