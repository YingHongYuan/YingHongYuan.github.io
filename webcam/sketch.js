var video;

let webcamDefaultImg;


function setup() {	function setup() {
  createCanvas(0, 0);
  let cnv = createCanvas(0, 0);
  webcamDefaultImg = select("#webcamDefault");

  background(0);	  background(0);
  video = createCapture(VIDEO);	  video = createCapture(VIDEO, videoLoaded);
  video.size(320,240);	  video.size(320,240);
  video.parent("webcam");

  console.log(video);
}	}


function draw() {	function draw() {


}	}

function videoLoaded(){
  console.log("loaded");
  webcamDefaultImg.hide();

}
