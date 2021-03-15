
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.  
	ground=new Ground(400,380,800,10)
	paper=new Paper(250,180,21,100)
	dustbin2=new Dustbin(720,230,10,100)
	dustbin1=new Dustbin(600,230,10,100)
	dustbin3=new Dustbin(650,220,100,10)

    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin2.display();
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin3.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:150});
	}
}
