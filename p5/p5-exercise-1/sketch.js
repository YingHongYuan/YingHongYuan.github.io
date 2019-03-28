function setup(){
  {
    loadImage('Lottery_Wheel-512.png', img => {
    image(img, -1, 0);
  });
  createCanvas(500,500);
  background(0,250,300);
}
}

function draw(){
  ellipse(255, 233, 233, 233);
}
