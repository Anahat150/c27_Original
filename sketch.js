
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var boxes=[];

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:true
  };
  ground=Matter.Bodies.rectangle(100,300,400,20,option);
  ground2=Matter.Bodies.rectangle(300,300,20,400,option);
  ground3=Matter.Bodies.rectangle(10,150,20,400,option);
  ground4=Matter.Bodies.rectangle(150,150,400,20,option);
  World.add(world,ground);
  World.add(world,ground2);
  World.add(world,ground3);
  World.add(world,ground4);

  //box1 = new Box(200,100,50,50);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed(){
  boxes.push(
    
    
    new Box(mouseX,mouseY,20,20)
    
    
    )
}

function draw() 
{
  background(51);
  rect(ground.position.x,ground.position.y,400,10);
  Engine.update(engine);
 for(var i=0;i<boxes.length;i++) {
 boxes[i].show();}
  
  
}

