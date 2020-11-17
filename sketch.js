var fr,mr;


function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 50, 50);
  mr=createSprite(400, 200, 50, 50);
  fr.shapeColor="red";
  mr.shapeColor="red";
}

function draw() {
  background(0);
mr.y=mouseY;
mr.x=mouseX;

if((mr.x-fr.x<mr.width/2+fr.width/2)&&
(fr.x-mr.x<mr.width/2+fr.width/2)&&
(mr.y-fr.y<mr.height/2+fr.height/2)&&
(fr.y-mr.y<mr.height/2+fr.height/2)){
  fr.shapeColor="blue";
  mr.shapeColor="blue";
}
else{
  fr.shapeColor="red";
  mr.shapeColor="red"; 
}
  drawSprites();
}