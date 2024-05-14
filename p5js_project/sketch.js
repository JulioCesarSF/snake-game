/* draw a brown wooden boat with a white sail on top of a blue ocean
- the sky is light blue with one white cloud
- the cloud has three different sized circles that overlap each other
- the sun is a yellow circle inside a yellow-orange circle inside an orange circle in the top right corner
- the sail is a large white triangle connected to the top of the dark brown mast down to the tip of the front of the boat
- the boat is curved at the bottom and has a dark brown rectangle for the body
*/

function setup() {
  createCanvas(400, 400);
  background(135, 206, 250); // light blue
  noStroke();
  
  // draw the ocean
  fill(0, 0, 205); // dark blue
  rect(0, 300, 400, 100);
  
  // draw the boat
  fill(139, 69, 19); // dark brown
  beginShape();
  vertex(100, 300);
  vertex(300, 300);
  vertex(350, 250);
  vertex(50, 250);
  endShape(CLOSE);
  
  // draw the mast
  fill(139, 69, 19); // dark brown
  rect(200, 100, 10, 200);
  
  // draw the sail
  fill(255); // white
  beginShape();
  vertex(200, 100);
  vertex(200, 250);
  vertex(300, 250);
  endShape(CLOSE);
  
  // draw the cloud
  fill(255); // white
  ellipse(50, 50, 50, 50);
  ellipse(75, 50, 75, 75);
  ellipse(100, 50, 50, 50);
  
  // draw the sun
  fill(255, 165, 0); // orange
  ellipse(350, 50, 100, 100);
  fill(255, 215, 0); // yellow-orange
  ellipse(350, 50, 80, 80);
  fill(255, 255, 0); // yellow
  ellipse(350, 50, 60, 60);
}
  