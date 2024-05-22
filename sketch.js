//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(mouseX,25,30,105); //an RGB color for the canvas' background
  //circle
  stroke(55,255,34); // an RGB color for the circle's border
  strokeWeight(5);
  fill(10,50,127,140); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,20,20); // center of canvas, 20px dia
  fill(mouseX,34,247,98);
  strokeWeight(5);
  rect(mouseX,237,100,26,100);
  fill(128,896,199);
  stroke(128,128,128);
  textSize(50);
  textFont('Forte');
  text('Purple Place',55,160);

   stroke(249,255,29);
   fill(105,53,171,204);
   ellipse(mouseY,width/5,height/20,11,20);

   line(mouseX,mouseY,50,100,20,20);

   arc(50, 50, 80, 20, PI+HALF_PI);






 }
