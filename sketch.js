var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,590,1200,20);
	paper=new paper(90,400,30);
	

	dustbin1=new Dustbin(width-250,520,100,0);
	dustbin2=new Dustbin(width-150,570,200,PI/2);
	dustbin3=new Dustbin(width-50,520,100,0);
	 
	 img=loadImage("dustbingreen.png");


	Engine.run(engine);
  
}


function draw() {
	//Engine.update(engine);
  rectMode(CENTER);
  background("grey");

  ground.display();
  paper.display();
  
  dustbin2.display();
  dustbin1.display();
  dustbin3.display();

  image(img,width-150,500,250,170);
 
}

function keyPressed() {
  /*if (keyCode === LEFT_ARROW) {

    helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)


  } else if (keyCode === RIGHT_ARROW) {
    helicopterSprite.x=helicopterSprite.x+20;
    translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)
  }
  else*/ if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200});
    
  }
}


