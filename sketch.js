const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var paper1, dustbin1, dustbin2, dustbin3, ground;

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);	

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,450,100);
	ground = new Ground(width/2,600,width,20);
	dustbin1 = new Dustbin(1200,510,20,200);
	dustbin2 = new Dustbin(1100,580,200,20);
	dustbin3 = new Dustbin(1000,510,20,200);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);

  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:200,y:-250});
	}
}



