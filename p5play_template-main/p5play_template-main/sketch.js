var ball;
function setup() {
  createCanvas(500,500);
  ball = createSprite(350,400,50,50)
}

function draw() 
{
 console.log ("Aman")
  background("green");
if(keyDown (RIGHT_ARROW)) {
  ball.velocityX = 2
  ball.velocityY = 0
} 
if(keyDown (LEFT_ARROW)) {
  ball.velocityX = -2
  ball.velocityY = 0
}
if(keyDown (UP_ARROW)) {
  ball.velocityX = 0
  ball.velocityY = -2
}
if(keyDown (DOWN_ARROW)) {
   ball.velocityX = 0
   ball.velocityY = 2
}
drawSprites();
}




