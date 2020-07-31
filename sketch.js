var wall,bullet;
var speed,wieght,thickness;

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200,200,thickness,height/2);
  wall.ShapeColor=color(80,80,80);
  bullet=createSprite(50,200,50,50);
  speed=random(223,321);
  wieght=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.y < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*wieght*speed*speed/(thickness*thickness*thickness);
    if(damage<10){
      bullet.ShapeColor=color(0,255,0);
    }
    if(damage>10){
      bullet.ShapeColor=color(255,0,0);
    }
  }
  drawSprites();
}

  
