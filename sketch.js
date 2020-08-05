
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1;
var rect2;
var rect3;
var paperObject;
var ground;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	rect1=createSprite(700,620,10,80);
	rect1.shapeColor="red";


	rect2=createSprite(600,655,200,10);
	rect2.shapeColor="red";

	rect3=createSprite(500,620,10,80);
	rect3.shapeColor="red";


	paperObject=createSprite(50,630,30,30)
	paperObject.shapeColor="green";
	paperObject.velocityX=5;


	ground=createSprite(400,660,800,10);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		matter.Body.applyForce(paperObject,body,paperObject.body.position,{x:85,y:-85})

	 }
   }

