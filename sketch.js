var Zenia,Tourus,Cyclap;
var weight1,weight2,weight3;
var speed1,speed2,speed3;
var deformation1,deformation2,deformation3,constantValue;
var b1,b2,b3;
var wall1,wall2,wall3;

function setup(){

  createCanvas(800,400);
Zenia=createSprite(30,85,10,10);
Tourus=createSprite(30,215,10,10);
Cyclap=createSprite(30,335,10,10);

Zenia.shapeColor="white";
Tourus.shapeColor="white";
Cyclap.shapeColor="white";

Zenia.velocityX=4;
Tourus.velocityX=3;
Cyclap.velocityX=2;

b1=createSprite(400,100,800,10);
b2=createSprite(400,230,800,10);
b3=createSprite(400,350,800,10);
b1.shapeColor="white";
b2.shapeColor="white";
b3.shapeColor="white";

wall1=createSprite(790,55,20,80);
wall2=createSprite(790,185,20,80);
wall3=createSprite(790,305,20,80);

weight1=2260;
weight2=1522
weight3=3000

speed1=60;
speed2=50
speed3=45

constantValue=22500

deformation1=(0.5*weight1*speed1*speed1)/constantValue;
deformation2=(0.5*weight2*speed2*speed2)/constantValue;
deformation3=(0.5*weight3*speed3*speed3)/constantValue;
}

function draw() {
  background("black"); 
  text("Zenia",20,75);
  text("Tourus",20,205);
  text("Cyclap",20,325);
  console.log(Zenia.x,wall1.x) ;
if(wall1.x-Zenia.x<=(Zenia.width/2+wall1.width/2+10)&&deformation1>=180){
Zenia.velocityX=0;
Zenia.shapeColor="red";
//stroke="red";
text("FATAL",380,80);
}
if(wall2.x-Tourus.x<=(Tourus.width/2+wall2.width/2+10)&&deformation2<=100){
  Tourus.velocityX=0;
  Tourus.shapeColor=color(0,255,0);
  text("SAFE",380,200);
}
if(wall3.x-Cyclap.x<=(Cyclap.width/2+wall3.width/2+10)&&deformation3<=180&&deformation3>=100){
  Cyclap.velocityX=0;
  Cyclap.shapeColor="yellow";
  text("AVERAGE",380,320);
}
  drawSprites();
}