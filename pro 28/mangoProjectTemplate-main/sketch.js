
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1020,70,30)
	mango3=new mango(1050,190,30)
	mango4=new mango(950,160,35)
	mango5=new mango(1200,160,30)
	mango6=new mango(955,260,30)
	mango7=new mango(1130,240,28)

	stoneObj=new stone(200,340,40)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	slingshot=new SlingShot(stoneObj.body,{x:200,y:340})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  stoneObj.display()
  groundObject.display();
  slingshot.display()
  detectPosition(stoneObj,mango1)
  detectPosition(stoneObj,mango2)
  detectPosition(stoneObj,mango3)
  detectPosition(stoneObj,mango4)
  detectPosition(stoneObj,mango5)
  detectPosition(stoneObj,mango6)
  detectPosition(stoneObj,mango7)
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	slingshot.fly()
}

function detectPosition(stone,mango){
mangoPos=mango.body.position
stonePos=stone.body.position;
var distance=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)
if(distance<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false)
}

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:200,y:340})
		slingshot.attach(stoneObj.body)
	}
}