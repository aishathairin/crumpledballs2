
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;																									
var dustbin1;
var paper;

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

  	var groundOptions = 
  	{
	  	isStatic : true
	}
	  
	ground = Bodies.rectangle(400, 665, 200, 10, groundOptions);
	World.add(world,ground);

	paper = new Paper (200,450,70);
	dustbin1 = new Dustbin (1050,545,230,230);

}

function draw() 
{
	  Engine.update(engine);  	
	  background("black");	  
	  fill ("brown");
	  rectMode(CENTER);
	  rect(ground.position.x, ground.position.y, 1600, 10);

	  paper.display();
	  dustbin1.display();

  drawSprites();
}

function keyPressed()
{	 
	if (keyCode === UP_ARROW) 
	{
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y :-85});
	}
}