
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ball;
function preload()
{
   
}

function setup() {
	createCanvas(1200, 700);

  var ball_options={
	isStatic:false,
	restituition:0.3,
	friction:0,
	density:1.2
  }
  
  engine = Engine.create();
	world = engine.world;
	ball=Bodies.circle(200,600,20,ball_options)
	World.add(world,ball);
	//Create the Bodies Here.
	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	rightSide = new ground(800,600,20,120)

	Engine.run(engine);
  
}
function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball,ball.position.x,{x:75,y:-75})
}
}

function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x, ball.position.y, 20,20); 
  drawSprites();
 
}




