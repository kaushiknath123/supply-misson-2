var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var packageOption = {
		restitution:0.75
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , packageOption );
	World.add(world, packageBody);
	

	var groundOption={
		isStatic:true
	}
	var stopOption = {
		isStatic:false
	}
	ground = Bodies.rectangle(width/2, 650, width, 10 , groundOption  );
 	World.add(world, ground);


	Engine.run(engine);

	box1 = new box(200, 550, 10, 200);
	box2 = new box(500, 550, 10, 200);
	box3 = new box(350, 645, 300, 10);
  
}


function draw() {
  rectMode(CENTER);
 
  Engine.update(engine);
 
  background(0);
  
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
 
  drawSprites();
  pakageFalling();

	box1.display();
	box2.display();
	box3.display();

 
}

function pakageFalling() {
 if (keyCode === DOWN_ARROW) {
   
	packageBody = Bodies.circle(width/2 , 200 , 5 , packageOption, stopOption );
	World.add(world, packageBody);
    
  }
}



