/* https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js */

var bc;

function setup()
{
  createCanvas(windowWidth,windowHeight);
  background(0);
  
  bc = color(255, 50, 50);
}


function draw()
{  
  background(bc);
  
  noStroke();
  fill(random(10, 120));
  for(var i=0; i<500; i++)
  {
    ellipse(random(width), random(height), 2, 2);
  }
}


function touchStarted()
{
  // prevent default
  return false;
}

function touchMoved() 
{
  background(bc);
  for (var i=0; i<touches.length; i++)
  {
    noStroke();
    fill(255, 100, 100);
    ellipse(touches[i].x,touches[i].y,80,80)
    
    noFill();
    stroke(255, 0, 0);
    ellipse(mouseX, mouseY, 100+i*5, 100+i*5)
  }

  // prevent default
  return false;
}

function touchEnded()
{
  bc = color(random(255), random(255), random(255));
  // prevent default
  return false;
}