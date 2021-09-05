const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground,block1;
var stand1,stand2;
var polygon;
var slingShot;
var background_img,x,y;
function preload(){
  background_img=loadImage("background.jpg")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  //block1 = new Block(200,200,30,40);
  

  //polygon holder with slings
  
 
  
  
}
function draw() {
  //background(background_img);
  ground.display(); 
 // block1 = new Block(mouseX,mouseY,30,40);
 // block1.display();
  Engine.update(engine);
  
  
   
  
 
  
}
function mousePressed(){
  block1 = createSprite(mouseX,mouseY,30,40);
 
}
