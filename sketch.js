const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundObject,paperObject,dustbinobj

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	paperObject=new paper(150,450,40)
	groundObject=new Ground(width/2,270,width ,20)
	dustbinobj=new Dustbin(1200,650)
     var render=Render.create({
		 element : document.body,
		 engine:engine,
		 options: {
			width: 1200,
			height: 700,
			wireframes: false
		 }
	 })
	Engine.run(engine);
	}



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paperObject.display()
  groundObject.display()
 dustbinobj.display()
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}



