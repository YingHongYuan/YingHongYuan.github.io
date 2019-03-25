function setup(){
  createCanvas(500,500);
  background(0,250,0);


   if(frameCount > 180) {
  vroom.freq(carX);

  if(carX > 500) {
      carX = -50
  } else {
    //carX = carX + 3;
  }

// draw race car body
  stroke(255);
  strokeWeight(5);
  fill(40,50,250);
  rect(mouseX,mouseY,50,30);
  }else{
  vroom.freq(0);
}

  function draw() {


    background(0, 255,0,120);
}

//draw race car wheels
  fill(0);{
  ellipse(60,350,20,20);
  ellipse(90,350,20,20);
}

if (false && true){
  console.log("truth");
  }
}
