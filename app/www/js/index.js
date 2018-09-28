/* https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js */

var bc;

function setup()
{
  createCanvas(displayWidth,displayHeight);
  background(0);
  
  bc = color(255, 150, 150);
}


function draw()
{
  noStroke();
  fill(255, 100, 100);
  ellipse(width/2, 200, 100, 100);
//   background(bc);
  
//   noStroke();
//   fill(random(10, 120));
//   for(var i=0; i<500; i++)
//   {
//     ellipse(random(width), random(height), 2, 2);
//   }
  
  // for(var i=0; i<5; i++)
  // {
  // fill(random(255), random(255), random(255));
  //   ellipse(50+random(width)-100, 50+random(height)-100, 80, 80);
  // }
}


function touchStarted()
{
  noStroke();
  fill(155, 200, 100);
  ellipse(width/2, 300, 100, 100);
  
  // prevent default
  return false;
}

function touchMoved() 
{
  // noStroke();
  // fill(155, 100, 200);
  // ellipse(width/2, 500, 100, 100);
  
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
    noStroke();
    fill(255, 100, 100);
    ellipse(touches[i].x,touches[i].y,bs,bs);
    
    noFill();
    stroke(255, 0, 0);
    ellipse(mouseX, mouseY, bs+i*10, bs+i*10);
  }

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


function windowResized()
{
  resizeCanvas(displayWidth, displayHeight);
}