function setup(){
  createCanvas(500,500);
  background(0,250,0);

// draw race car body
  nostroke();
  stroke(255);
  strokeWeight(5);
  fill(40,50,250);
  rect(mouseX,mouseY,50,30);

//draw race car wheels
  fill(0);
  ellipse(60,350,20,20);
  ellipse(90,350,20,20);
}

function draw() {

}
