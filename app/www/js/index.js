/* https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js */

var bc;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  bc = color(255, 150, 150);
}


function draw()
{
  noStroke();
  fill(255, 100, 100);
  rect((width/4)*0, 50, (width/4)*0.9, 30);
}


function mousePressed()
{
   // for web test  
  noStroke();
  fill(255, 100, 100);
  rect((width/4)*1, 50, (width/4)*0.9, 30);
  return false;
}

function touchStarted()
{
  noStroke();
  fill(255, 100, 100);
  rect((width/4)*2, 50, (width/4)*0.9, 30);
  
  // prevent default
  return false;
}

function touchMoved() 
{
  background(bc);
  
  noStroke();
  fill(255, 100, 100);
  rect((width/4)*3, 50, (width/4)*0.9, 30);
  
  // background(bc);
  //print(touches.length);
  //console.info(touches);
  //console.log(touches);
  
  var bs = min(width,height) / 5;
  
  textSize(32);
  fill(0, 102, 153);
  text("Touch: ", 10, 30);
  text(touches.length, 130, 30);
  
  for (var i=0; i<touches.length; i++)
  {
    strokeWeight(2);
    stroke(255);
    fill(255, 200, 100);
    ellipse(touches[i].x,touches[i].y,bs,bs);
  }

  
  stroke(255, 0, 0);
  noFill();
  ellipse(mouseX, mouseY, bs+10, bs+10);
  
  // prevent default
  return false;
}

function touchEnded()
{
  bc = color(random(255), random(255), random(255));
  background(bc);
  // prevent default
  return false;
}
