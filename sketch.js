var bullet,wall;
var speed,weight;
var thickness;
thickness = random(22,83)

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,40,40);
  wall = createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(255,255,255);  
  bullet.collide(wall);
  wall.shapeColor = "grey";
  bullet.velocityX = speed;
  0.5*weight*speed*speed/22500;
  bullet.shapeColor = "white";
  if(bullet.x > 1500){
    bullet.shapeColor = "white";
  }
  if(bullet.x < 1500){
    bullet.shapeColor = "green";
  }
  drawSprites();
}