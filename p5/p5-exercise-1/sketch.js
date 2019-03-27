function setup(){
  createCanvas(500,500);
  background(0,250,300);

  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }
