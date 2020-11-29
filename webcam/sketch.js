var video;
let webcamDefaultImg;

function setup() {

  let cnv = createCanvas(0, 0);
  webcamDefaultImg = select("#webcamDefault");

  background(0);
  video = createCapture(VIDEO, videoLoaded);
  video.size(280,240);
  video.parent("webcam");

  console.log(video);
}

function draw() {

}

function videoLoaded(){
  console.log("loaded");
  webcamDefaultImg.hide();

}
