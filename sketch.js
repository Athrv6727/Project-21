var wall,bullet;
var speed,weight,damage,thinkness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor=color(255)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  speed= random(223,321)
  weight=random(30,52)
  thinkness=random(22,83)
  bullet.velocityX=speed;

}

function draw() {
  background(80,80,80);  
  if(wall.x-bullet.x< bullet.width/2+wall.width/2 ){
    bullet.velocityX=0
    damage=0.5*weight*speed*speed/thinkness*thinkness*thinkness
   if(damage<10){
     wall.shapeColor="green"
   }
   if(damage>10){
  wall.shapeColor="red"
   }
  }
  drawSprites();
}
